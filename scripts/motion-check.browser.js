// Browser-only QA fixture. Copied into ignored dist/ by prepare-motion-check.mjs.
// Tests the actual production page in a same-origin iframe without changing product code.
const frame = document.querySelector('iframe');
const output = document.querySelector('pre');
const evidence = {};
const checks = [];
function check(ok, message) { if (!ok) throw new Error(message); checks.push(message); }
function nextFrame(win) { return new Promise((r) => win.requestAnimationFrame(() => win.requestAnimationFrame(r))); }
function state(win) {
  const selectors = ['.scene-sheet', '.scene-plane', '.scene-orbit', '.question-comic', '.hero-title', '.hero-actions', '.hero-scene picture'];
  return Object.fromEntries(selectors.map((s) => {
    const el = win.document.querySelector(s), cs = win.getComputedStyle(el), rect = el.getBoundingClientRect();
    return [s, { transform: cs.transform, animation: cs.animationName, timeline: cs.animationTimeline, top: rect.top + win.scrollY, opacity: cs.opacity }];
  }));
}
async function scroll(win, y) { win.scrollTo({ top: y, behavior: 'instant' }); await nextFrame(win); }
try {
  await new Promise((r) => frame.addEventListener('load', r, { once: true }));
  const win = frame.contentWindow;
  await win.document.fonts.ready;
  await Promise.all([...win.document.querySelectorAll('.hero img')].map((im) => im.decode().catch(() => {})));
  const reduced = win.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supported = win.CSS.supports('animation-timeline: view()') && win.CSS.supports('animation-range: exit 0% exit 100%');
  check(supported, 'Chrome supports the native timeline used by this build');
  await nextFrame(win);
  const first = state(win);
  await scroll(win, 350);
  const middle = state(win);
  const layers = ['.scene-sheet', '.scene-plane', '.scene-orbit', '.question-comic'];
  for (const s of layers) {
    check(reduced ? first[s].transform === middle[s].transform : first[s].transform !== middle[s].transform, `${s}: ${reduced ? 'reduced-motion stays still' : 'responds to scroll'}`);
  }
  for (const s of ['.hero-title', '.hero-actions', '.hero-scene picture']) {
    check(Math.abs(first[s].top - middle[s].top) < 1 && middle[s].opacity === '1', `${s}: readable content stays in document geometry`);
  }
  await scroll(win, 0);
  const reversed = state(win);
  for (const s of layers) check(reversed[s].transform === first[s].transform, `${s}: reverse scroll restores position`);
  evidence.desktop = { first, middle, reversed };
  for (const width of [320, 390, 820, 1920]) {
    frame.style.width = `${width}px`;
    await nextFrame(win);
    await scroll(win, 0);
    check(win.document.documentElement.scrollWidth <= win.innerWidth, `${width}px: no horizontal document overflow`);
    if (width < 768) {
      const before = state(win);
      await scroll(win, 350);
      const after = state(win);
      for (const s of layers) check(before[s].transform === after[s].transform && after[s].animation === 'none', `${width}px ${s}: phone stays still`);
    }
  }
  frame.style.width = '1440px';
  await nextFrame(win);
  await scroll(win, Number(new URLSearchParams(location.search).get('scroll')) || 0);
  document.title = 'PASS: EDU MindSet hero motion';
  document.documentElement.dataset.result = 'pass';
  output.textContent = JSON.stringify({ result: 'PASS', reduced, supported, checks, evidence }, null, 2);
} catch (error) {
  document.title = 'FAIL: EDU MindSet hero motion';
  document.documentElement.dataset.result = 'fail';
  output.textContent = `FAIL: ${error.stack}`;
  console.error('EDUMINDSET_MOTION_REGRESSION', error.stack);
}
