import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import { contentSecurityPolicy } from './scripts/csp.mjs';
import { SECURITY_HEADERS, normalizeSiteUrl, publicMetadata, hostHeaders } from './scripts/release.mjs';

function productionCsp(siteUrl) {
  let outputDir;
  return {
    name: 'production-csp',
    apply: 'build',
    configResolved(config) { outputDir = resolve(config.root, config.build.outDir); },
    transformIndexHtml: {
      order: 'post',
      handler(source) {
        const html = publicMetadata(source, siteUrl);
        const policy = contentSecurityPolicy(html);
        return html.replace('<head>', `<head>\n    <meta http-equiv="Content-Security-Policy" content="${policy}" />`);
      },
    },
    writeBundle() {
      const html = readFileSync(resolve(outputDir, 'index.html'), 'utf8');
      writeFileSync(resolve(outputDir, '_headers'), hostHeaders(contentSecurityPolicy(html)));
    },
  };
}
function previewSecurityHeaders() {
  return {
    name: 'preview-security-headers',
    configurePreviewServer(server) {
      server.middlewares.use((_req, res, next) => {
        for (const [name, value] of Object.entries(SECURITY_HEADERS)) res.setHeader(name, value);
        const html = readFileSync(new URL('./dist/index.html', import.meta.url), 'utf8');
        const policy = html.match(/http-equiv="Content-Security-Policy" content="([^"]*)"/)?.[1];
        if (policy) res.setHeader('Content-Security-Policy', `${policy}; frame-ancestors 'none'`);
        next();
      });
    },
  };
}
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'EDUMINDSET_');
  const siteUrl = normalizeSiteUrl(process.env.EDUMINDSET_SITE_URL || env.EDUMINDSET_SITE_URL);
  return {
    base: './', appType: 'mpa', build: { target: 'es2022' },
    plugins: [productionCsp(siteUrl), previewSecurityHeaders()],
    server: { port: 5173, strictPort: true },
    preview: { port: 4173, strictPort: true, headers: SECURITY_HEADERS },
  };
});
