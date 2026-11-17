# Countdown preview: implementation and verification

Checkpoint: 13 November 2026. Working preview only, not published. A 17 November recheck is recorded in HANDOFF.md and docs/verification-current.md. The logo link now keeps its visible EDU MindSet text and adds “, site-ul complet” for assistive technology. Local review on that date used http://127.0.0.1:4175/countdown.html?theme=light.

## Open it

- Countdown: http://127.0.0.1:4176/countdown.html?theme=light
- Dark appearance: http://127.0.0.1:4176/countdown.html?theme=dark
- Accepted full website: http://127.0.0.1:4176/index.html
- Start again if needed: npm run build, then npm run preview -- --port 4176.

Mock deadline: **25 November 2026 at 00:00 Europe/Bucharest**, stored once as MOCK_LAUNCH_AT in src/countdown-model.js. Its absolute instant is 24 November at 22:00 UTC. This is not Alex's confirmed date/hour. Visible mock-date copy in countdown.html must be updated alongside the timestamp when agreed. No original founding date is established by this preview.

## Built behavior

Separate Vite HTML entry; accepted index source unchanged. Exact logo red, charcoal, notebook paper, source-derived Alex collage and original vector pen marks. No new generated photograph, font or runtime dependency. Inline countdown units, Romanian-day question rotation, memory-only answer, real PNG preview and 1080 × 1920 download. Native file sharing is optional and never posts to Instagram automatically.

The preview's **Vezi momentul lansării** button reversibly shows the ready state with a link to the full website. At the mock deadline a reload also shows that state, without negative units or a new invented deadline. It does not deploy, conceal index.html or automatically navigate visitors. Actual public countdown-first release logic remains future work after date/domain/flow decisions.

Desktop pen entrance and bounded native scroll depth affect paper/doodles only. Text, clock and photograph remain in normal flow. Pause disables motion; reduced-motion/mobile layouts are still. Hidden tabs stop scheduled ticks and recompute elapsed time when resumed. No timer values are announced as a live region every second.

## Checks completed

- npm test: **21 passing groups**, covering the existing full site and countdown model/JSDOM behavior. New cases cover UTC offset, rollover, expiry/reload, Romania day boundaries and DST, question stability, whitespace/Unicode handling, safe text rendering, edit/focus, reversible rehearsal, motion preference and hidden-tab recovery.
- npm run build succeeds for both HTML entries. Countdown JS is approximately 7.94 kB before gzip, 3.58 kB gzip; CSS approximately 21.26 kB including font-face definitions, 5.62 kB gzip. Fonts and photos are separate, local assets. These sizes are not a measured page-speed score.
- node scripts/verify-landing.mjs: **70 file/HTTP checks**, including both pages' identical hashed CSP, matching host headers, noindex mock labeling, current countdown response/assets and 404s. The checker has no automated browser report attached; manual native-browser evidence below is separate.
- Separate configured-URL build under /private/tmp/edumindset-countdown-url-check confirms index canonical at the site root, countdown canonical at countdown.html and correct absolute social-image paths under an HTTPS subpath. Final dist has no example.test URL and no real public domain configured.
- Native Chrome through CUA: fresh countdown loaded; changing clock observed; reversible launch rehearsal and manual pause exercised; daily answer generated a Story card; PNG download completed and actual image opened. The initial cache/origin issue was resolved using a fresh preview process on port 4176.
- Valid full-page Chrome DevTools captures: **1280 × 800 CSS viewport** (Nest Hub Max preset, DPR2) and **393 × 852 CSS viewport** (iPhone16 preset, DPR3). Captures include the footer and settled artwork. Files are in ignored .impeccable/review/countdown/desktop.png and mobile.png.
- Independent finish review found four bounded fixes; after one fix batch and matching recaptures, all four were scored resolved. See docs/countdown-review.md. This verdict is for local design review, not public launch readiness.
- Extra native Chrome check: a **160-character unbroken W answer** generated the actual PNG preview and downloaded successfully. The 1080 × 1920 file was opened and all text/footer remained within bounds. Evidence: ignored .impeccable/review/countdown/story-max.png. This was a desktop browser interaction, not a physical phone or a fresh 320px-device check. The displayed result is the same PNG and scales as an image, with an unclipped HTML fallback if rendering fails.
- The phone image sizes hint was corrected from the old 240px assumption to the actual 112px collage width after review. This does not alter composition; it avoids choosing unnecessarily large sources on phones.

## Detector triage and limits

Initial tiny-text findings were corrected to at least 12px supplemental text, with 14px phone prose and 16px inputs. Colored shadows were changed to neutral offset elevation. No tiny-text or shadow exceptions were added.

The detector ran once at the defined checkpoint. Narrow file-scoped ignores in .impeccable/config.json record parser false positives for centered/padded timer and percent-padded Story content, plus the explicitly requested notebook-grid visual world. No entire file or rule is disabled. Type/color advisory differences are documented as route-specific extensions in DESIGN.md and .impeccable/design.json; they are not a zero-finding detector certification. The Impeccable documenter preserved the incumbent system and added named techniques.

Chrome console messages observed were extension warnings and Chrome DevTools' own blocked appspecific JSON probe under connect-src none. That probe is not an app dependency and CSP was not weakened. No app-source exception or missing-asset failure was observed in this manual session. This is not an automated clean-console certification.

No public deployment, domain availability check/purchase, fresh Lighthouse score, physical phone, screen reader, native file-share success, or live-host verification is claimed. Historical base-site performance/security audit results remain historical. The preview's dark appearance and 320px layout have source fallbacks but are not part of this fresh capture pair. GitHub and npm audit last failed DNS in prior checkpoints; neither was retried for this no-dependency local preview.

## Next user/AI work

User/Alex: review the preview, confirm exact anniversary/date/hour, agree .ro cost plus VAT and verify contacts on 14 November. AI: apply feedback; when publication resumes, verify domain availability and selected host/account, configure the actual countdown-first release flow, remove provisional controls/copy/noindex as appropriate, set actual metadata, rebuild and test live. Workshop, film, UnitED, resources and other optional work remain after publication.
