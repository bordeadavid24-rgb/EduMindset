import { readFileSync, existsSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8').replace("import './icons.css';", '');
function page() {
  const dom = new JSDOM(html, { url: 'https://edumindset.test/', runScripts: 'outside-only', pretendToBeVisual: true });
  dom.window.matchMedia = () => ({ matches: false, addEventListener() {} });
  dom.window.eval(script);
  return { window: dom.window, $: (selector) => dom.window.document.querySelector(selector), close: () => dom.window.close() };
}

test('learning exercise completes read, recall, reveal and reset without losing focus', () => {
  const { $, window, close } = page();
  assert.equal($('[data-recall-controls]').hidden, false);
  $('#recall-action').click();
  assert.equal($('#recall-words').hidden, true);
  assert.equal($('#recall-question').hidden, false);
  $('#recall-action').click();
  assert.equal($('#recall-words').hidden, false);
  assert.equal($('#recall-explanation').hidden, false);
  $('#recall-reset').click();
  assert.equal($('#recall-explanation').hidden, true);
  assert.equal(window.document.activeElement.id, 'recall-action');
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
