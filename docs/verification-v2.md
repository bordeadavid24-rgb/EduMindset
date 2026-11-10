# V2 verification

Completed 9-10 November 2026. Static production build, local Chrome 157 and Lighthouse 13.6.0. These are local laboratory checks, not production field measurements or a physical-phone test.

## User story
A Romanian-speaking visitor understands the project, tries a short active-recall exercise, finds a workshop topic, reads about Alex, and reaches Instagram or prepares a contact email.

## Results

| Check | Evidence |
| --- | --- |
| Build | `npm run build` passes with Vite 8.3.6 |
| Interaction/content tests | `npm test`: 4 passing tests covering recall read/hide/reveal/reset and focus, menu Escape focus, workshop deep link, theme, contact validation/long-message fallback, unique IDs, anchor destinations, image files and no em dashes |
| Desktop loading | Latest complete performance run: 100 performance, 100 accessibility, 100 best practices, 100 SEO; LCP about 0.5s, TBT 0ms, CLS 0 |
| Mobile loading | Latest complete mobile run: 89 performance, 100 accessibility, 100 best practices, 100 SEO; LCP about 1.9s, TBT 430ms, CLS 0; 390x844, DPR2, simulated mobile throttling |
| Responsive visual review | Final captures at 320, 390, 820, 1440 and 1920px, with a separate dark 390px capture |
| Automated accessibility | 100 at each of those final capture sizes |
| Fresh finish review | `docs/finish-review-v2.md`: ship for user review, no required material visual fixes |
| Copy | No em dashes in visible HTML or application script; Romanian diacritics preserved; full source copy archived |

Performance varied during development and concurrent local work. Do not substitute the older V1 unthrottled score, select the best experimental mobile score, or describe mobile performance as perfect. The remaining mobile main-thread cost is recorded above. No further cosmetic iterations are required by the finish review.

## What changed for loading

- Source-derived transparent hero at 360/640/960/1200 widths. Desktop prefers AVIF; phones use WebP with matching media-specific preload.
- One local variable font family, Bricolage Grotesque, with only its needed Latin and Latin-ext files requested by this Romanian page.
- Production JavaScript approximately 1.93 KB gzip and CSS approximately 6.72 KB gzip.
- Lower images lazy-load; explicit dimensions/aspect ratios reserve layout space.
- The 1.7 MB editing-source PNG is outside `public/` and is not requested by the landing page.
- A deferred-rendering experiment was removed after capture geometry became unreliable. All final captures use normally rendered sections.

## Capture locations

Local, intentionally untracked evidence is under `.impeccable/review/v2/`:

- `desktop-final.jpg`, 1440px
- `mobile-final.jpg`, 390px
- `small-final.jpg`, 320px
- `dark-final.jpg`, 390px
- `tablet-final.jpg`, 820px
- `user-1920-final.jpg`, 1920px

Files with `opening.png` suffixes are first-viewport crops. Earlier files without `-final` are intermediate evidence and must not be used to judge the delivered version. Lighthouse JSON reports remain in `/private/tmp/edumindset-v2-*.json` on this machine.

## Limits and remaining work

The native Chrome tool opened the preview but returned grey images and omitted page content during this pass. Valid visual evidence came from Lighthouse captures, and interaction evidence from executing the actual application against JSDOM. This is not a claim of real-browser interaction testing or connected-phone coverage. A real-phone pass should still check Safari/Chrome keyboard, safe areas, scrolling and touch feedback.

The form opens a draft in the visitor's email app. No test sends mail and the site never claims delivery. Workshop details, public hosting/domain, absolute Open Graph image URL and approved final workshop video remain external follow-ups. No MINA rendering files or processes were changed.
