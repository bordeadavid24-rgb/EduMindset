# V4 verification, 10 November 2026

User-directed exploration: a high-school notebook, comic and photographic collage language, preserving the red/charcoal identity and V3 truthful content. Production preview: http://127.0.0.1:4175/?theme=light or ?theme=dark. No MINA files or rendering processes were changed.

## Build and behavior

`npm test` passes all four actual-script DOM test groups. Coverage includes recall read/hide/reveal/reset and focus, menu Escape/theme, deep links opening contained activities, required-form and long-message fallback, unique IDs, ARIA label targets, internal anchors, supplied files and no em dashes in HTML/JS. V4 additionally verifies that exactly one semantic exercise step is current and that it follows the real activity state through reset.

`npm run build` passes. Final output: HTML28.91KB (8.77KB gzip), CSS41.89KB (9.82KB gzip), JS4.91KB (1.98KB gzip). New artwork adds roughly4KB compressed HTML/CSS/JS over V3, without a new raster image, font, runtime dependency or external request. Existing images remain responsive, lower photos lazy-load, and the hero has matching preload/source hints plus asynchronous decoding.

## Local Lighthouse evidence

Lighthouse13.6, real headless Chrome, default simulated throttling. Performance runs were sequential. These are lab observations on the shared local machine, not field data or a fixed device/network guarantee.

| Run | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Initial desktop1440 | 72 | 100 | 100 | 100 | 0.4s | 730ms | 0 |
| Initial mobile390 DPR2 | 94 | 100 | 100 | 100 | 2.2s | 250ms | 0 |
| Confirmation desktop1440 | 100 | 100 | 100 | 100 | 0.4s | 0ms | 0.001 |
| Confirmation mobile390 DPR2 | 99 | 100 | 100 | 100 | 2.0s | 40ms | 0 |

The initial desktop trace included an884ms unattributable task; script evaluation itself was about16ms. This does not establish its cause. The confirmation followed an async hero decode hint, pointer-safe decorative artwork and a narrow-screen label adjustment. Host variation may contribute, so do not attribute the score change solely to the hint or hide the initial runs. Do not stop unrelated rendering to chase benchmark numbers.

## Visual and accessibility checks

Initial desktop/mobile inspection and one confirmation batch. Current full-page evidence covers light320/390/820/1440/1920 and dark390. Every final automated accessibility run scored100 with zero reported colour-contrast failures. After that batch, the finish reviewer rejected a truncated320px capture. A replacement uses the same320px width with a tall capture viewport to include the complete page through contact/footer; ordinary720/1000px-height opening evidence is retained. Source-code inspection of Lighthouse's viewport-resize capture implementation explains why an assumed full-page filename alone is insufficient evidence. No claim is made about the precise cause of the truncation. The review also prompted moving truthful status labels beneath headings, and a narrow UnitED title/art collision was corrected with a two-row grid. The benchmark table predates these below-the-fold text-order/layout changes. Updated visual/accessibility captures confirm the final source. Check includes footer, photo crop, reading order, visible workshop action, image/text separation, notebook exercise, founder print, other programme disclosures and contact. Peripheral halftone is removed on mobile; artwork has no focus or pointer hit area. Small activity labels remain at least12px; ordinary reading copy stays16px+.

Captures: `.impeccable/review/v4/{desktop,mobile,small,tablet,wide,dark}-final.jpg`, with opening PNGs and initial reference captures alongside. Reports: `/private/tmp/edumindset-v4-*.json`. Review evidence is ignored local working material; it is not shipped to visitors. Fresh finish review is in `docs/finish-review-v4.md`.

The single Impeccable detector pass returned10 warnings: two bottom-underlines classified as side tabs, three outer-wrapper padding flags (spacing is supplied by inner containers), one tight-leading display mark, and four polygon-contour warnings. The polygons describe paper, not a substitute matte for Alex; his alpha remains source-derived. Notebook-grid advisories are intentional under the user's pinned request. Other advisories concern palette/type/radius variations recorded in DESIGN.md. No repeat scan was used to tune a warning score.

## Limits

Native browser access host was unavailable. Interaction evidence is jsdom, with visual evidence from headless Chrome. No interactive native-browser, physical-phone or comprehensive assistive-technology test is claimed. Lighthouse100 does not certify all accessibility needs.

This remains a local preview pending the user's visual reaction. No public deployment, direct form-delivery service, confirmed workshop date/place/price or finished film was added. Follow the latest HANDOFF.md synchronization note for GitHub status.
