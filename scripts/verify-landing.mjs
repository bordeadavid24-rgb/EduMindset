import assert from 'node:assert/strict';
import { readFile, readdir, stat, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, dirname, relative } from 'node:path';
import { contentSecurityPolicy } from './csp.mjs';
import { hostHeaders } from './release.mjs';

const root = resolve('dist');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const policy = contentSecurityPolicy(html);
const checks = [];
function check(condition, message) { assert.ok(condition, message); checks.push(message); }
check(html.includes(`http-equiv="Content-Security-Policy" content="${policy}"`), 'built theme script matches its CSP hash');
check(await readFile(resolve(root, '_headers'), 'utf8') === hostHeaders(policy), 'deployment headers match the exact build policy');
check(!(await readdir(root)).some(name => name.startsWith('.motion-check')), 'release contains no QA fixture');
const published = await readdir(resolve(root, 'images'));
check(!published.some(name => name.endsWith('.json') || name.endsWith('.jpeg')), 'source masters and prompt sidecars are outside the website bundle');
const assets = new Set();
for (const match of html.matchAll(/(?:src|href)="(\.\/(?:assets|images)\/[^"?#]+)"/g)) assets.add(match[1]);
for (const match of html.matchAll(/srcset="([^"]+)"/g)) for (const entry of match[1].split(',')) assets.add(entry.trim().split(/\s+/)[0]);
for (const asset of assets) {
  check(!relative(root, resolve(root, asset)).startsWith('..'), `asset remains inside the release: ${asset}`);
  await stat(resolve(root, asset));
}
for (const name of await readdir(resolve(root, 'assets'))) {
  if (!name.endsWith('.css')) continue;
  const css = await readFile(resolve(root, 'assets', name), 'utf8');
  for (const match of css.matchAll(/url\((?:"|')?([^)'"\s]+)(?:"|')?\)/g)) {
    if (/^(data:|#)/.test(match[1])) continue;
    check(!/^https?:/.test(match[1]), 'stylesheet does not need a third-party asset');
    await stat(resolve(root, 'assets', match[1]));
  }
}
const browserReports = [];
for (const file of process.argv.slice(2)) {
  const artifacts = JSON.parse(await readFile(file, 'utf8'));
  const result = artifacts.ConsoleMessages?.find(m => m.text?.startsWith('EDUMINDSET_QA_RESULT '));
  check(result, `browser completed the QA script: ${file}`);
  const parsed = JSON.parse(result.text.slice('EDUMINDSET_QA_RESULT '.length));
  check(parsed.result === 'PASS', parsed.error || 'browser QA passed');
  check(!artifacts.ConsoleMessages.some(m => m.level === 'error'), 'browser had no uncaught or CSP console errors');
  browserReports.push({ file, checks: parsed.checks.length, viewport: parsed.evidence.viewport });
}
const origin = process.env.EDUMINDSET_PREVIEW || 'http://127.0.0.1:4175';
const home = await fetch(origin + '/', { signal: AbortSignal.timeout(5000) });
check(home.status === 200, 'production preview responds');
check(home.headers.get('content-security-policy') === `${policy}; frame-ancestors 'none'`, 'HTTP content policy matches the release');
check(home.headers.get('x-frame-options') === 'DENY', 'framing protection remains enabled');
for (const asset of assets) {
  const response = await fetch(new URL(asset, origin + '/'), { signal: AbortSignal.timeout(5000) });
  check(response.ok, `published asset responds: ${asset}`);
  await response.arrayBuffer();
}
for (const path of ['/not-a-real-page', '/images/logo-source.jpeg', '/images/instagram-qr.jpeg', '/images/alex-laborator-cutout-360.webp.json', '/src/fonts/bricolage-grotesque-latin-wght-normal.woff2']) {
  const response = await fetch(origin + path, { signal: AbortSignal.timeout(5000) });
  check(response.status === 404, `removed or unknown path returns404: ${path}`);
}
const result = { result: 'PASS', buildHtmlSha256: createHash('sha256').update(html).digest('hex'), checkedAt: new Date().toISOString(), checks: checks.length, browserReports, publicAddressConfigured: html.includes('rel="canonical"'), browserStatus: browserReports.length ? 'reports verified' : 'not run; no fresh browser claim' };
await mkdir('.impeccable', { recursive: true });
await writeFile('.impeccable/release-checks.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
