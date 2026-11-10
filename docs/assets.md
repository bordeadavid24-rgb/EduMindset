# Asset provenance

All photographic assets are supplied by the user for this landing page. No stock, generated people or invented testimonials are used. Do not infer that a photo depicts an EDU MindSet or UnitED event.

| Website asset | User source in Downloads | Treatment |
| --- | --- | --- |
| alexandru-laborator-640/1200.webp | WhatsApp Image 2026-11-08 at 19.34.13.jpeg | EXIF orientation, proportional resize, WebP quality 84 |
| alexandru-dialog-640/1200.webp | WhatsApp Image 2026-11-08 at 19.34.13-2.jpeg | Same; original maximum width 848px |
| alexandru-portret-640/1200.webp | WhatsApp Image 2026-11-08 at 19.34.13-3.jpeg | Same; source landscape portrait, CSS crop |
| logo-source.jpeg | WhatsApp Image 2026-11-08 at 19.34.13-4.jpeg | Preserved exact source; reference for HTML wordmark |
| instagram-qr.jpeg | WhatsApp Image 2026-11-08 at 19.36.37.jpeg | Preserved exact source; linked to provided Instagram profile |

The logo source has nearly invisible black EDU lettering on a near-black background. The HTML masthead uses accessible text with the same EDU/vertical red MindSet arrangement, rather than shrinking the unreadable JPEG into the header.

Bricolage Grotesque variable: Fontsource, OFL-1.1. Phosphor regular icons: @phosphor-icons/core, MIT, eight copied unmodified SVGs in src/icons/ with licence. Favicon is a text E on the brand-blue ground, authored in native SVG.

## V2 source-derived cutout

`assets/derived/alex-laborator-cutout-v2.png` is an AI-assisted background-extraction edit made with the built-in image tool, based on the original microscope photograph. Its exact prompt is tracked in the adjacent `.prompt.txt`. The user source is unchanged. The image was inspected against that source before compositing. AVIF and WebP derivatives retain alpha transparency and use the real tabletop base. This is an edited photo asset; it is not described as an untouched documentary original.

`npm run assets:v2` generates widths 360, 640, 960 and 1200, plus 400/800 AVIF portraits and a 360px lossless QR. The AVIF widths are approximately 11/23/41/55 KB. Mobile uses a WebP source for a different decode/transfer tradeoff. Portrait and auditorium photographs retain their source identities.

## V3 reuse
V3 introduces no new raster assets. The existing source-derived alpha cutout crosses a logo-red plane in the opening, the library portrait supports the founder letter, the original classroom photograph gives context to the programme on desktop, and the auditorium photograph remains editorial context for UnitED. None is represented as evidence of a past project event. Existing responsive derivatives and provenance remain valid.
