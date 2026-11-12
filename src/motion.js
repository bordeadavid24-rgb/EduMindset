export function setupHeroMotion() {
  const hero = document.querySelector('.hero');
  const button = document.querySelector('#motion-toggle');
  if (!hero || !button) return;
  const desktop = matchMedia('(min-width: 768px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = false;
  let inView = true;
  function sync() {
    const eligible = desktop.matches && !reduced.matches;
    button.hidden = !eligible;
    hero.toggleAttribute('data-motion-disabled', userPaused);
    hero.toggleAttribute('data-motion-suspended', !inView || document.hidden);
    button.textContent = userPaused ? 'Pornește animația' : 'Oprește animația';
  }
  button.addEventListener('click', () => { userPaused = !userPaused; sync(); });
  desktop.addEventListener('change', sync);
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); });
    observer.observe(hero);
  }
  sync();
}
