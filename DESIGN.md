# EDU MindSet visual system

Reading this as: a Romanian workshop landing page for curious young people and parents, with a candid, personal voice and the visual language of an open teaching studio.

## Direction contract
The user delegated design choice and asked us to begin development. Seven grounded directions were considered: teaching studio, student publication, public lecture poster, open laboratory notebook, conversation circle, education radio programme, and a workshop programme. Impeccable's degraded concept seed assigned candidate 4 (key 13dcf5db): **open laboratory notebook**. The roll service was unreachable and supplied no challengers or quality boards. The selected direction is translated into a legible contemporary page, with practical experiments, large questions, photographic evidence and clear topic exploration. No graph-paper costume or fabricated scientific data. Code-first implementation preserves real assets and uses no generated concept images; the user's remaining usage constraint and instruction to decide and build govern this run.

## First viewport
The original learning proposition is set at a human, readable scale beside a genuine photograph of Alexandru working with a microscope. The desktop layout has a narrow brand/navigation strip, an expressive but concise headline and immediate workshop action. The image shows actual teaching materials. A red underline emphasizes how one learns. No invented proof, luxury styling, floating badge or card shell.

## Signature interaction
“De unde vrei să începi?” is a set of four topic choices with a stable practical preview. Each choice connects a visitor's question with the corresponding workshop. It is navigation and a small learning moment, not a diagnostic quiz. Four workshop disclosures preserve complete programme details. Every interaction works by keyboard and touch.

## Tokens
- Font: self-hosted Manrope variable, Latin and Latin-ext; display 650–800, body 400–500.
- Light paper #f7f8f4, surface #ffffff, ink #20251f, secondary #555d53, rule #d5dbd1.
- Brand red #b7352c for accessible links/buttons, pale red #f4e7e1. Source JPEG red remains an asset colour.
- Dark equivalent under system preference, or an explicit choice stored as `edumindset-theme`: paper #1a201c, surface #222a24, ink #f0f3ec, secondary #bdc8b8, rule #465044, red #ff9282, pale red #352924. `color-scheme` follows the active theme so form controls match. CTA retains dark red background and white text. The header control is hidden without JavaScript; the system preference still applies.
- Spacing: 8px base, 24/32px groups, 80–120px sections, 24–64px page gutters, max width 1280px.
- Corners: photos 4px; controls and note panels 6px. No decorative shadows.
- Type: body 16–18px, comfortable 1.65 line-height, max 65ch; h1 max 76px, section heads 36–56px; tracking no tighter than -.04em.
- Layers: header 10, skip link 20. No other stacking context needed.

## Motion grammar
One modest hero entrance (12px, 480ms) introduces hierarchy. Topic switching acknowledges user choice with a 160ms fade/4px shift on pointer input only. Buttons press .98 over 140ms; links underline on hover. Native disclosure opens without animated height. Content visible by default; reduced-motion removes all displacement/smooth scrolling. No perpetual movement or scroll hijacking.

## Page path
Home proposition → four topic previews → founder → three principles and audience → complete workshop programme/Instagram QR → UnitED announcement → resource categories → contact and footer. Mission, vision, values and full story remain accessible through native disclosures. Vary broad statements, photos, open columns, agenda rows and a practical form within the same light/dark world.

## Content and truth
User copy is authoritative; archive at docs/CONTENT_RO.md. Dates, venues, prices, registration and resources remain forthcoming. Auditorium image is a portrait in that environment, not evidence of an existing UnitED event. Source black logo is preserved; masthead is an accessible text reconstruction retaining EDU and vertical MindSet. Form prepares an email in the visitor's mail app and says so; no fake sent state.
