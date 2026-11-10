import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/images', { recursive: true });
for (const width of [360, 640, 960, 1200]) {
  const image = sharp('assets/derived/alex-laborator-cutout-v2.png').resize({ width, withoutEnlargement: true });
  await image.clone().webp({ quality: 82, alphaQuality: 90 }).toFile(`public/images/alex-laborator-cutout-${width}.webp`);
  await image.clone().avif({ quality: 54, effort: 5 }).toFile(`public/images/alex-laborator-cutout-${width}.avif`);
}
for (const [name, source] of [
  ['alexandru-portret', 'public/images/alexandru-portret-1200.webp'],
  ['alexandru-dialog', 'public/images/alexandru-dialog-1200.webp'],
]) {
  for (const width of [400, 800]) {
    await sharp(source).resize({ width, withoutEnlargement: true }).avif({ quality: 54, effort: 5 }).toFile(`public/images/${name}-${width}.avif`);
  }
}
await sharp('public/images/instagram-qr.jpeg').resize({ width: 360 }).webp({ lossless: true }).toFile('public/images/instagram-qr-360.webp');
console.log('Prepared responsive AVIF/WebP alpha cutout, photo variants and compact lossless QR.');
