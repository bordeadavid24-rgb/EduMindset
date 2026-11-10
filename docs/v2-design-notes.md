# V2 design notes

Research only, 9 November 2026. Reviewed current index.html, src/style.css, src/main.js, DESIGN.md, desktop-light-hero.png, the mobile review capture, and a middle-page desktop capture. No app edits.

## Why V1 still reads as a template

V1 is legible and the photographs are relevant, but the composition repeatedly gives us a large sans heading, a small grey paragraph, and a thin rule. The photos remain adjacent rectangular illustrations rather than participating in the visual idea. There is little difference in emphasis between the personal story, a workshop opportunity, and abstract values. On mobile the page becomes a very long prospectus before the visitor reaches the workshop programme. Recolouring those components would preserve the underlying problem.

## Three changes that go beyond recolour

### 1. Turn the hero into one shared learning scene

Use Alex with the microscope as part of the same composition as the headline, rather than placing a complete photograph in a second column. A carefully extracted real Alex plus microscope can sit across the boundary between the main field and a short pale-yellow teaching note. Keep the apparatus, gloved hand, and enough real work surface to give the image a believable anchor. Avoid a floating head, thick sticker outline, fake shadow, or invented laboratory details.

Set the headline as two distinct reading beats: the existing proposition first, then a larger, more immediate “Contează cum înveți.” The visual emphasis should land on “cum”, not make the entire sentence another accent-coloured block. One small annotation can point to a real action in the image, using the original “Înveți mai bine atunci când experimentezi.” No clusters of arbitrary stars, arrows, rulers, or doodles.

Name the techniques when reporting the work: **subject extraction** isolates the real photographic subject; **layered composition** lets image and typography share space; **art direction** means intentionally changing the image crop and placement for each screen size. These are useful explanations, not user-facing jargon.

Mobile: compose a new vertical scene, not the desktop layout scaled down. Header about 64px, headline about 40–46px at 390px, short 16px introduction, clear CTA, then a 240–300px subject area with face and microscope both readable. Image must not cover copy or make the CTA disappear below a huge blank hero. Keep source attribution and alt text meaningful; a transparent image still needs explicit width/height.

### 2. Demonstrate learning instead of asking visitors to choose a marketing category

Replace the 2x2 selector and pale preview panel with one optional **active recall** micro-exercise. Show three short ideas from the actual project, invite the reader to hide them and try to recall them, then allow reveal and self-check. Example ideas: înțelege informația; pune întrebări; aplică ce ai învățat. The meaningful interaction is hiding/retrieving/revealing, not a carousel of advice.

Plain Romanian explanation beside it: “Reamintire activă înseamnă să încerci să aduci o idee din memorie, înainte să verifici materialul.” Explain that this is an example of something they might explore in a workshop. Do not promise a score, memorisation gain, diagnosis, or exact scientifically optimal duration. Let the visitor skip it; use no forced countdown, sound, leaderboard, or email gate.

Two or three states only: read, recall, compare. Stable region height; one main button per state; separate reset link. Keyboard operation and readable status text. Preserve a usable static explanation without JavaScript. Do not auto-focus unexpectedly or announce the entire exercise repeatedly through aria-live.

If other techniques are named later, define them immediately: **spaced practice** revisits material across separate study sessions; **elaboration** connects a new idea to what one already knows; **self-explanation** explains in one's own words how or why something works. A name alone gives beginners little value. No empirical strength-of-effect claims are needed on this page.

### 3. Restructure the path around an invitation, an experience, and a person

New order: shared-scene hero, tiny exercise, upcoming workshops and four-topic agenda, Alex's personal note, concise project principles/audiences, UnitED, resources, contact. The action should arrive before several screens of institutional explanation.

The workshop area can be a compact programme with four clearly numbered entries. Keep the full supplied bullets in disclosures, but distinguish each entry through its number, useful subtitle, and one concrete takeaway. Avoid four identical rounded cards. Show the honest upcoming status and Instagram action directly with the agenda, so the reader understands why there is no registration form yet.

Integrate the formal portrait into the founder's note: a generous inset at the upper right of the first-person introduction on desktop, or a smaller portrait next to the name and qualifications on mobile. The note should read as Alex speaking, not as a second generic photo-and-copy hero. Keep his long story available in a disclosure. Use the auditorium image as a wide human context inside UnitED's announcement; do not imply it depicts a past UnitED edition.

## Educational colour system

The user's request for a creative educational palette supersedes V1's one-accent restraint. Cobalt, pale yellow, and orange can be coherent if they have distinct roles:

- Cobalt #2449DB: main identity, strong display emphasis, primary action, navigation selection. White on cobalt is readable at ordinary text sizes.
- Pale yellow #FFF3A8: highlighted idea or exercise surface. Use dark text on it, not white.
- Orange #F2743A: small prompts, steps, and physical markers. Use dark text when the orange is a filled surface. Do not use orange as body text on white.
- Ink #172445 and light base #F9FAF2: keep long Romanian content readable.

Use the colours consistently across the whole page. Do not assign every section a different new colour or make an automatic dark theme undo the intended educational identity. A manual dark variant needs its own considered tokens rather than a global inversion. The existing logo red may remain in the source mark, but should not silently become a fourth competing UI accent.

## Mobile and speed priorities

1. Inspect 390px and 320px at real size, not just a very tall compressed full-page screenshot. Check headline, face, microscope, and CTA within the first two screens.
2. Keep normal body text at least 16px. V1's 12–14px content and repeated two-column mini text blocks become tiring on a phone. Stack principles or use one concise sentence per principle.
3. Target 44px touch controls, 16–20px gutters, no overlap, no horizontal scrolling, explicit single-column form. Workshop summaries must wrap without pushing the disclosure icon off-screen.
4. Use one optimised hero image and responsive sources. A cutout can be much larger than an opaque WebP, so measure the actual file and serve a smaller mobile version. Keep the current photo as a fallback if extraction quality or byte size is poor.
5. Only preload the final hero asset. Lazy-load founder and auditorium images. Preserve explicit dimensions and avoid preloading the old image after switching to a new one.
6. Keep vanilla interaction code and CSS transitions. No animation framework is needed for this plan. Avoid decorative textures, video backgrounds, and scroll machinery. Motion should confirm state changes, with reduced-motion support.
7. Explain form mailto behavior honestly and retain its copy fallback. Do not add loading states to an action that only opens a local email app.

## Copy constraint

No em dashes anywhere in visible copy, metadata, alt text, generated state strings, or final explanation. Use periods, commas, or colons. Keep the full name Alexandru-Constantin Tulică and Romanian diacritics. Do not invent workshop dates, prices, attendance figures, testimonials, or resource availability.

## Bounded verification

One batched desktop/mobile inspection should check the shared hero scene, exercise states, agenda, portrait-note integration, and contact. Fix observed issues together, then confirm once. The test for V2 is whether those compositions visibly changed and the visitor can experience a piece of learning, not whether the colour tokens changed.
