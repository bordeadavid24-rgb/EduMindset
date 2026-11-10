import './icons.css';

const themeButton = document.querySelector('#theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
function currentTheme() { return document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light'); }
function syncThemeButton() {
  const dark = currentTheme() === 'dark';
  themeButton.setAttribute('aria-label', dark ? 'Activează aspectul luminos' : 'Activează aspectul întunecat');
  themeButton.querySelector('i').className = `ph ph-${dark ? 'sun' : 'moon'}`;
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute('content', dark ? '#141d36' : '#fbf9ef'));
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

const recall = document.querySelector('[data-recall]');
const recallAction = document.querySelector('#recall-action');
const recallWords = document.querySelector('#recall-words');
const recallQuestion = document.querySelector('#recall-question');
const recallInstruction = document.querySelector('#recall-instruction');
const recallExplanation = document.querySelector('#recall-explanation');
const recallReset = document.querySelector('#recall-reset');
let recallState = 'read';
recall.querySelector('[data-recall-controls]').hidden = false;
function resetRecall() {
  recallState = 'read';
  recall.dataset.state = 'read';
  recallWords.hidden = false;
  recallQuestion.hidden = true;
  recallExplanation.hidden = true;
  recallReset.hidden = true;
  recallInstruction.textContent = 'Citește cuvintele. Apoi ascunde-le.';
  recallAction.firstChild.textContent = 'Le-am citit. Le ascund. ';
}
recallAction.addEventListener('click', () => {
  if (recallState === 'read') {
    recallState = 'recall';
    recall.dataset.state = 'recall';
    recallWords.hidden = true;
    recallQuestion.hidden = false;
    recallInstruction.textContent = 'Încearcă să le spui fără să te uiți. Ia-ți timpul tău.';
    recallAction.firstChild.textContent = 'Verifică cele trei cuvinte ';
  } else if (recallState === 'recall') {
    recallState = 'reveal';
    recall.dataset.state = 'reveal';
    recallWords.hidden = false;
    recallQuestion.hidden = true;
    recallExplanation.hidden = false;
    recallReset.hidden = false;
    recallInstruction.textContent = 'Compară cu ce ți-ai amintit. Fără note, fără clasament.';
    recallAction.firstChild.textContent = 'Mai încearcă o dată ';
  } else resetRecall();
});
recallReset.addEventListener('click', () => { resetRecall(); recallAction.focus(); });

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
