# V5 verification, 10 November 2026

User request: a stronger, more professional hero with more drawing, animation, parallax and scroll-linked motion, in the logo red. Production preview: http://127.0.0.1:4175/?theme=light or ?theme=dark. The existing preview process was reused after `npm run build`. No MINA files or rendering processes were changed.

## Build and motion

`npm test` passes all four DOM groups. `npm run build` passes. Final output: HTML 29.65KB (9.36KB gzip), CSS 46.41KB (10.64KB gzip), JS 4.91KB (1.98KB gzip). No new font, raster asset, dependency or runtime request.

Headless Chrome ran `scripts/motion-check.browser.js` against the production page. The check passed: at 1440px the study sheet, red paper, route and question bubble change transform between scroll 0 and 350px and return on reverse scroll. The headline, actions and photograph keep document geometry and full opacity. Widths 320, 390, 820 and 1920 have no horizontal overflow. At 320 and 390 the decorative layers stay still. With reduced motion, the sheet animation is `none` and its transform does not change after scrolling. Chrome reported support for `animation-timeline: view()` and `animation-range: exit 0% exit 100%`.

## Local Lighthouse evidence

Lighthouse 13.6, real headless Chrome, default simulated throttling. These are lab observations on this machine, not field data.

| Run | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Initial desktop 1440, before contrast fix | 89 | 96 | 100 | 100 | 1.8s | 50ms | 0 |
| Confirmation desktop 1440 | 85 | 100 | 100 | 100 | 1.8s | 170ms | 0 |
| Mobile 390, DPR 2 | 98 | 100 | 100 | 100 | 2.1s | 100ms | 0 |

The first desktop run failed contrast on the 12px and 16px vertical MindSet at exact logo red #e85448 (3.35:1 on #f7f6f2) and failed accessible-name matching because custom brand labels hid the visible letters. The small wordmark now uses darker red #b3342a. The brand links use their visible text again. Buttons, the large circled word and the artwork keep #e85448, with near-black button text. The confirmation and mobile runs then scored accessibility 100, with no binary failures. Desktop performance moved from 89 to 85 between runs; do not treat either number as a stable device result.

## Visual checks

Headless Chrome openings at 1440 light, 1440 scrolled, 390, 320 and 1440 dark. The learning sketch, question bubble, study sheet and cutout read as one composition. The face, gloves and microscope stay visible. On a phone the map sits below the photograph and the decorative layers do not animate. The footer is present. Captures for this pass are temporary local files, not shipped assets.

## Limits

No physical-phone session or full assistive-technology certification is claimed. The page is a local preview for the user's visual reaction. No public host, workshop date, price, registration or finished film was added.
