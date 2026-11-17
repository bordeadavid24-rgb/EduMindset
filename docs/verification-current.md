# Current project verification

17 November 2026. This section is the current record. The 12 November notes below remain the earlier inspection.

## 17 November checks

- `npm test`: 21 groups pass.
- `npm audit --omit=optional`: 0 vulnerabilities. Node v24.22.1.
- `npm run build` succeeds for index.html and countdown.html.
- `node scripts/verify-landing.mjs`: 70 checks pass on http://127.0.0.1:4175. Index HTML SHA256 `680d304112eddafa3d028652da0c72a1e1f72351ab99dab3bd6497666e8d37ca`. No public canonical is configured.
- Headless Chrome on the production preview: both pages, light and dark, at 320, 390, 768 and 1280, with no horizontal overflow. Full-site images decode, there is one heading level one, and the footer is last. Recall, theme, motion pause, phone-menu Escape, empty and invalid contact fields, and the long-message copy path behave as specified. The countdown clock, reversible rehearsal, phone timer order, and a 160-character PNG download succeed. The downloaded file is 1080×1920.
- Lighthouse 13 on the full site, uncached local preview: desktop and mobile performance 100, accessibility 100, best practices 100, SEO 92. Desktop LCP 0.4s, CLS 0, TBT 0. Mobile LCP 1.7s, CLS 0.001, TBT 0. SEO loses the robots.txt audit because Lighthouse’s own fetch is blocked by `connect-src 'none'`. `public/robots.txt` is a valid allow-all file and is served as text/plain.
- Countdown accessibility is 100 after the logo’s accessible name was aligned with its visible text. The page stays `noindex, nofollow`, so its SEO score is not a launch defect.
- Not claimed: a physical phone, a screen reader, a successful native share sheet, or a deployed host.

## 12 November record

12 November 2026. Earlier inspection; V1–V5 reports are historical measurements.

## Inspection and completed work

The tracked V5 commits88c7bef/99cbade were already synchronized on10 November according to the recorded Git output. This inspection found later uncommitted motion, CSP, mail and asset/font cleanup. Those changes were preserved and reviewed, rather than reset. Required content coverage is complete; the site can launch as a teaser while workshop, film, UnitED and resource details remain forthcoming.

Completed: original masters relocated outside the website bundle; prompt sidecars and unused font copies removed; bundled fonts/data-URI icons retained; contact header fields normalized; hashed theme-script CSP and strict preview headers checked; manual motion stop/start added; time animation suspended offscreen/hidden; release metadata accepts an explicit HTTPS address; exact-policy host headers emitted to `dist/_headers`; Node24 selected in `.nvmrc`; README/design/technique/coverage/provenance/handoff records updated.

The old iframe QA was incompatible with `frame-ancestors 'none'` and `X-Frame-Options: DENY`. It was replaced with a top-level copy of the actual built page, using external QA assets under the identical policy. No framing or inline-script exception was introduced. Generated QA files are removed by the final production build.

## Passing checks

- `npm test`: all8 groups pass. Actual-script DOM tests cover recall and focus, menu/theme/deep links, form validation and long-message fallback, IDs/ARIA/assets/em-dash integrity, normalized mail drafts and real recipient, publication boundaries and policy generation, motion pause/preference/offscreen/hidden state, and configured-address metadata/header generation.
- `npm run build`: succeeds. Current unconfigured-address build: HTML30.09KB (9.50KB gzip), CSS49.02KB (11.01KB gzip), JS6.01KB (2.42KB gzip), plus self-hosted fonts and responsive imagery. No new runtime dependency.
- A separate production build with an explicit test HTTPS URL/subpath in `/private/tmp/edumindset-siteurl-check` produced correct absolute `og:image`, `og:url`, canonical and header output. That test address is absent from the final normal release.
- `node scripts/verify-landing.mjs`:55 checks pass on the final production files and running preview. Covers matching CSP/hash/header file, no QA files or source masters, local stylesheet assets, responsive image files and HTTP responses, HTTP policy/framing headers, and404s for unknown paths/removed files.
- All19 published raster files were inspected with Sharp: no EXIF/XMP/IPTC metadata blocks. Relocated logo and QR masters were independently checked against their tracked predecessors and match exactly. Provenance remains in source/docs and repository history, not in the deployed website assets.
- `git diff --check`: passes.

The generated `_headers` convention is supported for static responses by [Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/headers/) and [Netlify](https://docs.netlify.com/manage/routing/headers/). It is not a universal hosting configuration. Public-host headers and metadata must be checked after the actual host/address is chosen.

## Explicit limits

Fresh browser QA did not run successfully. Direct headless Chrome launch and Lighthouse both failed waiting for a debugging port. The isolated browser host is unavailable. A native Chrome inspection reached the previously open EDU MindSet tab, but it was a cached earlier page; an active browser session changed tabs during navigation, so no fresh visual/motion certification is based on it. No upload or deployment was performed. No physical-phone, assistive-technology or current Lighthouse performance result is claimed.

The new browser QA source is prepared to check images/font/icons/CSP, theme persistence, native menu/recall/deep links, safe long-message/copy branches, actual motion/reverse/static preferences and manual/offscreen pause. It does not send mail or alter the user's real clipboard. Its execution remains pending browser availability. Old performance scores remain in docs/verification-v5.md with their dates.

`npm audit --omit=optional` failed DNS resolution to registry.npmjs.org; the older zero-vulnerability audit is not represented as current. `git fetch origin` failed DNS resolution to github.com. Final synchronization result and backup paths are recorded in HANDOFF.md. No forced push or dependency update was attempted.

## Release boundaries

The current build assumes no public domain: `EDUMINDSET_SITE_URL` is unset, so social metadata remains relative and no invented canonical is published. Set that variable to the real HTTPS site address and rebuild for final publication. All event/resource statuses remain honest. Contact remains a mail-app handoff with no delivery backend. The MINA video/render files and processes were not changed.

Remaining owner decisions are listed in USER_TODO.md. Final project/source/release archives are recorded in HANDOFF.md after packaging. This is a verified local build with named browser/network limitations, not a claim of a live public deployment.
