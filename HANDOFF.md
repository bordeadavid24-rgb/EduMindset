# EDU MindSet — live work log and handoff

Updated: 2026-11-08, review checkpoint. Project root: `/Users/lilianab/Desktop/MINA TLC/edumindset`.

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

## Design direction under development
Real educational journal / open studio: clear large sans typography, red from existing logo, pale paper, genuine photographs and useful learning interactions. Avoid luxury serif, dashboard cards, invented statistics/testimonials, vague decorative motion. Three pillars and four workshop directions preserve brief meaning. All dates stay forthcoming.

## Next
1. Confirm a public host and turn the Open Graph image into an absolute URL for that origin.
2. Add real workshop dates, place, price and registration only when the user supplies them. Add the finished workshop film only after rendering is approved.
3. Replace the mailto handoff only if a real delivery service and a revised privacy note are requested.

## Implementation now present
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

## Validation / delivery
Reviewed in headless Chrome on 8 November 2026 against `http://127.0.0.1:5173/` and the production preview `http://127.0.0.1:4174/`.

- `npm run build` succeeded with Vite 8.3.6. `npm audit` reported 0 vulnerabilities.
- Desktop 1440 and widths 1280, 1100, 980, 860, 768, 767, 390 and 320: no document or header overflow.
- Topic buttons update the preview, `aria-pressed` and the workshop link. `#learning` opens that disclosure. Mobile menu opens, Escape closes it and returns focus, and a link closes it.
- Theme follows the system, and the header control stores `light` or `dark` in `localStorage`. `color-scheme` matches. Skip link stays off-screen until focused.
- Empty submit shows “Completează acest câmp pentru a pregăti mesajul.” An invalid email shows “Introdu o adresă de email validă.” A 1700-character message does not navigate away; it asks the visitor to copy it. Copy reports success. No “message sent” state.
- Supplied photos and QR load. Content checklist in `docs/content-coverage.md` is checked, including text inside closed disclosures. No museum affiliation, prices, dates or testimonials were added.
- Lighthouse 13.6.0 on the production preview, headless Chrome, desktop, `--throttling-method=provided`: performance 100, accessibility 100, best-practices 100, SEO 100. This is an unthrottled local run. It still notes that the hero WebP is somewhat larger than its displayed size and that the stylesheet blocks first render.
- Pushed to `main` on https://github.com/bordeadavid24-rgb/EduMindset (`11fc6bd`, on top of the initial README commit). No deployment. No video files touched.
