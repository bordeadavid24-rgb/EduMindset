export const RECIPIENT = 'edumindset8@gmail.com';
const MAILTO_LIMIT = 1800;

export function singleLine(value, max) {
  return String(value ?? '').replace(/[\u0000-\u001F\u007F\u2028\u2029]+/g, ' ').replace(/[ \t]{2,}/g, ' ').trim().slice(0, max);
}

export function messageBody(value, max) {
  return String(value ?? '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u2028\u2029]/g, '').trim().slice(0, max);
}

export function buildDraft({ name, email, subject, message }) {
  const safeName = singleLine(name, 120);
  const safeEmail = singleLine(email, 254);
  const safeSubject = singleLine(subject, 180);
  const safeMessage = messageBody(message, 4000);
  const body = `Nume: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`;
  const href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(safeSubject)}&body=${encodeURIComponent(body)}`;
  return { name: safeName, email: safeEmail, subject: safeSubject, message: safeMessage, body, href, tooLong: href.length > MAILTO_LIMIT };
}
