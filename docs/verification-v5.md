# V5 verification, 10 November 2026

Historical report. For the current12 November build, passing checks and explicit browser/network limitations, read verification-current.md.

User request: a stronger, more professional hero with more drawing, animation, parallax and scroll-linked motion, in the logo red. Production preview: http://127.0.0.1:4175/?theme=light or ?theme=dark. The existing preview process was reused after `npm run build`. No MINA files or rendering processes were changed.

## Build and motion

`npm test` passes all four DOM groups. `npm run build` passes. Final output: HTML 29.65KB (9.36KB gzip), CSS 46.41KB (10.64KB gzip), JS 4.91KB (1.98KB gzip). No new font, raster asset, dependency or runtime request.

Headless Chrome ran `scripts/motion-check.browser.js` against the production page. The first pass checked the short exit-only depth. That pass is superseded by the follow-up below.

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

## Motion follow-up, same day

The first depth was too small to see, and it only amounted to a few dozen pixels. The replacement is still native CSS, with no motion library and no scroll pinning.

On a 1440×900 headless Chrome pass, with motion allowed, the question bubble's `translate` changes while the page is still, and the orbit stroke shortens during the same wait. Between scroll 0 and 800px the measured shifts were: photograph -72px, route -117px, bubble -67px, study sheet +23px, red paper +20px. Reverse scroll restored those transforms. The headline and the buttons kept their document position. Widths 320, 390, 820, and 1920 had no horizontal overflow. At 320 and 390 every animated layer stayed `animation: none`. With reduced motion, the sheet animation is `none`.

Visual frames at the top, during the pen stroke, at 260px, and at 500px show the circle and sketch drawing, the route and photograph lifting ahead of the red paper, and the founder's name remaining on the page colour below that paper. The 390, 820, and dark openings stay intact. The face is not cropped at rest. Phones do not run the drift or the scroll shift.

Build after this change: HTML 29.87KB, CSS 48.46KB (10.95KB gzip), JS 4.91KB. `npm test` still passes all four groups. The preview at http://127.0.0.1:4175/?theme=light serves this build. No new Lighthouse run was taken for the motion change. The earlier scores above still describe the previous build.

## Cleanup and security, same day

`npm audit` reported no vulnerabilities. The unused `.hero-book` rules are gone. Two font preloads pointed at `/src/fonts/`, which the production build does not serve; those copies are removed and the page uses the bundled font files. Prompt notes and the original logo and QR masters are no longer in `public/`, so a visitor cannot download them. The page still uses the same photographs and the 360px QR.

The production HTML includes a content-security policy: scripts and styles from this site only, plus the hashed theme line, images from this site or the inlined icons, no objects, no extra network calls, and forms limited to `mailto:`. Browsers ignore framing rules in a meta policy, so the local preview adds `frame-ancestors 'none'` in the header, with `nosniff`, a strict referrer policy, `DENY` framing, and a permissions policy that turns off camera, microphone, location, and payment. Unknown preview paths return 404. The message builder keeps the recipient on `edumindset8@gmail.com` and removes line breaks from the name, email, and subject. External links already use `noopener noreferrer`. This does not replace a host-level header setup once the site has a public address.

## Limits

No physical-phone session or full assistive-technology certification is claimed. The page is a local preview for the user's visual reaction. No public host, workshop date, price, registration or finished film was added.
