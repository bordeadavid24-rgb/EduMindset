---
name: EDU MindSet
description: A red and charcoal learning publication with an illustrated route, source photography, and bounded decorative scroll depth.
colors:
  primary: "#e85448"
  primary-hover: "#ed6a60"
  primary-ink: "#171615"
  link-red: "#b3342a"
  brand-red: "#e85448"
  ink: "#242323"
  muted: "#615d5a"
  paper: "#f7f6f2"
  surface: "#fffefd"
  rule: "#d4cfcb"
  soft-field: "#efebe7"
  tint: "#f3e9e5"
  note-paper: "#f7eeeb"
  workshop-charcoal: "#252221"
  workshop-surface: "#302b29"
  workshop-ink: "#f8f4f0"
  workshop-muted: "#d3c9c1"
  workshop-rule: "#5b504b"
  workshop-accent: "#f18c7e"
  workshop-tint: "#352c29"
  dark-paper: "#1b1b1b"
  dark-surface: "#242323"
  dark-ink: "#f5f0eb"
  dark-muted: "#c9c1ba"
  dark-rule: "#55504d"
  dark-accent: "#f18c7e"
  dark-soft-field: "#2c2927"
  dark-tint: "#352a27"
  grid-ink: "#dcd8d1"
  paper-edge: "#c7bfb7"
  drawing-paper: "#fffdf7"
  tape: "#e1cbb5"
  dark-grid-ink: "#38332f"
  dark-paper-edge: "#665c54"
  dark-drawing-paper: "#2b2825"
  dark-tape: "#8f6850"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(58px, 6.1vw, 82px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(34px, 3.8vw, 54px)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "28px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  letter:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "14px"
    fontWeight: 650
  countdown-display:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(58px, 7.1vw, 96px)"
    fontWeight: 750
    lineHeight: 0.97
    letterSpacing: "-0.04em"
  countdown-number:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(60px, 8.4vw, 116px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
rounded:
  control: "3px"
spacing:
  field: "14px"
  group: "24px"
  mobile-section: "64px"
  desktop-section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.control}"
    padding: "16px 22px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
  recall-exercise:
    backgroundColor: "{colors.note-paper}"
    textColor: "{colors.ink}"
    padding: "28px 28px 30px 43px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px"
    height: "52px"
  countdown-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.control}"
    padding: "14px 20px"
  countdown-reflection-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "30px 32px 28px"
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "80px"
---

# Design System: EDU MindSet

## Overview

**Creative North Star: "A question becomes a working idea"**

The original red and charcoal identity frames a direct invitation from the founder, his supplied first-person account, and opportunities to try a learning method. Photographs change scale and role across the page: a large source-derived laboratory cutout, a compact eye-contact portrait beside an open letter, and contextual teaching and auditorium photographs.

V5 refines the notebook world into a more integrated learning composition: an original question-to-application diagram, a ruled study sheet behind the photograph, and visible native root-scroll depth. The photograph and decorative layers shift at different rates; headline, words, actions, map labels, and factual caption retain their normal document positions. New marks remain editorial artwork, never Alex's personal handwriting or classroom artifacts. No private personality claims, praise, signatures, or testimonials are added. Surface direction is in `docs/v5-direction.md`; source documentation here does not claim final motion or performance verification.

**Key Characteristics:**

- Red for identity and action; charcoal and warm neutrals for reading.
- A shared photographic opening with a circled word, larger three-node learning sketch, and study-sheet layers.
- An unboxed first-person letter with a smaller portrait.
- A worked-through programme containing an optional recall demonstration.
- Native disclosures, responsive reflow, and explicit interaction states.
- One coherent charcoal/red SVG line vocabulary and lightweight CSS materials.
- Root-scroll depth on the photograph and decorative layers, with still phone/reduced-motion fallbacks and static depth when unsupported.

The separate `countdown.html` preview extends this notebook world with a red outer cover, a punched paper opening, an inline clock, and a daily reflection sheet. It shares the accepted site's font, palette, source-derived Alex cutout, and original comic strokes. Its mock 25 November 2026, 00:00 Europe/Bucharest target remains explicitly unconfirmed; it does not replace `index.html` or establish an approved anniversary claim. This is a route-specific extension rather than a replacement identity.

## Colors

The palette follows the supplied logo's red and black relationship. Exact values are recorded in the frontmatter.

### Primary

- **Exact Logo Red:** primary button fills, the large hero word, its circle, and broad artwork use the pinned source red. Primary buttons use near-black text and a lighter red hover tint. The 12px vertical MindSet stays the darker same-hue red because the exact logo red fails small-text contrast.
- **Link Red:** small links and ordinary focus treatment retain the darker red in the same hue family. Local dark regions use a pale red for readable text.

### Secondary

- **Note Paper:** the light recall exercise field, retaining charcoal text even inside the dark programme.
- **Soft Field:** the UnitED background. **Tint** supplies a related neutral-red tone where needed.
- **Drawing Paper / Paper Edge / Grid Ink / Tape:** the light paper backings, subtle contours, squared ruling, and decorative tape. Dark-theme equivalents keep these treatments integrated with the page.

### Neutral

- **Paper / Surface:** page and contact backgrounds.
- **Charcoal / Quiet Stone / Fine Rule:** ordinary text, supporting text, and structural separators.
- **Workshop Charcoal:** a deliberate dark programme region with light text, warm secondary text, and a lighter red accent.
- **Dark Paper / Dark Surface:** system or selected dark theme with pale text and red emphasis. The workshop region and light exercise keep their own local palettes. Solid primary buttons retain exact logo red with near-black text. The charcoal recall variant retains white text.

**The Exact Red Rule.** Keep the pinned logo red on primary fills and the large hero emphasis. Use the darker same-hue red for small links and the small vertical wordmark. Do not substitute a different hue or reintroduce a blue/yellow identity.

On the countdown route, Exact Logo Red also fills the outer page field. Near-black header, invitation, and footer copy sits directly on that red; Paper and Surface carry the reading and reflection regions. The preview notice is near-black with light text. Small clock/date emphasis uses Link Red, switching to the established pale accent in dark paper regions. The outer red remains red in both themes. The exported Story keeps its light Drawing Paper and charcoal palette regardless of the current page theme.

## Typography

**Display Font:** Bricolage Grotesque Variable, falling back to sans-serif.

**Body Font:** the same local variable family, with automatic optical sizing and Romanian glyph coverage.

Weight, scale, and spacing distinguish roles without a second font download. Type remains direct and readable; the hand-drawn character lives in SVG strokes, not an additional handwriting font or luxury serif layer.

### Hierarchy

- **Display:** the hero's two-line proposition, with one red word circled by an SVG stroke. Desktop uses the frontmatter scale and weight; mobile returns to 650 weight with its own fluid size and narrow-screen override.
- **Headline:** section introductions. The UnitED name is deliberately much larger than ordinary section headings.
- **Title:** topic names, recall words, and short subsection headings. The leading learning principle is larger than its two related ideas.
- **Body:** general copy uses 16px, introductions usually 17px, and the desktop founder letter uses 18px with generous leading. The letter returns to 16px on mobile. Reading widths generally remain between 44ch and 67ch.
- **Label:** sentence-case navigation, fields, status notes, and captions. The header's vertical wordmark is 12px; the hero caption is 13px. Qualifications are compact factual text.

**The Readable Copy Rule.** Reflow prose on mobile rather than shrinking it to preserve a desktop composition.

### Countdown route hierarchy

The countdown display and numerals use the two additional frontmatter roles without changing the main page's type scale. At widths up to 1000px, the headline becomes `clamp(58px, 8vw, 80px)` and the timer `clamp(60px, 10vw, 96px)`. At 700px and below, the headline is `clamp(42px, 8.5vw, 60px)` with 1.02 leading, and numerals are `clamp(32px, 9vw, 56px)`. At narrow phone widths these clamps retain a 42px headline minimum and a 32px timer minimum. Numerals use tabular figures to avoid width changes on each tick. Unit labels are 12px with .05em tracking. The reflection heading is 27px desktop and 25px phone; phone explanatory prose is 14px, captions/metadata and plain controls 12px, primary controls 14px, and the textarea 16px. The short invitation measures follow their specific roles rather than a long-form reading width.

## Layout

The main container is capped at 1280px. Side gutters are 48px on desktop, 32px below 1100px, 20px on mobile, and 16px below 360px. Main section gaps are 104px on desktop and 64px on mobile.

The opening uses twelve columns and two rows. The title spans columns 1 to 8 on wide desktop, expanding through column 9 in the tablet adjustment, the personal copy occupies columns 1 to 5, and the photographic scene spans columns 6 to 12 across both rows. Controlled grid overlap gives the image and type shared space. Mobile becomes an explicit sequence: proposition, welcome, motivation, actions, photograph, learning map, then learning belief. The map has semantic ordered-list labels: Întreabă, Explorează, Aplică. The art is hidden from assistive technology, while these labels remain real text.

The founder region combines a portrait up to 300px wide with a wider open letter. On mobile the identity block uses a 120px photo-print column beside the name and qualifications, reducing to 98px on narrow phones. The programme has a larger Learning Skills column and a second column for the other topics and classroom context. Below 768px it becomes one stack; the secondary classroom photograph and QR are hidden, while text and the Instagram link remain available.

Principles form an asymmetric group: the leading learning idea spans two rows as a rotated squared-paper note with a book/bulb drawing; independent thinking uses an open underlined heading, while personal development has a tinted cut-paper field. Other reading regions use two columns where appropriate, with single-column mobile layouts. Navigation becomes a compact disclosure below 981px. Additional adjustments occur at 900px and 1100px.

On phones UnitED uses two rows: the wordmark first, then its subtitle beside an 80px dialogue drawing. The drawing is positioned by the grid rather than over the letters. Availability statuses follow their headings.

The sticky header is 80px on desktop and 68px on mobile. Safe-area padding protects the top and footer edges; anchor offsets account for the header. Images reserve their proportions, and the exercise reserves a minimum stage height. Text does not depend on fixed-height containers. Decorative overlaps and drawings have smaller mobile versions; the hero halftone disappears on mobile, and the programme sketch disappears below 360px. Illustration space is kept separate from the main reading and action regions.

### Countdown route composition

The preview container caps at 1248px with 48px side gutters, changes to 32px below 1000px, and to 16px at 700px. The header is a simple 94px row, becoming 72px on phones, without the main site's sticky navigation. The paper opening has a narrow 25px punched spine and `22px 58px 0 76px` padding; phone spine width is 17px and padding is `14px 22px 0 38px`, reducing again below 360px.

Desktop pairs a `1.2fr 1fr` title-and-photo composition with a four-column clock across the full paper width. The daily reflection sits below in an `.8fr 1.2fr` split with a 74px gap and 96px top separation. At 700px the cover becomes an explicit grid: title, timer, context beside a 112px founder image, invitation, then the lower rule and rehearsal action. The mobile timer directly follows the title. The small top motion-control row is hidden, and the founder's circular stamp is removed. Reflection becomes one column with 30px separation and 54px top margin; its paper is upright, and the main form/export buttons fill the available width. The preview notice is status information above the header, not an eyebrow above the title.

## Elevation & Depth

Most content remains flat. Photographic layering places the real hero subject above a ruled study sheet, irregular red paper plane, halftone patch, and original orbit stroke. The study sheet replaces the broad squared hero background and has a margin rule and a second lower paper edge. The caption is a stationary factual name-and-roles block rather than a rotated strip. The founder and other photo prints use light borders and modest rotation. The founder print has a small shadow (`2px 6px 14px rgb(30 20 10 / .08)`), while the recall note uses `2px 4px 10px rgb(0 0 0 / .1)`. These establish thin paper layers rather than floating app cards.

Squared-paper and dotted fields are CSS gradients. Tape strips and torn edges are CSS pseudo-elements and clipping contours. They are new digital treatments, never claimed as photographed personal materials.

The countdown route uses a broad paper shadow (`0 16px 45px #17161529`) and a lighter reflection-sheet shadow (`0 15px 35px #17161524`) against the red cover field. The reflection sheet tilts 1 degree on desktop and is flat on phones. A fine offset edge, CSS punched holes, squared paper, and a translucent tape strip supply the material cues. These are original digital page treatments. They introduce no raster texture or new source photograph.

## Shapes

The red plane, programme edges, and selected notes have short polygon contours suggesting cut paper. Tape strips cross a few print edges. Slight rotations vary by role, including the founder print, UnitED print, resource sheet, and principle notes. Controls keep their restrained corners and reading text stays clear.

Original SVG drawings use mostly unfilled paths with rounded caps and joins, a default stroke width of 2.4, and occasional red emphasis. The vocabulary includes books, a bulb, a pencil, a question bubble, an orbit/arrow, and dialogue marks. The larger hero map joins a question, exploration, and application through three related drawn nodes and red connectors, replacing the small isolated hero book. Interface icons remain Phosphor. Decorative drawing containers are hidden from assistive technology and are not controls.

## Components

### Buttons

Primary actions use exact logo red with near-black text, control corners, and a minimum 54px height. Fine-pointer hover uses the lighter pinned red tint. The recall action uses fixed charcoal with white text and a darker hover. Press feedback scales to .98 over 140ms. Keyboard focus is a visible 3px outline, using a locally legible red inside the programme and exercise.

### Cards / Containers

The programme remains a charcoal field with torn-paper boundaries and an original book sketch. Its recall region is a light notebook page with a margin line, punched-hole dots, a small shadow, and extra left padding. The resource index is a lightly rotated, bordered paper sheet with a decorative tape tab. Photo prints and principle notes have distinct treatments within the same palette rather than repeated generic cards.

### Inputs / Fields

Visible labels, paper-coloured fills, fine borders, control corners, and 16px input text. Inputs have a minimum 52px height; the message field can resize vertically. Native validity feedback uses Romanian messages. The form prepares an email draft and offers copying; it never confirms delivery.

### Navigation

The text wordmark keeps black/charcoal EDU and a darker same-hue vertical MindSet in the light theme. Desktop links have at least a 44px hit area. Compact navigation uses native `details` and `summary`, with vertically stacked links. Link selection closes the menu; Escape closes it and restores focus. Theme preference follows the system unless explicitly selected and stored locally.

### Founder Letter

A compact portrait in a taped photo-print treatment, full name, and grouped factual qualifications establish authorship. A small original pencil drawing sits above the letter rule. The supplied first-person text has a greeting, a short enlarged quotation, an optional longer story, and a plain-text signoff. There is no invented signature or additional praise.

### Programme and Recall Exercise

Learning Skills is initially open and contains the optional read, recall, and reveal activity. The other three workshop directions remain easy to scan and expand. Opening turns the plus into a close cue. Deep links to a workshop or its contained exercise open the relevant disclosure.

A real ordered list shows the three stages: Citești, Îți amintești, Verifici. JavaScript moves `aria-current="step"` and the visual current-state border as the activity changes or resets. The exercise hides three words on request, invites retrieval, then reveals them with a plain explanation of reamintire activă. It has an explicit reset and no timer, scoring, diagnosis, or required personal input. Static HTML includes a manual no-JavaScript alternative. Longer project and UnitED material uses related native disclosures.

### Hero Illustration and Motion

The hero learning map combines an original three-node SVG with a semantic ordered list. The headline, body, buttons, map labels, and factual name stay in normal document flow. The photograph moves with the scroll, as the near layer.

On desktop with no reduced-motion preference, the circled word draws once over 1.8s. The learning sketch then draws from the question to the application, and the orbit route draws around the photograph over 2.8s. These are linear pen strokes. While the page is still, the question bubble, route, red paper, study sheet, and halftone keep a slow drift of roughly 12 to 26px. The drift uses the `translate` property, so it does not fight the scroll transform. Reading text and buttons do not drift.

A feature-checked root scroll timeline maps that same desktop range from `0vh` to `160vh`, with linear progress. The movement therefore starts at the first scroll and is still going after the hero has begun to leave:

- Photograph: 0 to -130px.
- Study sheet: 0 to 42px, rotation 3 to 1.5 degrees.
- Red paper: 0 to 36px, rotation -4 to -2.5 degrees. It stays behind the name.
- Orbit route: 0 to -210px, rotation 0 to -7 degrees.
- Question bubble: 0 to -120px, rotation 5 to 1 degrees.
- Halftone: 0 to -80px.

The hero caption includes a native stop/start button for desktop users without a reduced-motion preference. `src/motion.js` controls it for the current page session. Manual stop removes all hero animations, including scroll depth, and leaves pen paths complete. Time-based pen entrances and decorative drift pause while the hero is offscreen, using IntersectionObserver where available, or while the document is hidden. This suspension does not replace the separate scroll timeline. The control is hidden on phones and when reduced motion is requested.

The hero clips decorative overflow. There is no pinning, scroll interception, JavaScript scroll listener, or runtime animation library. Under 768px or with reduced motion, the drawing and layers are complete and still. Without supported scroll timelines, scroll depth is absent, but the eligible desktop pen entrance and idle drift still play. Reduced motion also removes smooth scrolling. This describes source behavior as reviewed on 12 November 2026; current checks and their limits belong in `docs/verification-current.md`. This source record does not itself claim a browser pass.

### Countdown Clock and Rehearsal

Four equal inline columns use thin vertical rules rather than separate cards. A red oval annotates the seconds numeral and must clear its unit label. The visible clock has `role="timer"` with live announcements off; its accessible label is updated with all four units. Values are calculated from the fixed ISO timestamp and clamp at zero. The clock yields to a clearly labelled preview launch state at expiry or through the reversible rehearsal button; that state links to the accepted full site. There is no automatic redirect or registration action. Without JavaScript, the explicit demonstrative date and script explanation remain visible.

### Countdown Reflection and Story Image

The taped paper sheet has date/effort metadata, one question, a hint, a visible textarea label, a 160-codepoint counter, and a clear local-only explanation. Seven prompts rotate by calendar day in Europe/Bucharest; copy promises a daily question without claiming an unlimited sequence of new questions. An in-progress answer keeps its original question across midnight. Whitespace is normalised, empty answers receive Romanian native validation, and text is inserted with `textContent` or drawn as canvas text. Answers remain in page memory and are not submitted or persisted.

Submission reveals a result and moves focus to download. The actual locally generated 1080 × 1920 PNG becomes a data-URL image preview; while preparing it, or if conversion fails, an unclipped HTML text fallback remains available. The image uses notebook ruling, the question, adaptive answer type, the existing wordmark text and Instagram name. Its displayed image preserves the exported proportion. Editing restores the form and focuses the answer. Export disables both actions while preparing the file and reports completion/failure through a status region. Native file sharing is offered where the API is available; unsupported sharing or other sharing errors fall back to downloading the PNG. Cancelling native Share leaves the result available without triggering a download. Neither action posts to Instagram, uploads text, or confirms publication.

### Countdown Motion

Above 700px with no reduced-motion preference, the title underline draws once over 1.2s, the collage route over 1.8s, and the chapter stamp settles over 800ms. Entering the rehearsal state has a 500ms page-opening treatment. When native scroll timelines are supported, `scroll(root block)` from 0 to 110vh moves the squared-paper backing down 50px while rotating it from 5 to 9 degrees, and moves the decorative doodle up 65px. The founder photograph, reading text, clock and controls stay in normal flow. There is no idle-drift loop on this route.

The desktop stop/start control disables route animations for the current page session and leaves finished strokes. Phones show the still composition. Reduced motion also removes transitions and smooth scrolling. Hidden tabs pause CSS animations and cancel scheduled ticks; returning recomputes the remaining time from the clock. These source behaviors do not establish physical-phone, native Share, performance, assistive-technology or dynamic scroll verification. Current review evidence, capture timing and verification limits belong in `docs/countdown-review.md`.

## Do's and Don'ts

### Do:

- **Do** preserve Romanian diacritics, the founder's full name, supplied first-person words, and content archive.
- **Do** preserve exact source red on primary fills and the large hero emphasis, with near-black primary button text and darker same-hue small links and wordmark.
- **Do** use the same original pen-line grammar and keep paper decoration subordinate to content.
- **Do** identify marks and paper treatments as new editorial artwork rather than personal artifacts.
- **Do** keep responsive image variants, crops, dimensions, and preloads aligned with the actual layout.
- **Do** retain keyboard access, visible focus, reduced-motion support, and HTML fallbacks.
- **Do** keep the headline, buttons, labels, and caption still. Let the photograph and the paper planes move apart.
- **Do** label forthcoming material honestly and explain the email handoff.
- **Do** keep the countdown preview visibly provisional, its timer directly below the phone title, its seconds annotation clear of the label, and its result preview tied to the actual PNG.

### Don't:

- **Don't** publish private character descriptions, inferred personal claims, or invented praise.
- **Don't** reintroduce V2's blue/yellow/orange palette or generic photo-card rhythm.
- **Don't** copy reference artwork, fabricate handwriting or signatures, or claim the drawings belong to Alex.
- **Don't** add a font, raster texture, or drawing library. A loop stays on decorative paper, never on the headline, buttons, or caption.
- **Don't** use em dashes in new visible copy or supporting guidance.
- **Don't** invent dates, prices, testimonials, affiliations, attendance figures, registration availability, or downloadable resources.
- **Don't** imply that the auditorium photograph records a previous UnitED edition or that the AI-assisted cutout is untouched photography.
- **Don't** turn the countdown's red cover, timer columns or larger numerals into global replacements for the main site's composition.
- **Don't** publish or register a domain from the local-preview brief. Alex's date/hour and `.ro` price agreement remain separate inputs.
