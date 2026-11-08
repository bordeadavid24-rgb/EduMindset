import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// User-supplied assets, copied only from these explicitly identified files.
const downloads = '/Users/lilianab/Downloads';
const output = resolve('public/images');
await mkdir(output, { recursive: true });
const photos = [
  ['WhatsApp Image 2026-11-08 at 19.34.13.jpeg', 'alexandru-laborator'],
  ['WhatsApp Image 2026-11-08 at 19.34.13-2.jpeg', 'alexandru-dialog'],
  ['WhatsApp Image 2026-11-08 at 19.34.13-3.jpeg', 'alexandru-portret'],
];
for (const [source, name] of photos) {
  for (const width of [640, 1200]) {
    await sharp(resolve(downloads, source)).rotate().resize({ width, withoutEnlargement: true })
      .webp({ quality: 84 }).toFile(resolve(output, `${name}-${width}.webp`));
  }
}
await copyFile(resolve(downloads, 'WhatsApp Image 2026-11-08 at 19.34.13-4.jpeg'), resolve(output, 'logo-source.jpeg'));
await copyFile(resolve(downloads, 'WhatsApp Image 2026-11-08 at 19.36.37.jpeg'), resolve(output, 'instagram-qr.jpeg'));
console.log('Prepared 3 responsive photos, original logo, and Instagram QR.');
