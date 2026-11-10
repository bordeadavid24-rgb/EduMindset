# EDU MindSet - live work log and handoff

Updated: 2026-11-10, V4 delivery checkpoint. Project root: `/Users/lilianab/Desktop/MINA TLC/edumindset`.

## Current V4 work

User asks for a more high-school notebook/comic/collage direction, research then implement for their reaction. Logo red/charcoal, actual photographs and truthful personal content remain. Primary research: docs/v4-research-notes.md. Direction: docs/v4-direction.md.

- Implemented original SVG book/bulb/pencil/dialogue/question illustrations, circled headline, notebook and halftone photographic collage, paper prints/tape, varied principle groupings, and semantic three-stage recall with aria-current following real activity state. No new raster/font/dependency or external runtime request.
- Four test groups and production build pass. Added current-step/read/recall/reveal/reset assertions. Named-technique guide, DESIGN.md, sidecar, provenance, README and Grok prompt reflect V4.
- Initial local performance72desktop/94mobile; confirmation100/99, LCP0.4s/2.0s, TBT0/40ms, CLS.001/0. Both sets and uncertainty are preserved in docs/verification-v4.md. Do not claim the async decode hint alone caused improvement.
- Fresh reviewer first required recapture: the320px screenshot stopped before contact/footer. Replacement320width/tallviewport includes complete contact/footer, with ordinary-height opening evidence retained. Also moved truthful status labels below headings and fixed a narrow UnitED title/doodle collision with a two-row grid. All six final screenshots refreshed. Final independent disposition: ship, no remaining material fixes, all six current captures include the footer. Report: docs/finish-review-v4.md.
- No native browser/physical-phone session claimed; browser access host remains unavailable. No MINA render interference, deployment, invented details or private personality claims. V4 source/design/tests/docs committed as fbc3147. GitHub push failed DNS again (Could not resolve host: github.com); work is local, not confirmed pushed or deployed. Verified offline history bundle: /Users/lilianab/Desktop/MINA TLC/EDUMINDSET-V4.bundle. Next: user visual reaction; synchronize safely when network returns.

## Previous V3 work
User says V2 still feels too simplistic and wants more personal design, with the logo's original red/black colourway. New private context about Alex must guide presentation only and must not appear as personality claims/praise on the website. User explicitly asks again for Emil Kowalski, Impeccable and taste guidance. This is an authorized redesign pass.

Direction: a personal teaching space, original first-person welcome and supplied photographs, a two-row editorial opening, an open-letter founder area, and a workshop programme with the active-recall method integrated into Learning Skills. See docs/v3-direction.md and docs/v3-design-notes.md. No new factual claims or fabricated personal artifacts. V2 is the preserved historical baseline; V3 is complete locally and ready for user review.

Implemented: red/charcoal identity, two-row photographic opening, supplied first-person welcome, open founder letter with portrait inset, full charcoal workshop programme with recall integrated into Learning Skills, unboxed resources and asymmetric principles. No new generated assets or dependencies. All four test groups and production build pass. Added nested exercise deep-link and ARIA label integrity coverage. Initial 1440/390 and confirmation 320/820 captures look coherent. Lighthouse desktop performance100/mobile99, accessibility100, CLS0. Confirmed dark390/wide1920 too. Fresh independent reviewer disposition: ship, no material fixes. DESIGN.md, .impeccable/design.json, named-techniques guide and README now reflect V3. Full evidence: docs/verification-v3.md and docs/finish-review-v3.md. Source/design/tests/docs committed as 35662b0. GitHub push attempted and failed DNS: Could not resolve host: github.com. V3 is local, not confirmed pushed or deployed. Offline bundle path: /Users/lilianab/Desktop/MINA TLC/EDUMINDSET-V3.bundle. Stop further cosmetic iteration pending user feedback. Browser access host unavailable; no native UI or physical-phone testing claimed.

## V3 delivery summary

- Restored source-logo artwork red #e85448 with accessible action red #b3342a and charcoal. Removed V2 blue/yellow/orange identity.
- Added original first-person welcome and a twelve-column, two-row photographic opening, separate mobile reading order, open-letter founder layout, and personal portrait inset.
- Integrated the actual recall exercise into the full charcoal workshop programme. All sixteen original topic bullets, source biography, forthcoming statuses and honest contact behavior remain.
- No new generated photographs, dependencies, invented personal artifacts or private personality descriptions were published. Existing cutout provenance remains explicit.
- All tests/build pass, local desktop performance100/mobile99, accessibility100 across captures, CLS0. No public deployment or physical-phone test claimed.
- Named techniques: docs/DESIGN_TECHNIQUES.md. Continuation: GROK_PROMPT.md. Stop cosmetic iteration after delivery until user feedback.

## Previous V2 delivery
V2 is implemented, built, tested and independently reviewed, ready for the user's visual reaction. User explicitly asked for more creative educational personality, revised palette, integrated Alex photography, excellent mobile/loading, no em dashes, and names/explanations of techniques.

- Ink blue, pale yellow and selective orange replace V1 red/grey. One self-hosted Bricolage Grotesque variable family handles display/body with optical sizing. Manrope was removed from V2.
- Hero integrates an AI-assisted source-derived alpha cutout of Alex and the microscope with a real tabletop base. Source PNG and exact built-in image-tool prompt are in `assets/derived/`; user source is unchanged. Responsive AVIF/WebP widths 360/640/960/1200 are generated by `npm run assets:v2`. Mobile uses WebP; desktop prefers AVIF. The source PNG is outside public/ and not loaded by the page.
- Read/hide/recall/reveal exercise demonstrates active recall without a timer, score, diagnosis or typed answer. Complete workshop agenda now follows it, ahead of the longer biography and mission. Romanian purposes lead; English titles and all 16 workshop topics remain.
- Portrait is integrated with Alex's first-person quotation in a blue field; auditorium photo carries the UnitED dialogue composition without implying a past UnitED event.
- Mobile layouts/crops, >=44px controls, 16px inputs, hover capability gating, safe-area padding, reduced motion, theme-aware browser chrome and reserved image dimensions are implemented. Desktop shows QR; phone keeps direct Instagram link.
- `npm test`: four passing tests covering recall/focus, menu Escape, workshop links, theme, form validation/long-message fallback, unique IDs, destinations, assets and no em dashes. `npm run build` passes. `git diff --check` passes.
- Six final captures reviewed: light 320/390/820/1440/1920 and dark390, automated accessibility100 throughout. Fresh reviewer disposition: **ship for user review**, no required material visual fixes. Report: `docs/finish-review-v2.md`.
- Last complete performance runs: desktop100 with LCP0.5s/TBT0/CLS0; simulated mobile89 with LCP1.9s/TBT430ms/CLS0. Host load caused variation. Do not describe mobile as perfect or claim physical-phone testing. Exact evidence/limits in `docs/verification-v2.md`.
- A content-visibility experiment was removed because provisional geometry truncated captures. Final sections render normally; do not reintroduce it merely to chase a score.
- Final design tokens and components: DESIGN.md and `.impeccable/design.json` (force-add this single sidecar because .impeccable/ is otherwise ignored). Learning guide: `docs/DESIGN_TECHNIQUES.md`. Continuation prompt: `GROK_PROMPT.md`. Raster provenance is recorded in asset metadata/JSON sidecars and docs/assets.md.
- No MINA render or video files/processes were changed. No deployment or event details invented. Mailto remains transparent.

### Repository and preview
Remote: https://github.com/bordeadavid24-rgb/EduMindset. V1 baseline `b7a7e04` / source `11fc6bd` was pushed previously. V2 source is being committed locally now; terminal DNS to GitHub is unavailable, so a push must be verified rather than assumed. Use `git log -1` for the exact latest commit; final synchronization note below records the observed result.

Local production preview command: `npm run preview -- --port 4175`. Open http://127.0.0.1:4175/?theme=light or `?theme=dark`; reuse a running server rather than starting duplicates. Native Chrome navigation worked but the tool returned grey captures during this pass. Valid visual evidence came from Lighthouse, with actual-script DOM tests through JSDOM; no real-browser interaction or connected-phone claim.

### Next
1. Present V2 to the user and get their actual visual reaction before another redesign.
2. Finish GitHub synchronization if terminal networking is still blocked. Do not force-push over unknown remote changes.
3. Physical-phone check for Safari/Chrome keyboard, touch, safe areas and scrolling.
4. Confirm public hosting/domain and absolute Open Graph image URL; add real workshop details/registration and approved video only when supplied.
5. Direct form delivery only if a real service is requested/configured, with an updated privacy explanation.

## Assignment
Build a distinctive Romanian landing page for EDU MindSet, founded by Alexandru-Constantin Tulică. Use user's supplied content, recent WhatsApp photos/logo/QR. Use Emil Kowalski, Impeccable, design-taste and multiple research agents. Set up user's GitHub repo from Chrome. Keep ongoing MINA TLC render untouched; film will eventually support an EDU MindSet workshop, not MINA museum. Track every meaningful step here and leave a Grok handoff prompt.

## Completed
- Inspected workspace: parent is NOT a Git repository; all existing subdirectories are video projects. Created isolated `edumindset/`.
- Read requested design skills and Sites workflow. User delegates design decisions; no need to turn this into an approval tournament.
- Started two agents: personality_research and design_direction. Their reports go in `docs/`.
- Located FIVE Nov 8 WhatsApp assets (user said four): 19.34.13.jpeg (microscope/classroom), -2.jpeg (auditorium), -3.jpeg (library portrait), -4.jpeg (logo, mostly black), 19.36.37.jpeg (Instagram QR).
- Verified founder roles via university-hosted CV. Instagram feed could not be fetched; no assumed post aesthetics.
- GitHub repository `bordeadavid24-rgb/EduMindset` was created during the Codex session. Source is on `main` at https://github.com/bordeadavid24-rgb/EduMindset. The placeholder README was replaced by the project README.
- Wrote PRODUCT.md from the explicit brief. README, Node `.gitignore` and the page are in place. No project-wide licence was added.

## Historical V1 design direction
Real educational journal / open studio: clear large sans typography, red from existing logo, pale paper, genuine photographs and useful learning interactions. Avoid luxury serif, dashboard cards, invented statistics/testimonials, vague decorative motion. Three pillars and four workshop directions preserve brief meaning. All dates stay forthcoming.

## Later launch follow-ups recorded during V1
1. Confirm a public host and turn the Open Graph image into an absolute URL for that origin.
2. Add real workshop dates, place, price and registration only when the user supplies them. Add the finished workshop film only after rendering is approved.
3. Replace the mailto handoff only if a real delivery service and a revised privacy note are requested.

## Historical V1 implementation
- `index.html`: complete single page, six required areas, expanded founder story, mission/vision/values, three principles, four audiences, community, 16 workshop bullets, Instagram QR, UnitED programme, resource list, labelled form/footer.
- `src/style.css`: responsive teaching-studio / open laboratory notebook direction, Manrope, dark-red accent, system and explicit light/dark themes, mobile layout and menu, reduced motion.
- `src/main.js`: four practical topic previews, selected state, deep links opening native workshop disclosures, mobile menu Escape/link closing, stored light/dark choice, mailto form with encoded fields, copy fallback and a length guard. No fake delivery claim or backend.
- `scripts/prepare-assets.mjs`: prepared 640/1200 WebP variants from the THREE supplied photos; original logo and QR preserved in public/images. Source images untouched.
- `docs/personality-research.md`, `docs/design-research.md`, full `docs/CONTENT_RO.md`, and `docs/content-coverage.md` completed by two agents.
- `DESIGN.md`: current direction contract, tokens, layout, motion and truth rules. Impeccable concept seed 13dcf5db assigned fourth grounded direction; degraded due inaccessible roll service (no challengers/boards). User delegated direction, so no approval tournament.
- Dependencies: Vite 8.3.6, Sharp, Fontsource Manrope, `@phosphor-icons/core` (six MIT SVGs copied into `src/icons/`) and Lighthouse for local QA. `npm audit` on 8 November 2026 reported 0 vulnerabilities.
- Image metadata: lab 1200x1329, portrait 1200x896, auditorium 848x1262, QR 1080x1534. Source dimensions/alt text should remain accurate.

## Guardrails for next agent
- Do not stop or modify video rendering, MINA files or unrelated projects.
- Do not claim registration open or fabricate time/place/price/availability, resource articles or testimonials.
- Do not claim form delivers mail without a real backend. Use transparent mailto fallback until configured.
- Existing black logo JPEG is not a usable complete dark wordmark; preserve source and create accessible typographic brand treatment if needed.
- University research includes a GrowMindSet workshop on 4 May 2026 marked finished; never present as upcoming.
- No credentials in tracked files. Do not spend entire task on skill approval flows; user explicitly authorized design decisions and development.

## Research sources
- Instagram: https://www.instagram.com/edu.mind.set/ (not readable during initial lookup)
- Current university CV: https://dpm.unitbv.ro/images/programe-studii/CV-uri/CV_-_personal_didactic_OPTO_2.pdf

## Historical V1 validation / delivery
Reviewed in headless Chrome on 8 November 2026 against `http://127.0.0.1:5173/` and the production preview `http://127.0.0.1:4174/`.

- `npm run build` succeeded with Vite 8.3.6. `npm audit` reported 0 vulnerabilities.
- Desktop 1440 and widths 1280, 1100, 980, 860, 768, 767, 390 and 320: no document or header overflow.
- Topic buttons update the preview, `aria-pressed` and the workshop link. `#learning` opens that disclosure. Mobile menu opens, Escape closes it and returns focus, and a link closes it.
- Theme follows the system, and the header control stores `light` or `dark` in `localStorage`. `color-scheme` matches. Skip link stays off-screen until focused.
- Empty submit shows “Completează acest câmp pentru a pregăti mesajul.” An invalid email shows “Introdu o adresă de email validă.” A 1700-character message does not navigate away; it asks the visitor to copy it. Copy reports success. No “message sent” state.
- Supplied photos and QR load. Content checklist in `docs/content-coverage.md` is checked, including text inside closed disclosures. No museum affiliation, prices, dates or testimonials were added.
- Lighthouse 13.6.0 on the production preview, headless Chrome, desktop, `--throttling-method=provided`: performance 100, accessibility 100, best-practices 100, SEO 100. This is an unthrottled local run. It still notes that the hero WebP is somewhat larger than its displayed size and that the stylesheet blocks first render.
- Pushed to `main` on https://github.com/bordeadavid24-rgb/EduMindset (`11fc6bd`, on top of the initial README commit). No deployment. No video files touched.

## Final synchronization note, 10 November 2026

- Primary V2 source/design/tests/docs commit: `3a20dfc` (`Rework EDU MindSet around active learning and integrated photography`).
- `git push origin main` was attempted and failed: `Could not resolve host: github.com`. V2 is NOT confirmed pushed; do not assume the GitHub website has this version. The final status-documentation commit is also local.
- Production preview at http://127.0.0.1:4175/?theme=light returned HTTP 200. Existing server PID18030 is bound to 127.0.0.1:4175; it was reused rather than stopped. If it no longer runs, use `npm run preview -- --port 4175`.
- Offline repository bundle: `/Users/lilianab/Desktop/MINA TLC/EDUMINDSET-V2.bundle`, containing current local history. Use `git bundle verify` before importing. The normal working checkout remains the primary handoff.
- `GROK_PROMPT.md` and `docs/DESIGN_TECHNIQUES.md` are current. Fresh reviewer says ship for user review. No further unsolicited cosmetic iteration is pending.
- Next synchronization action when networking works: fetch origin, inspect divergence, integrate any real remote changes, then push main. Never force-push over unknown work.

## Latest V3 synchronization note

- Primary V3 commit: 35662b0. Follow-up status commit records this handoff.
- GitHub push failed DNS on 10 November 2026. V2 and V3 remain unconfirmed upstream. No public deployment was performed.
- Current local preview: http://127.0.0.1:4175/?theme=light (HTTP200); dark via ?theme=dark.
- Complete offline history is saved in /Users/lilianab/Desktop/MINA TLC/EDUMINDSET-V3.bundle; use git bundle verify before importing.
- Next action is user/Alex visual feedback. For synchronization when network works: fetch origin, inspect divergence, integrate any real remote changes, then push main. Never force-push unknown work. Launch follow-ups: final host/absolute social image URL, supplied event details and booking, approved video, optional real form delivery.

## Latest V4 synchronization note

- Primary V4 commit fbc3147; follow-up status commit records this outcome. Working checkout is the primary handoff.
- git push origin main failed DNS on 10 November 2026. No V2/V3/V4 upstream synchronization or public deployment is confirmed.
- Complete offline bundle: /Users/lilianab/Desktop/MINA TLC/EDUMINDSET-V4.bundle. Verify before import. V2/V3 bundles remain preserved.
- Local preview http://127.0.0.1:4175/?theme=light returned HTTP200 after final build. Use ?theme=dark for the alternate theme.
- Final independent review: ship for local user reaction. All tests/build pass. No remaining material fix is assigned. Keep physical-phone testing and launch/event/video/form-service follow-ups visible.
- When network works: fetch, inspect divergence, integrate real remote changes, then push. Never force-push unknown changes.
