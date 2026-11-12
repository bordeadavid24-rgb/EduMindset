// QA-only entry point on a top-level copy of the actual built page.
// It runs under the production CSP. No iframe, inline style, mail sending or real clipboard write.
const output = document.querySelector('#qa-report');
const checks = [];
const evidence = {};
const violations = [];
document.addEventListener('securitypolicyviolation', (event) => violations.push(event.violatedDirective));
function check(ok, message) { if (!ok) throw new Error(message); checks.push(message); }
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function scroll(y) { scrollTo({ top: y, behavior: 'instant' }); await nextFrame(); }
function state() {
  return Object.fromEntries(['.scene-sheet', '.scene-plane', '.scene-orbit', '.question-comic', '.hero-title', '.hero-actions', '.hero-scene picture'].map((s) => {
    const el = document.querySelector(s), cs = getComputedStyle(el), rect = el.getBoundingClientRect();
    return [s, { transform: cs.transform, translate: cs.translate, animation: cs.animationName, playState: cs.animationPlayState, top: rect.top + scrollY, opacity: cs.opacity, ty: cs.transform === 'none' ? 0 : new DOMMatrixReadOnly(cs.transform).m42 }];
  }));
}
try {
  if (document.readyState !== 'complete') await new Promise((r) => addEventListener('load', r, { once: true }));
  await document.fonts.ready;
  await Promise.all([...document.images].map((image) => { image.loading = 'eager'; return image.decode(); }));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = innerWidth >= 768;
  const supported = CSS.supports('animation-timeline: scroll()') && CSS.supports('animation-range: 0vh 160vh');
  const eligible = desktop && !reduced;
  check([...document.images].every(im => im.naturalWidth > 0), 'all supplied images decode under the production policy');
  check(document.fonts.check('16px "Bricolage Grotesque Variable"'), 'self-hosted font loads');
  check(getComputedStyle(document.querySelector('.ph')).maskImage !== 'none', 'icon masks load');
  check(document.documentElement.scrollWidth <= innerWidth, 'no horizontal document overflow');
  const theme = document.querySelector('#theme-toggle');
  const initialTheme = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const nextTheme = initialTheme === 'dark' ? 'light' : 'dark';
  theme.click(); check(document.documentElement.dataset.theme === nextTheme, 'theme button changes the actual page');
  check(localStorage.getItem('edumindset-theme') === nextTheme, 'theme choice persists');
  theme.click();
  if (!desktop) {
    const menu = document.querySelector('.mobile-nav');
    menu.open = true;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    check(!menu.open && document.activeElement === menu.querySelector('summary'), 'menu Escape closes and restores focus');
  }
  document.querySelector('#recall-action').click();
  check(document.querySelector('#recall-words').hidden, 'recall hides the words');
  document.querySelector('#recall-action').click();
  check(!document.querySelector('#recall-explanation').hidden, 'recall reveals the explanation');
  document.querySelector('#recall-reset').click();
  const learning = document.querySelector('#learning'); learning.open = false;
  location.hash = 'incearca'; await nextFrame();
  check(learning.open, 'nested exercise deep link opens its programme');
  history.replaceState(null, '', location.pathname + location.search);
  const form = document.querySelector('#contact-form');
  for (const [id, value] of [['name', 'Browser check'], ['email', 'test@example.test'], ['subject', 'Verification'], ['message', 'a'.repeat(1900)]]) {
    const field = document.getElementById(id); field.value = value; field.dispatchEvent(new Event('input', { bubbles: true }));
  }
  form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  check(document.querySelector('#form-status').textContent.includes('prea lung'), 'long email stays on the page');
  const clipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
  let copied = '';
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { async writeText(text) { copied = text; } } });
  document.querySelector('#copy-message').click(); await nextFrame();
  check(copied.includes('edumindset8@gmail.com'), 'copy fallback prepares the real recipient');
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { async writeText() { throw new Error('QA copy failure'); } } });
  document.querySelector('#copy-message').click(); await nextFrame();
  check(document.querySelector('#form-status').textContent.includes('nu este disponibilă'), 'copy failure explains manual recovery');
  if (clipboard) Object.defineProperty(navigator, 'clipboard', clipboard); else delete navigator.clipboard;
  form.reset();
  await scroll(0);
  const toggle = document.querySelector('#motion-toggle');
  check(toggle.hidden === !eligible, 'motion control is shown only for eligible desktop motion');
  if (eligible) {
    const line = document.querySelector('.scene-orbit path').getAnimations().find(a => a.animationName === 'pen-line');
    if (line) line.currentTime = 0;
    const before = getComputedStyle(document.querySelector('.question-comic')).translate;
    const dashA = parseFloat(getComputedStyle(document.querySelector('.scene-orbit path')).strokeDashoffset);
    await wait(700);
    const after = getComputedStyle(document.querySelector('.question-comic')).translate;
    const dashB = parseFloat(getComputedStyle(document.querySelector('.scene-orbit path')).strokeDashoffset);
    check(before !== after, 'paper decoration moves while the hero is visible');
    check(line && dashB < dashA, 'the route draws as a pen stroke');
  }
  const first = state();
  await scroll(800);
  const middle = state();
  const layers = ['.scene-sheet', '.scene-plane', '.scene-orbit', '.question-comic', '.hero-scene picture'];
  const expected = { '.scene-sheet': 12, '.scene-plane': 10, '.scene-orbit': -60, '.question-comic': -30, '.hero-scene picture': -35 };
  for (const s of layers) {
    const delta = middle[s].ty - first[s].ty;
    check(eligible && supported ? Math.abs(delta) >= Math.abs(expected[s]) && Math.sign(delta) === Math.sign(expected[s]) : first[s].transform === middle[s].transform, `${s}: ${eligible && supported ? `scroll depth ${delta.toFixed(1)}px` : 'static depth'}`);
  }
  for (const s of ['.hero-title', '.hero-actions']) check(Math.abs(first[s].top - middle[s].top) < 1 && middle[s].opacity === '1', `${s}: reading stays in document geometry`);
  await scroll(0);
  const reverse = state();
  for (const s of layers) check(Math.abs(reverse[s].ty - first[s].ty) < 1, `${s}: reverse restores scroll position`);
  if (eligible) {
    toggle.click(); await nextFrame();
    check(layers.every(s => getComputedStyle(document.querySelector(s)).animationName === 'none'), 'the user can stop all hero movement');
    toggle.click(); await nextFrame();
    await scroll(document.querySelector('#workshopuri').offsetTop + 300); await wait(120);
    check(document.querySelector('.hero').hasAttribute('data-motion-suspended'), 'decoration is suspended offscreen');
    check(getComputedStyle(document.querySelector('.scene-sheet')).animationPlayState.startsWith('paused'), 'offscreen time animation is paused');
    await scroll(0); await wait(120);
    check(!document.querySelector('.hero').hasAttribute('data-motion-suspended'), 'decoration resumes when visible');
  } else check(layers.every(s => getComputedStyle(document.querySelector(s)).animationName === 'none'), 'phone or reduced-motion path disables animations');
  check(violations.length === 0, 'no content-security-policy violation during actual interactions');
  evidence.viewport = { width: innerWidth, height: innerHeight, reduced, supported };
  evidence.motion = { first, middle, reverse };
  const result = { result: 'PASS', checks, evidence };
  output.textContent = `PASS: ${checks.length} checks. ${innerWidth}px, reduced motion: ${reduced}.`;
  document.title = 'PASS: EDU MindSet production checks';
  console.warn('EDUMINDSET_QA_RESULT ' + JSON.stringify(result));
} catch (error) {
  output.textContent = `FAIL: ${error.message}`;
  document.title = 'FAIL: EDU MindSet production checks';
  console.error('EDUMINDSET_QA_RESULT ' + JSON.stringify({ result: 'FAIL', checks, error: error.stack }));
}
