# EDU MindSet

Romanian landing page for the educational project created by Alexandru-Constantin Tulică. Current V5 combines the original red/charcoal identity, real photographs, an open founder letter, notebook/comic artwork, a three-stage recall exercise, and a visible illustrated hero with native CSS scroll depth.

Latest planning update13 November2026: Alex approved the base site; an anniversary countdown is proposed but not implemented. Candidate25 November still needs date/year/hour confirmation. See `docs/ANNIVERSARY_LAUNCH_PLAN.md` for decisions, owner tasks and AI next steps.

Technical verification checkpoint12 November2026. Implementation and verification are distinct: read `HANDOFF.md` for the latest working-tree/synchronization state, `docs/verification-current.md` for current checks and limits, and `docs/verification-v5.md` for historical V5 evidence. The remaining user inputs are listed in `USER_TODO.md`.

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

Default production preview: http://127.0.0.1:4173/. The existing review session may use `npm run preview -- --port 4175` and http://127.0.0.1:4175/?theme=light or ?theme=dark. Reuse a server only when it serves the current build.

Deploy the contents of `dist/` to a static host. Relative asset paths support repository subpaths. No runtime secrets or database are required for the current page.

## Project map

- `index.html`: Romanian content, native disclosures, inline original SVG artwork, and contact fields.
- `src/style.css`: responsive layouts, colour tokens, light/dark themes, drawing and scroll motion, and reduced-motion/mobile fallbacks.
- `src/main.js`: active recall, theme choice, workshop deep links, compact navigation, and email-app handoff.
- `src/motion.js`: desktop hero stop/start control and suspension of time-based animation when the hero is offscreen or the document is hidden.
- `src/mail.js`: fixed recipient, field normalisation, encoded mailto draft, and long-link detection.
- `scripts/csp.mjs`, `scripts/release.mjs`, and `vite.config.js`: build-time content-security policy, public metadata, generated host-header file, and local preview response headers.
- `.env.example`: documented optional `EDUMINDSET_SITE_URL` setting; no public address is assumed.
- `src/icons/`: eight unmodified Phosphor regular SVGs and their MIT licence; CSS masks use current text colour.
- `public/images/`: published responsive photographic derivatives and compact Instagram QR.
- `assets/source/`: original logo and QR masters, kept outside the published directory.
- `assets/derived/`: source-derived hero edit and its exact image-tool prompt, also outside the published directory.
- `docs/CONTENT_RO.md`: full original Romanian content; `docs/content-coverage.md` records the latest source review.
- `PRODUCT.md`, `DESIGN.md`, and `docs/DESIGN_TECHNIQUES.md`: product facts, actual design system, and plain-English technique explanations.
- `HANDOFF.md` and `GROK_PROMPT.md`: current status and continuation instructions.

## Current behavior

Desktop motion draws the hero's pen strokes, drifts decorative paper, and uses a root scroll timeline over the opening to move the photographic and drawn layers at different rates. Headline, controls, and factual caption stay in document flow. Phones and reduced-motion users receive a still, complete composition. Unsupported scroll timelines omit scroll depth; desktop pen/drift can still run. Eligible desktop users can stop/start the hero using the caption control. Manual stop disables all hero animation and leaves the paths fully drawn. Time-based pen/drift pauses when the hero is offscreen or the document is hidden. Exact implementation and verification evidence are documented separately.

The contact form validates fields, prepares an encoded draft addressed to `edumindset8@gmail.com`, and opens the visitor's email app. Sending happens there. Name, email, and subject are normalised to one line; message paragraphs are preserved. A link that would be too long stays on the page for copying. The site has no submission backend, does not store contact messages, and never claims delivery. Direct form delivery is optional future work requiring an actual service and an accurate replacement data-handling explanation.

## Assets and provenance

Three photographs, the logo, and QR were supplied through the 8 November WhatsApp downloads. `npm run assets` regenerates WebP photos from the specifically documented local Downloads filenames and copies the logo/QR masters to `assets/source/`; those original photo Downloads are needed for that regeneration step.

The V2 AI-assisted background-extraction edit is reused unchanged in V5. Its source PNG and prompt remain in `assets/derived/`. `npm run assets:v2` creates transparent AVIF/WebP widths, portrait/auditorium AVIF derivatives, and the compact lossless QR. Phones prefer the WebP hero; desktop prefers AVIF. Only the applicable hero image preloads. Fonts are bundled through Fontsource CSS without explicit font preload tags; lower photographs lazy-load. Phones retain the Instagram link instead of the QR.

The readable masthead reconstructs the supplied logo's text/vertical-red arrangement in HTML. The favicon is a native SVG E on a red ground. See `docs/assets.md` for exact origins and treatments. Do not imply the auditorium image records a previous UnitED event or call the AI-assisted cutout untouched documentary photography.

Bricolage Grotesque is locally served under OFL-1.1. Phosphor icons are MIT licensed. No project-wide open-source licence is granted for supplied photographs or branding.

## Build policy and host configuration

The build injects a content-security-policy meta tag allowing same-origin assets, the hashed theme script, inline image data, and mailto form actions. The local preview also sends framing, content-type, referrer, and capability headers. Unknown preview paths return 404.

The build also generates `dist/_headers` from the same exact CSP and response-header helpers, including `frame-ancestors` at HTTP-header level. That file applies only on hosts supporting the Netlify/Cloudflare Pages static `_headers` convention. Other hosts need equivalent native configuration. The local preview uses those header values directly. No public deployment or effective host configuration is implied by generating the file. Keep policy aligned with any intentionally added service; the current page uses no third-party runtime integration.

Once the real public address is known, set `EDUMINDSET_SITE_URL` in the host build environment or an ignored local env file, using `.env.example` as the setting reference, then run `npm run build`. Supply the actual HTTPS address, including any repository subpath, without credentials, query, or fragment. The build uses it for the absolute Open Graph image, `og:url`, and canonical URL. If unset, no public origin is invented and the local page retains relative metadata. No production address is configured merely by copying the example file.

## Checks

Run `npm test` for interaction, content, mail, and policy checks; run `npm run build` for production. `docs/verification-current.md` records current checks; `docs/verification-v5.md` preserves historical browser/Lighthouse observations. Earlier scores do not certify the current working tree. The November 12 source coverage review is not a new browser or physical-phone pass. No change to framing policy is needed for QA; a top-level built-page copy can be tested under the same CSP.

## Launch and later content

The site can launch as a truthful project teaser before dates, video, or resource downloads are available. For publication, choose the host/public address, obtain the final content/media review, set the real public-address build variable, confirm host support for the generated headers or configure their equivalent, and verify the deployed page. Repository: https://github.com/bordeadavid24-rgb/EduMindset. Check current synchronization in `HANDOFF.md` rather than assuming working-tree changes are already pushed.

Later, when supplied, add workshop date/time, location or online format, audience, duration, price/free status, capacity, and registration destination. UnitED details and actual resources can replace their forthcoming states independently. Add the approved final film only when available and reviewed for the EDU MindSet workshop context. The website does not modify or stop the separate MINA video project and implies no museum affiliation.
