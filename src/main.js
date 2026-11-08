import './icons.css';

const themeButton = document.querySelector('#theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
function currentTheme() { return document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light'); }
function syncThemeButton() {
  const dark = currentTheme() === 'dark';
  themeButton.setAttribute('aria-label', dark ? 'Activează aspectul luminos' : 'Activează aspectul întunecat');
  themeButton.querySelector('i').className = `ph ph-${dark ? 'sun' : 'moon'}`;
}
themeButton.hidden = false;
syncThemeButton();
systemTheme.addEventListener('change', syncThemeButton);
themeButton.addEventListener('click', () => {
  const theme = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('edumindset-theme', theme); } catch {}
  syncThemeButton();
});

const topics = {
  learning: { title: 'Explică ideea. Cu vorbele tale.', body: 'Închide caietul și explică unui prieten ce ai înțeles. Unde te oprești, acolo ai o întrebare bună.', link: 'Explorează Learning Skills' },
  time: { title: 'Alege un lucru care contează azi.', body: 'Scrie trei lucruri pe care vrei să le faci. Alege-l pe cel mai important și rezervă-i un interval în care să te ocupi doar de el.', link: 'Explorează Time & Productivity' },
  growth: { title: 'Privește și ce ai reușit deja.', body: 'Gândește-te la o provocare pe care ai depășit-o. Ce te-a ajutat atunci? Notează un lucru pe care îl poți folosi și de data aceasta.', link: 'Explorează Mindset & Personal Growth' },
  future: { title: 'Începe cu o întrebare, nu cu un verdict.', body: 'Ce activitate îți stârnește curiozitatea? Găsește pe cineva care o practică și întreabă cum arată o zi obișnuită în acel domeniu.', link: 'Explorează Future & Career' },
};

const explorer = document.querySelector('[data-explorer]');
const preview = document.querySelector('#topic-preview');
explorer.querySelectorAll('[data-topic]').forEach((button) => {
  button.addEventListener('click', (event) => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    const topic = topics[button.dataset.topic];
    explorer.querySelectorAll('[data-topic]').forEach((choice) => choice.setAttribute('aria-pressed', String(choice === button)));
    preview.querySelector('[data-preview-title]').textContent = topic.title;
    preview.querySelector('[data-preview-body]').textContent = topic.body;
    const link = preview.querySelector('[data-preview-link]');
    link.firstChild.textContent = `${topic.link} `;
    link.setAttribute('href', `#${button.dataset.topic}`);
    if (event.detail > 0 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      preview.animate([{ opacity: 0.5, transform: 'translateY(4px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 180, easing: 'cubic-bezier(.23,1,.32,1)' });
    }
  });
});

// Native details remain usable without JavaScript. Deep links open the relevant topic.
function openLinkedWorkshop(hash = location.hash.slice(1)) {
  if (typeof hash !== 'string') hash = location.hash.slice(1);
  const target = document.getElementById(hash);
  if (target?.classList.contains('workshop')) target.open = true;
}
addEventListener('hashchange', openLinkedWorkshop);
openLinkedWorkshop();
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => openLinkedWorkshop(link.getAttribute('href').slice(1)));
});

const mobileMenu = document.querySelector('.mobile-nav');
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { mobileMenu.open = false; }));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.open) {
    mobileMenu.open = false;
    mobileMenu.querySelector('summary').focus();
  }
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const copyButton = document.querySelector('#copy-message');
const fields = [...form.querySelectorAll('input, textarea')];
// Native required validation blocks submit, so the honest mailto path never ran.
// noValidate applies only with JavaScript; without it the mailto action remains.
form.noValidate = true;
fields.forEach((field) => field.addEventListener('input', () => field.setCustomValidity('')));
function emailDraft() {
  const name = form.elements.namedItem('Nume').value.trim();
  const email = form.elements.namedItem('Email').value.trim();
  const subject = form.elements.namedItem('Subiect').value.trim().replace(/[\r\n]+/g, ' ');
  const message = form.elements.namedItem('Mesaj').value.trim();
  return { subject, body: `Nume: ${name}\nEmail: ${email}\n\n${message}` };
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fields.forEach((field) => {
    if (!field.value.trim()) field.setCustomValidity('Completează acest câmp pentru a pregăti mesajul.');
    else if (field.type === 'email' && field.validity.typeMismatch) field.setCustomValidity('Introdu o adresă de email validă.');
    else field.setCustomValidity('');
  });
  if (!form.reportValidity()) return;
  const draft = emailDraft();
  const mailto = `mailto:edumindset8@gmail.com?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
  copyButton.hidden = false;
  // Some mail apps drop very long mailto URLs. Keep the message on the page instead.
  if (mailto.length > 1800) {
    status.textContent = 'Mesajul este prea lung pentru a fi deschis direct. Copiază-l și trimite-l din aplicația ta de email către edumindset8@gmail.com.';
    return;
  }
  status.textContent = 'Mesajul este pregătit. Trimite-l din aplicația de email. Dacă aplicația nu se deschide, copiază mesajul și trimite-l la edumindset8@gmail.com.';
  // A mailto handoff cannot confirm delivery; never display a sent state.
  location.href = mailto;
});
copyButton.addEventListener('click', async () => {
  const draft = emailDraft();
  try {
    await navigator.clipboard.writeText(`Către: edumindset8@gmail.com\nSubiect: ${draft.subject}\n\n${draft.body}`);
    status.textContent = 'Mesaj copiat. Îl poți lipi în emailul tău către edumindset8@gmail.com.';
  } catch {
    status.textContent = 'Copierea automată nu este disponibilă. Selectează textul din formular și copiază-l în emailul tău către edumindset8@gmail.com.';
  }
});
