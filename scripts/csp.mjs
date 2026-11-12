import { createHash } from 'node:crypto';

export function contentSecurityPolicy(html) {
  const match = html.match(/<script>([\s\S]*?)<\/script>/);
  if (!match) throw new Error('The theme script is missing, so the page policy cannot be hashed.');
  const hash = createHash('sha256').update(match[1]).digest('base64');
  return [
    "default-src 'self'",
    `script-src 'self' 'sha256-${hash}'`,
    "style-src 'self'",
    "font-src 'self'",
    "img-src 'self' data:",
    "connect-src 'none'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action mailto:",
  ].join('; ');
}
