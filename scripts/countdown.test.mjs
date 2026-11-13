import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import {
  MOCK_LAUNCH_AT,
  remainingTime,
  bucharestDayKey,
  dailyChallenge,
  cleanAnswer,
} from '../src/countdown-model.js';

const previewHtml = readFileSync(new URL('../countdown.html', import.meta.url), 'utf8');
const modelSource = readFileSync(new URL('../src/countdown-model.js', import.meta.url), 'utf8').replaceAll('export ', '');
const previewSource = readFileSync(new URL('../src/countdown.js', import.meta.url), 'utf8')
  .replace(/^import .*?;\n/, '').replaceAll('export ', '');

function preview({ now = '2026-11-14T12:00:00Z', reducedMotion = false } = {}) {
  const dom = new JSDOM(previewHtml, {
    url: 'https://edumindset.test/countdown.html', runScripts: 'outside-only', pretendToBeVisual: true,
  });
  const { window } = dom;
  const NativeDate = window.Date;
  let currentMs = NativeDate.parse(now);
  let hidden = false;
  let scheduled = null;
  let preferenceListener;
  window.Date = class extends NativeDate {
    constructor(...args) { super(...(args.length ? args : [currentMs])); }
    static now() { return currentMs; }
  };
  window.setTimeout = callback => { scheduled = callback; return 1; };
  window.clearTimeout = () => { scheduled = null; };
  Object.defineProperty(window.document, 'hidden', { get: () => hidden });
  const preference = {
    matches: reducedMotion,
    addEventListener(_name, listener) { preferenceListener = listener; },
  };
  window.matchMedia = () => preference;
  window.eval(`${modelSource}\n${previewSource}`);
  return {
    window,
    $: selector => window.document.querySelector(selector),
    close: () => dom.window.close(),
    advance(date) { currentMs = NativeDate.parse(date); scheduled?.(); },
    visibility(value) {
      hidden = value;
      window.document.dispatchEvent(new window.Event('visibilitychange'));
    },
    reduced(value) { preference.matches = value; preferenceListener?.(); },
    isScheduled: () => scheduled !== null,
    submit() {
      window.document.querySelector('#thought-form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
    },
  };
}

test('mock Romanian midnight has one absolute deadline in every visitor time zone', () => {
  assert.equal(MOCK_LAUNCH_AT, '2026-11-25T00:00:00+02:00');
  assert.equal(new Date(MOCK_LAUNCH_AT).toISOString(), '2026-11-24T22:00:00.000Z');
  const target = Date.parse(MOCK_LAUNCH_AT);
  const now = Date.parse('2026-11-24T21:59:00Z');
  assert.deepEqual(remainingTime(target, now), {
    days: 0, hours: 0, minutes: 1, seconds: 0, expired: false,
  });
});

test('clock rounds unfinished seconds upward and carries units at their boundaries', () => {
  const target = Date.parse(MOCK_LAUNCH_AT);
  const cases = [
    [1, { days: 0, hours: 0, minutes: 0, seconds: 1, expired: false }],
    [59_001, { days: 0, hours: 0, minutes: 1, seconds: 0, expired: false }],
    [3_600_000, { days: 0, hours: 1, minutes: 0, seconds: 0, expired: false }],
    [86_400_001, { days: 1, hours: 0, minutes: 0, seconds: 1, expired: false }],
    [183_845_000, { days: 2, hours: 3, minutes: 4, seconds: 5, expired: false }],
  ];
  for (const [milliseconds, expected] of cases) {
    assert.deepEqual(remainingTime(target, target - milliseconds), expected);
  }
});

test('expiry and reload after the deadline never produce negative clock units', () => {
  const target = Date.parse(MOCK_LAUNCH_AT);
  for (const now of [target, target + 1, target + 30 * 86_400_000]) {
    assert.deepEqual(remainingTime(target, now), {
      days: 0, hours: 0, minutes: 0, seconds: 0, expired: true,
    });
  }
});

test('daily content uses Romania day boundaries including summer daylight saving', () => {
  assert.equal(bucharestDayKey(new Date('2026-11-13T21:59:59Z')), '2026-11-13');
  assert.equal(bucharestDayKey(new Date('2026-11-13T22:00:00Z')), '2026-11-14');
  assert.equal(bucharestDayKey(new Date('2026-06-13T20:59:59Z')), '2026-06-13');
  assert.equal(bucharestDayKey(new Date('2026-06-13T21:00:00Z')), '2026-06-14');
});

test('daily challenge is stable within a Romanian day and contains usable prompts', () => {
  const early = dailyChallenge(new Date('2026-11-13T22:00:00Z'));
  const late = dailyChallenge(new Date('2026-11-14T21:59:59Z'));
  assert.deepEqual(early, late);
  assert.notEqual(early.id, undefined);
  assert.ok(early.question.trim().length > 10);
  assert.ok(early.hint.trim().length > 10);
  const questions = new Set(Array.from({ length: 12 }, (_, index) =>
    dailyChallenge(new Date(Date.UTC(2026, 10, 14 + index, 12))).question));
  assert.ok(questions.size > 1, 'returning visitors should see more than one challenge');
});

test('share-card answer removes control characters, normalizes spaces and keeps Romanian text', () => {
  assert.equal(cleanAnswer('  Învăț\tcu\n sens.  '), 'Învăț cu sens.');
  assert.equal(cleanAnswer('Idee\u0000nouă\u0007'), 'Ideenouă');
  assert.equal(cleanAnswer('    '), '');
  const emojiAnswer = cleanAnswer('🧠'.repeat(161));
  assert.equal(Array.from(emojiAnswer).length, 160);
  assert.equal(emojiAnswer, '🧠'.repeat(160));
  assert.equal(Array.from(cleanAnswer('Ș'.repeat(200))).length, 160);
});

test('preview rejects whitespace and presents user text without parsing HTML', () => {
  const page = preview();
  const { $, window } = page;
  try {
    assert.equal($('#thought-form').hidden, false);
    $('#thought').value = ' \n\t ';
    page.submit();
    assert.match($('#thought').validationMessage, /Scrie un gând/);
    assert.equal($('#thought-result').hidden, true);
    $('#thought').value = '  <img src=x onerror="alert(1)"> Învăț.  ';
    $('#thought').dispatchEvent(new window.Event('input'));
    assert.equal($('#thought').validationMessage, '');
    page.submit();
    assert.equal($('#print-answer').textContent, '<img src=x onerror="alert(1)"> Învăț.');
    assert.equal($('#print-answer').children.length, 0);
    assert.equal($('#thought-result').hidden, false);
    assert.equal($('#thought-form').hidden, true);
    assert.equal(window.document.activeElement.id, 'download-thought');
  } finally { page.close(); }
});

test('editing a generated page preserves the answer and returns keyboard focus', () => {
  const page = preview();
  const { $, window } = page;
  try {
    $('#thought').value = '  Învăț\nprin întrebări.  ';
    page.submit();
    assert.equal($('#thought').value, 'Învăț prin întrebări.');
    $('#edit-thought').click();
    assert.equal($('#thought-form').hidden, false);
    assert.equal($('#thought-result').hidden, true);
    assert.equal($('#thought').value, 'Învăț prin întrebări.');
    assert.equal(window.document.activeElement.id, 'thought');
    assert.equal($('#thought-count').textContent, `${Array.from($('#thought').value).length} / 160`);
  } finally { page.close(); }
});

test('launch rehearsal changes the local view and can return without navigation', () => {
  const page = preview();
  const { $, window } = page;
  try {
    const originalUrl = window.location.href;
    $('#rehearse-launch').click();
    assert.equal($('#launch-ready').hidden, false);
    assert.equal($('#launch-clock').hidden, true);
    assert.equal(window.document.activeElement.id, 'launch-ready');
    assert.equal($('#rehearse-launch').textContent, 'Înapoi la numărătoare');
    assert.equal(window.location.href, originalUrl);
    $('#rehearse-launch').click();
    assert.equal($('#launch-ready').hidden, true);
    assert.equal($('#launch-clock').hidden, false);
    assert.equal(window.location.href, originalUrl);
  } finally { page.close(); }
});

test('motion control toggles independently and follows reduced-motion preference changes', () => {
  const page = preview();
  const { $, window } = page;
  try {
    assert.equal($('#launch-motion').hidden, false);
    $('#launch-motion').click();
    assert.equal(window.document.documentElement.hasAttribute('data-motion-paused'), true);
    assert.equal($('#launch-motion').textContent, 'Pornește animația');
    $('#launch-motion').click();
    assert.equal(window.document.documentElement.hasAttribute('data-motion-paused'), false);
    page.reduced(true);
    assert.equal($('#launch-motion').hidden, true);
    page.reduced(false);
    assert.equal($('#launch-motion').hidden, false);
  } finally { page.close(); }
});

test('hidden tabs stop scheduled ticks and resume from the real deadline', () => {
  const page = preview({ now: '2026-11-24T21:59:59Z' });
  const { $, window } = page;
  try {
    assert.equal($('[data-unit="seconds"]').textContent, '01');
    assert.equal(page.isScheduled(), true);
    page.visibility(true);
    assert.equal(page.isScheduled(), false);
    assert.equal(window.document.documentElement.hasAttribute('data-page-hidden'), true);
    page.advance('2026-11-24T22:00:01Z');
    page.visibility(false);
    assert.equal(window.document.documentElement.hasAttribute('data-page-hidden'), false);
    assert.equal($('#launch-ready').hidden, false);
    assert.equal($('#launch-clock').hidden, true);
    assert.equal($('#rehearse-launch').disabled, true);
    for (const node of window.document.querySelectorAll('[data-unit]')) assert.equal(node.textContent, '00');
  } finally { page.close(); }
});

test('reload after mock launch starts in the ready state without redirecting', () => {
  const page = preview({ now: '2026-12-01T12:00:00Z', reducedMotion: true });
  const { $, window } = page;
  try {
    assert.equal($('#launch-ready').hidden, false);
    assert.equal($('#launch-clock').hidden, true);
    assert.equal($('#launch-motion').hidden, true);
    assert.equal($('#rehearse-launch').disabled, true);
    assert.equal(window.location.pathname, '/countdown.html');
    assert.match($('.countdown-digits').getAttribute('aria-label'), /0 zile, 0 ore, 0 minute, 0 secunde/);
  } finally { page.close(); }
});

test('daily question stays paired with an in-progress response across Romanian midnight', () => {
  const page = preview({ now: '2026-11-14T21:59:59Z' });
  const { $ } = page;
  try {
    const originalQuestion = $('#daily-question').textContent;
    const originalDay = $('#question-date').dateTime;
    $('#thought').value = 'Încă mă gândesc.';
    page.advance('2026-11-14T22:00:01Z');
    assert.equal($('#daily-question').textContent, originalQuestion);
    assert.equal($('#question-date').dateTime, originalDay);
    page.submit();
    assert.equal($('#print-question').textContent, originalQuestion);
  } finally { page.close(); }
});
