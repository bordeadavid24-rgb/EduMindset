import { MOCK_LAUNCH_AT, remainingTime, dailyChallenge, cleanAnswer } from './countdown-model.js';

const $ = selector => document.querySelector(selector);
const root = document.documentElement;
const clock = $('#launch-clock');
const ready = $('#launch-ready');
const rehearsal = $('#rehearse-launch');
const motion = $('#launch-motion');
const status = $('#action-status');
const answer = $('#thought');
const form = $('#thought-form');
const result = $('#thought-result');
const target = Date.parse(MOCK_LAUNCH_AT);
let timer;
let rehearsing = false;
let lastExpired = null;
let question = dailyChallenge();
let card = null;
let cardBlobPromise = null;

function updateQuestion() {
  const next = dailyChallenge();
  // Keep an in-progress answer paired with its question across local midnight.
  if (next.id !== question.id && !answer.value.trim() && result.hidden) question = next;
  $('#daily-question').textContent = question.question;
  $('#question-hint').textContent = question.hint;
  $('#question-date').dateTime = question.id;
  $('#question-date').textContent = new Intl.DateTimeFormat('ro-RO', {
    day: 'numeric', month: 'long', timeZone: 'Europe/Bucharest',
  }).format(new Date(`${question.id}T12:00:00+02:00`));
}

function tick() {
  clearTimeout(timer);
  const time = remainingTime(target, Date.now());
  const expired = time.expired || rehearsing;
  for (const unit of ['days', 'hours', 'minutes', 'seconds']) {
    const text = String(time[unit]).padStart(2, '0');
    const node = $(`[data-unit="${unit}"]`);
    if (node.textContent !== text) node.textContent = text;
  }
  $('.countdown-digits').setAttribute('aria-label', `Până la data demonstrativă: ${time.days} zile, ${time.hours} ore, ${time.minutes} minute, ${time.seconds} secunde.`);
  if (lastExpired !== expired) {
    clock.hidden = expired;
    ready.hidden = !expired;
    rehearsal.textContent = rehearsing ? 'Înapoi la numărătoare' : time.expired ? 'Momentul de probă a trecut' : 'Vezi momentul lansării';
    rehearsal.disabled = time.expired;
    lastExpired = expired;
  }
  updateQuestion();
  if (!document.hidden) timer = setTimeout(tick, 1000 - Date.now() % 1000 + 20);
}

rehearsal.hidden = false;
rehearsal.addEventListener('click', () => {
  rehearsing = !rehearsing;
  tick();
  if (rehearsing) ready.focus({ preventScroll: true });
});
document.addEventListener('visibilitychange', () => {
  root.toggleAttribute('data-page-hidden', document.hidden);
  if (document.hidden) clearTimeout(timer);
  else tick();
});
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
function syncMotion() { motion.hidden = reduced.matches; }
syncMotion();
reduced.addEventListener('change', syncMotion);
motion.addEventListener('click', () => {
  const paused = root.toggleAttribute('data-motion-paused');
  motion.textContent = paused ? 'Pornește animația' : 'Oprește animația';
});
tick();

form.hidden = false;
function updateAnswerCount() {
  // Native maxlength counts UTF-16 units; use codepoints consistently for
  // pasted emoji and the visible character allowance instead.
  const limited = Array.from(answer.value).slice(0, 160).join('');
  if (limited !== answer.value) answer.value = limited;
  const count = Array.from(answer.value).length;
  $('#thought-count').textContent = `${count} / 160`;
  answer.setCustomValidity('');
}
answer.addEventListener('input', updateAnswerCount);
form.addEventListener('submit', event => {
  event.preventDefault();
  const text = cleanAnswer(answer.value);
  if (!text) {
    answer.setCustomValidity('Scrie un gând, chiar și unul scurt.');
    answer.reportValidity();
    return;
  }
  answer.value = text;
  updateAnswerCount();
  card = { question: question.question, answer: text, day: question.id };
  $('#print-question').textContent = card.question;
  $('#print-answer').textContent = card.answer;
  result.hidden = false;
  form.hidden = true;
  $('#story-image').hidden = true;
  $('#share-print').hidden = false;
  status.textContent = 'Pregătim imaginea paginii…';
  const snapshot = card;
  cardBlobPromise = makeStoryCard(snapshot);
  cardBlobPromise.then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  })).then(src => {
    if (card !== snapshot || result.hidden) return;
    const image = $('#story-image');
    image.src = src;
    image.alt = `${snapshot.question} Gândul meu: ${snapshot.answer}`;
    image.hidden = false;
    $('#share-print').hidden = true;
    status.textContent = '';
  }).catch(() => {
    if (card !== snapshot) return;
    cardBlobPromise = null;
    status.textContent = 'Previzualizarea text este disponibilă. Încearcă descărcarea pentru a crea imaginea.';
  });
  $('#download-thought').focus({ preventScroll: true });
});
$('#edit-thought').addEventListener('click', () => {
  result.hidden = true;
  form.hidden = false;
  status.textContent = '';
  answer.focus({ preventScroll: true });
});

// Render a real 1080 × 1920 PNG locally, without screenshots, remote assets,
// uploads or a third-party service. User text is drawn as text, never HTML.
export async function makeStoryCard(data) {
  await document.fonts.load('650 56px "Bricolage Grotesque Variable"');
  await document.fonts.ready;
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas unavailable');
  ctx.fillStyle = '#fffdf7';
  ctx.fillRect(0, 0, 1080, 1920);
  ctx.strokeStyle = '#e4dfd6'; ctx.lineWidth = 2;
  for (let y = 60; y < 1920; y += 68) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1080, y); ctx.stroke(); }
  ctx.strokeStyle = '#e85448'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(65, 0); ctx.lineTo(65, 1920); ctx.stroke();
  ctx.save(); ctx.translate(650, 1650); ctx.rotate(.18); ctx.fillStyle = '#f7d9d2';
  ctx.font = '800 700px "Bricolage Grotesque Variable", sans-serif'; ctx.fillText('?', 0, 0); ctx.restore();
  ctx.fillStyle = '#242323';
  ctx.font = '800 64px "Bricolage Grotesque Variable", sans-serif';
  ctx.fillText('EDU MindSet', 116, 164);
  ctx.fillStyle = '#b3342a';
  ctx.font = '650 30px "Bricolage Grotesque Variable", sans-serif';
  ctx.fillText('O întrebare. O direcție.', 116, 310);

  function lines(text, maxWidth) {
    const output = []; let line = '';
    // Break on spaces where possible and on Unicode codepoints for long words.
    for (const word of text.split(/\s+/)) {
      if (ctx.measureText(`${line}${line ? ' ' : ''}${word}`).width <= maxWidth) {
        line += `${line ? ' ' : ''}${word}`;
        continue;
      }
      if (line) { output.push(line); line = ''; }
      for (const char of Array.from(word)) {
        if (line && ctx.measureText(line + char).width > maxWidth) { output.push(line); line = ''; }
        line += char;
      }
    }
    if (line) output.push(line);
    return output;
  }

  ctx.fillStyle = '#242323';
  ctx.font = '650 52px "Bricolage Grotesque Variable", sans-serif';
  let y = 405;
  for (const line of lines(data.question, 825)) { ctx.fillText(line, 116, y); y += 65; }
  y += 100;
  let answerSize = 64;
  let answerLines;
  do {
    ctx.font = `500 ${answerSize}px "Bricolage Grotesque Variable", sans-serif`;
    answerLines = lines(data.answer, 825);
    if (y + answerLines.length * answerSize * 1.3 < 1510 || answerSize <= 32) break;
    answerSize -= 2;
  } while (true);
  for (const line of answerLines) { ctx.fillText(line, 116, y); y += answerSize * 1.3; }
  ctx.strokeStyle = '#e85448'; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(116, 1610); ctx.quadraticCurveTo(470, 1588, 740, 1608); ctx.stroke();
  ctx.font = '650 36px "Bricolage Grotesque Variable", sans-serif';
  ctx.fillText('Învățarea începe cu mine.', 116, 1700);
  ctx.fillStyle = '#b3342a';
  ctx.font = '500 32px "Bricolage Grotesque Variable", sans-serif';
  ctx.fillText('@edu.mind.set', 116, 1775);
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('PNG unavailable')), 'image/png'));
}

let exporting = false;
async function exportCard(share) {
  if (!card || exporting) return;
  exporting = true;
  const download = $('#download-thought');
  const shareButton = $('#share-thought');
  const oldLabel = download.textContent;
  const snapshot = { ...card };
  download.disabled = true;
  shareButton.disabled = true;
  download.textContent = 'Pregătim pagina…';
  status.textContent = '';
  try {
    const blob = await (cardBlobPromise || makeStoryCard(snapshot));
    const filename = `gandul-meu-edumindset-${snapshot.day}.png`;
    const file = new File([blob], filename, { type: 'image/png' });
    if (share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'Gândul meu · EDU MindSet' });
        status.textContent = 'Pagina a fost predată opțiunilor de distribuire ale dispozitivului.';
        return;
      } catch (error) {
        if (error.name === 'AbortError') { status.textContent = 'Distribuirea a fost închisă. Poți descărca pagina oricând.'; return; }
        // Delayed activation or an unsupported target: keep the PNG available.
      }
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = filename;
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    status.textContent = 'Imaginea PNG este pregătită pentru descărcare. O poți adăuga într-un Story și eticheta @edu.mind.set.';
  } catch {
    status.textContent = 'Nu am putut crea imaginea în acest browser. Poți păstra o captură a paginii sau încerca din nou.';
  } finally {
    exporting = false;
    download.disabled = false;
    shareButton.disabled = false;
    download.textContent = oldLabel;
  }
}
$('#download-thought').addEventListener('click', () => exportCard(false));
if (navigator.share && navigator.canShare) $('#share-thought').hidden = false;
$('#share-thought').addEventListener('click', () => exportCard(true));
