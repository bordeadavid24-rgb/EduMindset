# Asset provenance

All photographic assets are supplied by the user for this landing page. No stock, generated people or invented testimonials are used. Do not infer that a photo depicts an EDU MindSet or UnitED event.

| Website asset | User source in Downloads | Treatment |
| --- | --- | --- |
| alexandru-laborator-640/1200.webp | WhatsApp Image 2026-11-08 at 19.34.13.jpeg | EXIF orientation, proportional resize, WebP quality 84 |
| alexandru-dialog-640/1200.webp | WhatsApp Image 2026-11-08 at 19.34.13-2.jpeg | Same; original maximum width 848px |
| alexandru-portret-640/1200.webp | WhatsApp Image 2026-11-08 at 19.34.13-3.jpeg | Same; source landscape portrait, CSS crop |
| assets/source/logo-source.jpeg | WhatsApp Image 2026-11-08 at 19.34.13-4.jpeg | Preserved exact source; reference for HTML wordmark. Not published. |
| assets/source/instagram-qr.jpeg | WhatsApp Image 2026-11-08 at 19.36.37.jpeg | Preserved exact source. The page publishes only the 360px WebP. |

The logo source has nearly invisible black EDU lettering on a near-black background. The HTML masthead uses accessible text with the same EDU/vertical red MindSet arrangement, rather than shrinking the unreadable JPEG into the header.

Bricolage Grotesque variable: Fontsource, OFL-1.1. Phosphor regular icons: @phosphor-icons/core, MIT, eight copied unmodified SVGs in src/icons/ with licence. Favicon is a text E on a red #b3342a ground, authored in native SVG.

Updated source/provenance review: 12 November 2026. The sections below identify when assets were introduced; they are historical version labels, not claims that V2 or V4 is the current page.

## V2 source-derived cutout

`assets/derived/alex-laborator-cutout-v2.png` is an AI-assisted background-extraction edit made with the built-in image tool, based on the original microscope photograph. Its exact prompt is tracked in the adjacent `.prompt.txt` and is not published with the site. The user source is unchanged. The image was inspected against that source before compositing. AVIF and WebP derivatives retain alpha transparency and use the real tabletop base. This is an edited photo asset; it is not described as an untouched documentary original.

`npm run assets:v2` generates widths 360, 640, 960 and 1200, plus 400/800 AVIF portraits and a 360px lossless QR. The AVIF widths are approximately 11/23/41/55 KB. Mobile uses a WebP source for a different decode/transfer tradeoff. Portrait and auditorium photographs retain their source identities.

## V3 reuse
V3 introduces no new raster assets. The existing source-derived alpha cutout crosses a logo-red plane in the opening, the library portrait supports the founder letter, the original classroom photograph gives context to the programme on desktop, and the auditorium photograph remains editorial context for UnitED. None is represented as evidence of a past project event. Existing responsive derivatives and provenance remain valid.

## V4 original code-native artwork
V4 adds inline SVG pen illustrations (book/lightbulb, pencil, question bubble, dialogue bubbles, directional loop and marker circle) authored for this site, plus CSS squared paper, halftone, torn-paper contours and tape. No reference artwork was copied; no new raster image, font or runtime library was added. These are editorial decorations, not Alex's handwriting or physical classroom artifacts. Existing source photos and V2 alpha cutout remain unchanged.

## Current V5 publication boundaries

V5 reuses the same source-derived photographic cutout and original supplied photos. It adds a larger code-native three-node learning map and CSS motion, with no new raster image, font family, or drawing library. Photo identity and edit provenance remain unchanged.

`assets/source/` contains the logo and QR masters; `assets/derived/` contains the edited hero PNG and exact prompt. These directories are not copied into the static publication. `public/images/` contains published responsive derivatives and the 360px QR. Prompt JSON notes formerly beside published derivatives have been removed from `public/`; provenance remains in the tracked source records.

The single Bricolage family is bundled from Fontsource CSS. Unused `/src/fonts/` copies and explicit font preload tags were removed; only the applicable hero image preloads. Original photo regeneration still uses the documented local WhatsApp Downloads files through `npm run assets`; `npm run assets:v2` uses the derived cutout, published photographic derivatives, and `assets/source/instagram-qr.jpeg`.

A future workshop film or downloadable resource is a separate approved content input. Neither is currently an asset gap that prevents the project teaser from launching.
