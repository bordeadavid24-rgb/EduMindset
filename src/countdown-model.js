// Preview only. Replace after Alex confirms the anniversary and launch hour.
export const MOCK_LAUNCH_AT = '2026-11-25T00:00:00+02:00';

export function remainingTime(targetMs, nowMs) {
  const total = Math.max(0, Math.ceil((targetMs - nowMs) / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor(total / 3600) % 24,
    minutes: Math.floor(total / 60) % 60,
    seconds: total % 60,
    expired: total === 0,
  };
}

export function bucharestDayKey(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Bucharest', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const value = type => parts.find(part => part.type === type).value;
  return `${value('year')}-${value('month')}-${value('day')}`;
}

const questions = [
  ['Ce ai putea explica astăzi cuiva, în propriile tale cuvinte?', 'Alege o idee mică. Imaginează-ți că o explici unui coleg care o întâlnește pentru prima dată.'],
  ['Ce întrebare ai pune dacă nu ți-ar fi teamă să o spui?', 'Poate fi despre o lecție, despre viitor sau despre ceva ce ai observat azi.'],
  ['Ce ai înțeles abia după ce ai încercat?', 'Gândește-te la o experiență concretă, chiar și la una foarte mică.'],
  ['Ce lucru complicat ai putea împărți în trei pași?', 'Începe cu primul pas pe care chiar îl poți face.'],
  ['Ce ai vrea să înțelegi, dincolo de nota de la test?', 'Alege ceva care te face curios. Nu există un răspuns de manual aici.'],
  ['Ce idee ți-a schimbat puțin perspectiva?', 'Poate veni dintr-o conversație, dintr-o carte sau dintr-o greșeală.'],
  ['Ce i-ai spune unui coleg care crede că nu poate?', 'Scrie un gând pe care ți-ar prinde bine să îl auzi și tu.'],
];

export function dailyChallenge(now = new Date()) {
  const key = bucharestDayKey(now);
  const day = Math.floor(Date.parse(`${key}T00:00:00Z`) / 86400000);
  const [question, hint] = questions[((day % questions.length) + questions.length) % questions.length];
  return { id: key, question, hint };
}

export function cleanAnswer(value) {
  return Array.from(value.replace(/[\u0000-\u0008\u000e-\u001f\u007f-\u009f]/g, '').replace(/\s+/g, ' ').trim()).slice(0, 160).join('');
}
