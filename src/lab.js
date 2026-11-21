export function setupMethodLab() {
  const root = document.querySelector('#laborator');
  if (!root) return;
  const cards = [...root.querySelectorAll('.method-card')];
  const placeholder = root.querySelector('#method-placeholder');
  const tools = [...root.querySelectorAll('.method-tool')];
  let openId = '';

  function show(id) {
    openId = id;
    placeholder.hidden = true;
    for (const tool of tools) tool.hidden = tool.id !== id;
    for (const card of cards) card.setAttribute('aria-pressed', String(card.getAttribute('aria-controls') === id));
    const panel = root.querySelector('#method-panel');
    const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    panel.scrollIntoView?.({ behavior, block: 'nearest' });
  }
  for (const card of cards) card.addEventListener('click', () => show(card.getAttribute('aria-controls')));

  const clock = root.querySelector('#lab-clock');
  const minutes = root.querySelector('#lab-minutes');
  const timerMessage = root.querySelector('#lab-timer-message');
  let remaining = 25 * 60;
  let endAt = 0;
  let running = false;
  let timer = null;

  function drawClock(total = remaining) {
    const safe = Math.max(0, total);
    const shown = `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(safe % 60).padStart(2, '0')}`;
    clock.textContent = shown;
    clock.setAttribute('aria-label', `${Math.floor(safe / 60)} minute și ${safe % 60} secunde rămase`);
  }
  function stopTick() {
    clearInterval(timer);
    timer = null;
  }
  function currentRemaining() {
    return running ? Math.max(0, Math.ceil((endAt - Date.now()) / 1000)) : remaining;
  }
  function finish() {
    running = false;
    remaining = 0;
    stopTick();
    drawClock(0);
    timerMessage.textContent = 'Sesiune terminată. Ia o pauză.';
  }
  function tick() {
    const left = currentRemaining();
    drawClock(left);
    if (left <= 0) finish();
  }
  function pauseTimer(message = 'Cronometru în pauză.') {
    if (running) remaining = currentRemaining();
    running = false;
    stopTick();
    drawClock();
    if (remaining <= 0) timerMessage.textContent = 'Sesiune terminată. Ia o pauză.';
    else timerMessage.textContent = message;
  }
  function resetTimer() {
    pauseTimer('Pregătește-ți sarcina de studiu.');
    const chosen = Number(minutes.value);
    remaining = (Number.isFinite(chosen) ? Math.min(90, Math.max(1, chosen)) : 25) * 60;
    drawClock();
  }
  function startTimer() {
    if (running) return;
    if (remaining <= 0) resetTimer();
    endAt = Date.now() + remaining * 1000;
    running = true;
    timerMessage.textContent = 'Sesiune în desfășurare.';
    tick();
    timer = setInterval(tick, 250);
  }
  root.querySelector('#lab-start').addEventListener('click', startTimer);
  root.querySelector('#lab-pause').addEventListener('click', () => pauseTimer());
  root.querySelector('#lab-reset').addEventListener('click', resetTimer);
  minutes.addEventListener('change', resetTimer);
  document.addEventListener('visibilitychange', () => {
    if (!running) return;
    if (document.hidden) pauseTimer('Cronometrul s-a oprit cât pagina a fost ascunsă.');
  });

  function write(id, text) {
    const node = root.querySelector(id);
    node.textContent = text;
  }
  root.querySelector('#lab-cornell-make').addEventListener('click', () => {
    write('#lab-cornell-result', `TEMA: ${root.querySelector('#lab-topic').value}\nÎNTREBĂRI: ${root.querySelector('#lab-keywords').value}\nNOTIȚE: ${root.querySelector('#lab-notes').value}\nREZUMAT: ${root.querySelector('#lab-summary').value}`);
  });
  root.querySelector('#lab-feynman-check').addEventListener('click', () => {
    const text = root.querySelector('#lab-explanation').value.trim();
    const verdict = text.length < 40
      ? 'Dezvoltă explicația și adaugă un exemplu.'
      : 'Ai realizat o primă explicație. Revizuiește-o pentru claritate.';
    write('#lab-feynman-result', `Concept: ${root.querySelector('#lab-concept').value}\n\nVerifică explicația:\n1. Ai folosit cuvinte simple?\n2. Ai oferit un exemplu?\n3. Ai explicat ideea principală?\n4. Ce parte trebuie să studiezi din nou?\n\n${verdict}`);
  });
  root.querySelector('#lab-pareto-make').addEventListener('click', () => {
    write('#lab-pareto-result', `OBIECTIV: ${root.querySelector('#lab-objective').value}\n\nACTIVITĂȚI:\n${root.querySelector('#lab-activities').value}\n\nPRIORITĂȚI:\n${root.querySelector('#lab-important').value}\n\nÎncepe cu activitatea care contribuie cel mai mult la obiectiv.`);
  });

  const pdcaStages = [
    'PLAN. Ce vrei să îmbunătățești?',
    'DO. Ce acțiune vei testa?',
    'CHECK. Cum verifici rezultatul?',
    'ACT. Ce vei păstra sau modifica?',
  ];
  let pdcaStep = 0;
  const pdcaAnswers = [];
  const pdcaTitle = root.querySelector('#lab-pdca-title');
  const pdcaAnswer = root.querySelector('#lab-pdca-answer');
  root.querySelector('#lab-pdca-next').addEventListener('click', () => {
    pdcaAnswers[pdcaStep] = pdcaAnswer.value;
    pdcaStep += 1;
    if (pdcaStep < pdcaStages.length) {
      pdcaTitle.textContent = pdcaStages[pdcaStep];
      pdcaAnswer.value = '';
      pdcaAnswer.focus();
      return;
    }
    write('#lab-pdca-result', pdcaStages.map((stage, index) => `${stage}\n${pdcaAnswers[index]?.trim() || 'fără răspuns'}`).join('\n\n'));
    pdcaStep = 0;
    pdcaAnswers.length = 0;
    pdcaTitle.textContent = pdcaStages[0];
    pdcaAnswer.value = '';
  });

  root.querySelector('#lab-review-make').addEventListener('click', () => {
    const value = root.querySelector('#lab-study-date').value;
    if (!value) {
      write('#lab-review-result', 'Alege data învățării.');
      return;
    }
    const start = new Date(`${value}T12:00:00`);
    const dates = [1, 2, 7].map((days) => {
      const next = new Date(start);
      next.setDate(next.getDate() + days);
      return next.toLocaleDateString('ro-RO');
    });
    write('#lab-review-result', `Tema: ${root.querySelector('#lab-review-topic').value}\nPrima recapitulare: ${dates[0]}\nA doua recapitulare: ${dates[1]}\nA treia recapitulare: ${dates[2]}`);
  });
  root.querySelector('#lab-split-make').addEventListener('click', () => {
    const total = Number(root.querySelector('#lab-study-time').value);
    const blocks = Math.max(1, Math.floor((Number.isFinite(total) ? total : 60) / 30));
    const work = Math.max(1, Math.floor(((Number.isFinite(total) ? total : 60) - 5 * (blocks - 1)) / blocks));
    const topic = root.querySelector('#lab-split-topic').value;
    const lines = [];
    for (let index = 0; index < blocks; index += 1) {
      lines.push(`Bloc ${index + 1}: ${work} minute. ${topic}`.trim());
      if (index < blocks - 1) lines.push('Pauză: 5 minute');
    }
    write('#lab-split-result', lines.join('\n'));
  });
  root.querySelector('#lab-lesson-make').addEventListener('click', () => {
    const result = root.querySelector('#lab-lesson-result');
    const rows = [
      ['Tema', root.querySelector('#lab-lesson-topic').value],
      ['Obiectiv', root.querySelector('#lab-lesson-goal').value],
      ['Demonstrație', root.querySelector('#lab-lesson-example').value],
      ['Întrebare', root.querySelector('#lab-lesson-question').value],
    ];
    result.replaceChildren();
    const list = document.createElement('dl');
    list.className = 'lesson-sheet';
    for (const [label, value] of rows) {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value.trim() || 'fără răspuns';
      row.append(term, detail);
      list.append(row);
    }
    const note = document.createElement('p');
    note.className = 'lesson-note';
    note.textContent = 'Prezintă ideea, demonstrează, apoi verifică înțelegerea colegilor.';
    result.append(list, note);
  });
}
