# V3 verification, 10 November 2026

Scope: the user's red/black, more personal teaching-space revision. Tests ran against the current source and production build served at http://127.0.0.1:4175/. No video files or render processes were changed.

## Functional and production checks

`npm test` passes all four groups using jsdom and the actual page script: recall read/hide/reveal/reset and focus; menu Escape/focus, theme and programme deep links; required-form and long-message fallback; IDs, labelled regions, image files, internal links and absence of em dashes. V3 adds a regression check that `#incearca` opens its containing Learning Skills disclosure when previously closed.

`npm run build` succeeds. Output is approximately 30.1KB CSS (7.17KB gzip) and 4.73KB JavaScript (1.93KB gzip), plus local fonts and responsive images. No new dependency or raster asset was introduced for V3. Whitespace cleanup after captures did not alter the rendered page.

## Local Lighthouse measurements

Lighthouse 13.6, headless Chrome, default simulated throttling. Full performance runs were sequential. These are local lab measurements, not production field data or a promise for every device/network.

| Run | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop, 1440 x 900 | 100 | 100 | 100 | 100 | 0.4s | 0ms | 0 |
| Mobile, 390 x 844, DPR2 | 99 | 100 | 100 | 100 | 2.1s | 30ms | 0 |

Transferred resources measured 172KiB on desktop and 185KiB on mobile. Source bytes and browser decode costs differ; the existing mobile WebP/desktop AVIF choice remains deliberate.

## Responsive visual evidence

Full-page captures include the footer. Initial desktop/mobile inspection and one confirmation batch cover 320, 390, 820, 1440 and 1920px widths, plus 390px dark theme. Every Lighthouse accessibility run scored100 and reported no colour-contrast failures. Checked title/image separation, legible source content, mobile action order, intact face/instrument, founder inset, programme and form. No material layout defect required a further app-code pass.

Captures: `.impeccable/review/v3/{desktop,mobile,small,tablet,wide,dark}-final.jpg`; opening crops and a founder/programme crop are alongside. Full Lighthouse JSON reports are in `/private/tmp/edumindset-v3-*.json`. Review artifacts are ignored local working evidence, not published site assets.

The single Impeccable detector run returned three wrapper-padding warnings, one tight-leading warning, and115 design-system colour/type advisories while DESIGN.md was still being rewritten from V2. Wrapper spacing is supplied by inner `.wrap`/`.workshop-shell`; visible prose has comfortable leading, while the display wordmark uses deliberate optical spacing. The obsolete palette/type warnings are explained by that documentation timing. The current DESIGN.md and sidecar now record V3; the detector was not repeatedly rerun to chase warnings. Fresh visual review is recorded in `docs/finish-review-v3.md`.

## Limits and launch follow-ups

Native browser access host was unavailable. The captures are real headless-Chrome renders; interaction checks are DOM tests, not an interactive browser or physical-phone session. Real iOS/Android testing remains unverified. Lighthouse100 accessibility does not certify comprehensive accessibility.

No public deployment was made. Workshop dates, registration, hosting origin and approved workshop film still depend on real supplied details. Contact continues to prepare an email draft rather than deliver it through a backend. User preference for the new visual direction awaits their reaction.
