# EDU MindSet

Romanian landing page for the educational project created by Alexandru-Constantin Tulică. V3 uses the logo red and charcoal, a first-person photographic invitation, an open founder letter, and a working programme containing an active-recall exercise, alongside UnitED, resources and contact.

## Run locally

Requires Node.js 22.12+ (developed with Node 24).

```sh
npm ci
npm run dev
```

Development: http://127.0.0.1:5173/

```sh
npm run build
npm run preview
```

Production preview: http://127.0.0.1:4173/. Deploy the contents of `dist/` to a static host. Relative asset paths also support repository subpaths. No runtime secrets or database are required.

## Project map

- `index.html`: semantic Romanian content, native disclosures and contact fields.
- `src/style.css`: responsive layouts, colour tokens, system light/dark themes and reduced motion.
- `src/main.js`: active recall, workshop deep links, mobile navigation and email handoff.
- `src/icons/`: eight original Phosphor regular SVGs and their MIT licence; CSS masks use current text colour.
- `public/images/`: responsive supplied photos, source logo and Instagram QR.
- `docs/CONTENT_RO.md`: full original content supplied by the user.
- `docs/`: research, asset provenance, coverage and verification notes.
- `PRODUCT.md` and `DESIGN.md`: product facts and visual decisions.
- `HANDOFF.md` and `GROK_PROMPT.md`: current work status and continuation prompt.

## Contact behavior

The form validates required fields, prepares an encoded `mailto:` draft and opens the visitor's email application. Sending happens there. It also offers copying the prepared message. A message that would make the link too long stays on the page for copying. The site does not collect/store submissions and never claims delivery. Connecting direct form delivery requires a real service and a revised privacy statement.

## Content integrity

Workshop dates, locations, prices and registration links have not been confirmed. UnitED and educational resources are forthcoming. Do not invent them. The auditorium photo is a supplied portrait, not documentation of a UnitED event.

The MINA TLC film is rendering in a separate project. This website does not touch that process. Add the final approved film only when supplied, as part of the EDU MindSet workshop context.

## Assets

V2 adds a source-derived AI-assisted transparent cutout of Alex with the microscope. The PNG and exact image-tool prompt are in `assets/derived/`. Run `npm run assets:v2` to produce alpha AVIF/WebP sizes, portrait/auditorium AVIF and compact QR. Phones use the WebP cutout; desktop prefers AVIF. Only the hero and its required fonts preload. Lower images lazy-load. The QR is replaced by its ordinary Instagram link on mobile.

Three photos and the QR come from user-supplied WhatsApp downloads, 8 November 2026. Source files remain unchanged. Responsive WebP derivatives can be regenerated locally using `npm run assets`; that script uses the explicitly documented Downloads filenames. The black logo JPEG is preserved as brand reference. The readable masthead reconstructs its text/vertical-red arrangement in HTML.

Bricolage Grotesque is self-hosted through Fontsource under OFL-1.1. Phosphor icons are MIT licensed. No project-wide open-source licence is granted for the supplied photographs or branding.

## Checks and design guide

Run `npm test` for DOM interaction/content integrity checks and `npm run build` for production. Lighthouse results and their limitations are recorded in `docs/verification-v3.md`. `docs/DESIGN_TECHNIQUES.md` explains each named technique in plain English. Local review: `http://127.0.0.1:4175/?theme=light` or `?theme=dark` when that preview is running.

## Before public launch

- Confirm the final domain/host and make Open Graph image URL absolute for that origin.
- Source is on https://github.com/bordeadavid24-rgb/EduMindset.
- Add final workshop details and booking link when supplied.
- Add the approved video when rendering completes.
- If requested, configure direct contact-form delivery instead of the transparent email-app handoff.
