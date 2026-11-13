export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'DENY',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
};
export function normalizeSiteUrl(value) {
  if (!value?.trim()) return null;
  const url = new URL(value.trim());
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
    throw new Error('EDUMINDSET_SITE_URL must be a public HTTPS site address, without credentials, query or fragment.');
  }
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.href;
}
const attribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
export function publicMetadata(html, siteUrl, pagePath = '') {
  if (!siteUrl) return html;
  const image = attribute(new URL('images/alexandru-laborator-1200.webp', siteUrl).href);
  const pageUrl = attribute(new URL(pagePath, siteUrl).href);
  return html.replace(/(<meta property="og:image" content=")[^"]*("\s*\/>)/, `$1${image}$2`)
    .replace('</head>', `    <meta property="og:url" content="${pageUrl}" />\n    <link rel="canonical" href="${pageUrl}" />\n  </head>`);
}
export function hostHeaders(policy) {
  return '/*\n' + Object.entries({ ...SECURITY_HEADERS, 'Content-Security-Policy': `${policy}; frame-ancestors 'none'` })
    .map(([key, value]) => `  ${key}: ${value}`).join('\n') + '\n';
}
