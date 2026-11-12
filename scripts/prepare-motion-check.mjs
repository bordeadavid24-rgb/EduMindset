import fs from 'node:fs/promises';
// Top-level production copy: same built scripts/styles/CSP, plus QA-only external assets.
// npm run build removes all three generated fixtures before packaging or deployment.
const page = await fs.readFile('dist/index.html', 'utf8');
await fs.copyFile('scripts/motion-check.browser.js', 'dist/.motion-check.js');
await fs.writeFile('dist/.motion-check.css', '.qa-report{position:fixed;z-index:1000;inset:auto 0 0;padding:12px 24px;margin:0;max-height:120px;overflow:auto;background:#f7f6f2;border-top:1px solid #d4cfcb;color:#242323;font:14px monospace}');
await fs.writeFile('dist/.motion-check.html', page.replace('</head>', '<link rel="stylesheet" href="./.motion-check.css" /></head>').replace('</body>', '<pre id="qa-report" class="qa-report" role="status">Running production checks…</pre><script type="module" src="./.motion-check.js"></script></body>'));
