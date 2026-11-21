import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { buildDraft, RECIPIENT } from '../src/mail.js';
import { contentSecurityPolicy } from './csp.mjs';
import { normalizeSiteUrl, publicMetadata, hostHeaders } from './release.mjs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const mailSource = readFileSync(new URL('../src/mail.js', import.meta.url), 'utf8').replaceAll('export ', '');
const motionSource = readFileSync(new URL('../src/motion.js', import.meta.url), 'utf8').replaceAll('export ', '');
const labSource = readFileSync(new URL('../src/lab.js', import.meta.url), 'utf8').replaceAll('export ', '');
const script = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8')
  .replace("import './icons.css';\n", '')
  .replace("import { buildDraft, RECIPIENT } from './mail.js';\n", '')
  .replace("import { setupHeroMotion } from './motion.js';\n", '')
  .replace("import { setupMethodLab } from './lab.js';\n", '');
function page() {
  const dom = new JSDOM(html, { url: 'https://edumindset.test/', runScripts: 'outside-only', pretendToBeVisual: true });
  dom.window.matchMedia = () => ({ matches: false, addEventListener() {} });
  dom.window.eval(`${mailSource}\n${motionSource}\n${labSource}\n${script}`);
  return { window: dom.window, $: (selector) => dom.window.document.querySelector(selector), close: () => dom.window.close() };
}

test('learning exercise completes read, recall, reveal and reset without losing focus', () => {
  const { $, window, close } = page();
  assert.equal($('[data-recall-controls]').hidden, false);
  assert.equal($('[aria-current="step"]').dataset.recallStep, 'read');
  $('#recall-action').click();
  assert.equal($('#recall-words').hidden, true);
  assert.equal($('#recall-question').hidden, false);
  assert.equal($('[aria-current="step"]').dataset.recallStep, 'recall');
  $('#recall-action').click();
  assert.equal($('#recall-words').hidden, false);
  assert.equal($('#recall-explanation').hidden, false);
  assert.equal($('[aria-current="step"]').dataset.recallStep, 'reveal');
  $('#recall-reset').click();
  assert.equal($('#recall-explanation').hidden, true);
  assert.equal(window.document.activeElement.id, 'recall-action');
  assert.equal(window.document.querySelectorAll('[aria-current="step"]').length, 1);
  assert.equal($('[aria-current="step"]').dataset.recallStep, 'read');
  close();
});

test('menu Escape restores focus and workshop deep links disclose their content', () => {
  const { $, window, close } = page();
  const menu = $('.mobile-nav');
  menu.open = true;
  window.document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  assert.equal(menu.open, false);
  assert.equal(window.document.activeElement, menu.querySelector('summary'));
  window.location.hash = 'learning';
  window.dispatchEvent(new window.HashChangeEvent('hashchange'));
  assert.equal($('#learning').open, true);
  $('#learning').open = false;
  window.location.hash = 'incearca';
  window.dispatchEvent(new window.HashChangeEvent('hashchange'));
  assert.equal($('#learning').open, true, 'the exercise link opens its containing programme');
  $('#theme-toggle').click();
  assert.equal(window.document.documentElement.dataset.theme, 'dark');
  close();
});

test('contact validation and long-message fallback never claim delivery', () => {
  const { $, window, close } = page();
  const submit = () => $('#contact-form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
  submit();
  assert.match($('#name').validationMessage, /Completează/);
  for (const [id, value] of [['name', 'Verificare'], ['email', 'test@example.com'], ['subject', 'Test'], ['message', 'a'.repeat(1900)]]) {
    $(`#${id}`).value = value;
    $(`#${id}`).dispatchEvent(new window.Event('input', { bubbles: true }));
  }
  submit();
  assert.match($('#form-status').textContent, /prea lung/);
  assert.equal($('#copy-message').hidden, false);
  assert.doesNotMatch($('#form-status').textContent, /trimis cu succes/i);
  close();
});

test('all section links and supplied images resolve, with no duplicate IDs or em dashes', () => {
  const { window, close } = page();
  const ids = [...window.document.querySelectorAll('[id]')].map((node) => node.id);
  assert.equal(ids.length, new Set(ids).size);
  for (const node of window.document.querySelectorAll('[aria-labelledby]')) {
    for (const id of node.getAttribute('aria-labelledby').split(/\s+/)) assert.ok(window.document.getElementById(id), `Missing label: ${id}`);
  }
  for (const link of window.document.querySelectorAll('a[href^="#"]')) assert.ok(window.document.getElementById(link.hash.slice(1)), link.hash);
  for (const image of window.document.querySelectorAll('img[src]')) assert.ok(existsSync(new URL(`../public/${image.getAttribute('src')}`, import.meta.url)), image.getAttribute('src'));
  for (const source of window.document.querySelectorAll('source[srcset]')) {
    for (const candidate of source.getAttribute('srcset').split(',')) {
      const path = candidate.trim().split(/\s+/)[0];
      assert.ok(existsSync(new URL(`../public/${path}`, import.meta.url)), path);
    }
  }
  assert.equal(html.includes('\u2014'), false);
  assert.equal(script.includes('\u2014'), false);
  close();
});

test('learning lab keeps one method open and builds the study tools', () => {
  const { $, window, close } = page();
  assert.equal($('#method-placeholder').hidden, false);
  assert.equal($('#pomodoro-tool').hidden, true);
  $('#method-pomodoro').click();
  assert.equal($('#pomodoro-tool').hidden, false);
  assert.equal($('#cornell-tool').hidden, true);
  assert.equal($('#method-pomodoro').getAttribute('aria-pressed'), 'true');
  $('#lab-minutes').value = '25';
  $('#lab-minutes').dispatchEvent(new window.Event('change'));
  assert.equal($('#lab-clock').textContent, '25:00');
  $('#lab-start').click();
  assert.match($('#lab-timer-message').textContent, /desfășurare/);
  $('#lab-pause').click();
  assert.match($('#lab-timer-message').textContent, /pauză/);
  $('#method-review').click();
  $('#lab-review-make').click();
  assert.match($('#lab-review-result').textContent, /Alege data/);
  $('#lab-study-date').value = '2026-11-17';
  $('#lab-review-topic').value = 'Celula eucariotă';
  $('#lab-review-make').click();
  assert.match($('#lab-review-result').textContent, /18\.11\.2026/);
  assert.match($('#lab-review-result').textContent, /24\.11\.2026/);
  $('#method-cornell').click();
  $('#lab-topic').value = '<img src=x onerror=alert(1)>';
  $('#lab-cornell-make').click();
  assert.equal($('#lab-cornell-result').querySelector('img'), null);
  assert.match($('#lab-cornell-result').textContent, /<img/);
  $('#method-feynman').click();
  $('#lab-explanation').value = 'scurt';
  $('#lab-feynman-check').click();
  assert.match($('#lab-feynman-result').textContent, /Dezvoltă explicația/);
  $('#method-split').click();
  $('#lab-study-time').value = '60';
  $('#lab-split-topic').value = 'Fotosinteza';
  $('#lab-split-make').click();
  assert.match($('#lab-split-result').textContent, /Bloc 1: 27 minute\. Fotosinteza/);
  assert.match($('#lab-split-result').textContent, /Pauză: 5 minute/);
  $('#method-pdca').click();
  for (const answer of ['un obicei', 'o încercare', 'o verificare', 'păstrez pasul']) {
    $('#lab-pdca-answer').value = answer;
    $('#lab-pdca-next').click();
  }
  assert.match($('#lab-pdca-result').textContent, /PLAN\. Ce vrei/);
  assert.match($('#lab-pdca-result').textContent, /păstrez pasul/);
  assert.equal($('#lab-pdca-title').textContent.startsWith('PLAN'), true);
  $('#method-teacher').click();
  $('#lab-lesson-topic').value = '<b>Fizica</b>';
  $('#lab-lesson-goal').value = 'Despre fizica cuantică';
  $('#lab-lesson-example').value = 'Ipoteza lui de Broglie';
  $('#lab-lesson-question').value = 'Care este ipoteza?';
  $('#lab-lesson-make').click();
  assert.equal($('#lab-lesson-result').querySelectorAll('.lesson-sheet div').length, 4);
  assert.equal($('#lab-lesson-result').querySelector('b'), null);
  assert.match($('#lab-lesson-result').textContent, /<b>Fizica<\/b>/);
  assert.match($('#lab-lesson-result dd').textContent, /Fizica/);
  close();
});

test('mail handoff stays on the real address and drops header breaks', () => {
  const draft = buildDraft({
    name: 'Ana\r\nBcc: evil@example.com',
    email: 'ana@exemplu.ro',
    subject: 'Salut\nBcc: evil@example.com',
    message: 'Linie unu\r\nLinie doi',
  });
  assert.equal(draft.href.startsWith(`mailto:${RECIPIENT}?`), true);
  assert.equal(draft.href.includes('\n'), false);
  assert.equal(draft.href.includes('\r'), false);
  assert.equal(draft.subject.includes('Bcc:'), true);
  assert.match(draft.body, /Linie unu\nLinie doi/);
  assert.equal(draft.tooLong, false);
});

test('published files do not expose prompts, source masters, or loose links', () => {
  const published = readdirSync(new URL('../public/images', import.meta.url));
  assert.equal(published.some((name) => name.endsWith('.json')), false);
  assert.equal(published.includes('instagram-qr.jpeg'), false);
  assert.equal(published.includes('logo-source.jpeg'), false);
  assert.equal(existsSync(new URL('../assets/source/instagram-qr.jpeg', import.meta.url)), true);
  assert.equal(existsSync(new URL('../assets/source/logo-source.jpeg', import.meta.url)), true);
  for (const link of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    assert.match(link[0], /rel="noopener noreferrer"/);
  }
  const policy = contentSecurityPolicy(html);
  assert.match(policy, /script-src 'self' 'sha256-/);
  assert.doesNotMatch(policy, /unsafe-inline|unsafe-eval|frame-ancestors/);
  assert.match(policy, /form-action mailto:/);
  assert.match(html, /name="referrer" content="strict-origin-when-cross-origin"/);
  assert.equal(html.includes('/src/fonts/'), false);
  assert.equal(html.includes('hero-book'), false);
});


test('motion control stops decoration and responds to offscreen, hidden and preference changes', () => {
  const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true });
  const queries = new Map();
  dom.window.matchMedia = (query) => {
    const media = { matches: query.includes('min-width'), handlers: [], addEventListener(_event, fn) { this.handlers.push(fn); } };
    queries.set(query, media);
    return media;
  };
  let notify;
  dom.window.IntersectionObserver = class { constructor(fn) { notify = fn; } observe() {} };
  dom.window.eval(motionSource + '\nsetupHeroMotion();');
  const hero = dom.window.document.querySelector('.hero');
  const button = dom.window.document.querySelector('#motion-toggle');
  assert.equal(button.hidden, false);
  button.click();
  assert.equal(hero.hasAttribute('data-motion-disabled'), true);
  assert.match(button.textContent, /Pornește/);
  button.click();
  assert.equal(hero.hasAttribute('data-motion-disabled'), false);
  notify([{ isIntersecting: false }]);
  assert.equal(hero.hasAttribute('data-motion-suspended'), true);
  notify([{ isIntersecting: true }]);
  assert.equal(hero.hasAttribute('data-motion-suspended'), false);
  Object.defineProperty(dom.window.document, 'hidden', { value: true, configurable: true });
  dom.window.document.dispatchEvent(new dom.window.Event('visibilitychange'));
  assert.equal(hero.hasAttribute('data-motion-suspended'), true);
  const reduced = queries.get('(prefers-reduced-motion: reduce)');
  reduced.matches = true; reduced.handlers.forEach(fn => fn());
  assert.equal(button.hidden, true);
  dom.window.close();
});

test('release metadata uses a confirmed HTTPS address and headers match the hashed page policy', () => {
  assert.equal(normalizeSiteUrl(''), null);
  assert.equal(publicMetadata(html, null), html);
  const address = normalizeSiteUrl('https://example.test/EduMindset');
  assert.equal(address, 'https://example.test/EduMindset/');
  for (const bad of ['http://example.test', 'javascript:alert(1)', 'https://me:secret@example.test', 'https://example.test/?query=1', 'https://example.test/#section']) assert.throws(() => normalizeSiteUrl(bad));
  const published = publicMetadata(html, address);
  assert.match(published, /property="og:image" content="https:\/\/example.test\/EduMindset\/images\/alexandru-laborator-1200.webp"/);
  assert.match(published, /rel="canonical" href="https:\/\/example.test\/EduMindset\/"/);
  assert.equal(contentSecurityPolicy(published), contentSecurityPolicy(html));
  const headers = hostHeaders(contentSecurityPolicy(published));
  assert.match(headers, /X-Frame-Options: DENY/);
  assert.match(headers, /frame-ancestors 'none'/);
  assert.doesNotMatch(headers, /unsafe-inline|unsafe-eval/);
});
