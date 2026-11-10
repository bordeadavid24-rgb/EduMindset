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
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "80px"
---

# Design System: EDU MindSet

## Overview

**Creative North Star: "A question becomes a working idea"**

The original red and charcoal identity frames a direct invitation from the founder, his supplied first-person account, and opportunities to try a learning method. Photographs change scale and role across the page: a large source-derived laboratory cutout, a compact eye-contact portrait beside an open letter, and contextual teaching and auditorium photographs.

V5 refines the notebook world into a more integrated learning composition: an original question-to-application diagram, a ruled study sheet behind the photograph, and small differences in decorative scroll depth. The real subject, words, actions, and factual caption stay stationary within the document. New marks remain editorial artwork, never Alex's personal handwriting or classroom artifacts. No private personality claims, praise, signatures, or testimonials are added. Surface direction is in `docs/v5-direction.md`; source documentation here does not claim final motion or performance verification.

**Key Characteristics:**

- Red for identity and action; charcoal and warm neutrals for reading.
- A shared photographic opening with a circled word, larger three-node learning sketch, and study-sheet layers.
- An unboxed first-person letter with a smaller portrait.
- A worked-through programme containing an optional recall demonstration.
- Native disclosures, responsive reflow, and explicit interaction states.
- One coherent charcoal/red SVG line vocabulary and lightweight CSS materials.
- Native view-timeline depth confined to four decorative layers, with complete static fallbacks.

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

## Layout

The main container is capped at 1280px. Side gutters are 48px on desktop, 32px below 1100px, 20px on mobile, and 16px below 360px. Main section gaps are 104px on desktop and 64px on mobile.

The opening uses twelve columns and two rows. The title spans columns 1 to 8 on wide desktop, expanding through column 9 in the tablet adjustment, the personal copy occupies columns 1 to 5, and the photographic scene spans columns 6 to 12 across both rows. Controlled grid overlap gives the image and type shared space. Mobile becomes an explicit sequence: proposition, welcome, motivation, actions, photograph, learning map, then learning belief. The map has semantic ordered-list labels: Întreabă, Explorează, Aplică. The art is hidden from assistive technology, while these labels remain real text.

The founder region combines a portrait up to 300px wide with a wider open letter. On mobile the identity block uses a 120px photo-print column beside the name and qualifications, reducing to 98px on narrow phones. The programme has a larger Learning Skills column and a second column for the other topics and classroom context. Below 768px it becomes one stack; the secondary classroom photograph and QR are hidden, while text and the Instagram link remain available.

Principles form an asymmetric group: the leading learning idea spans two rows as a rotated squared-paper note with a book/bulb drawing; independent thinking uses an open underlined heading, while personal development has a tinted cut-paper field. Other reading regions use two columns where appropriate, with single-column mobile layouts. Navigation becomes a compact disclosure below 981px. Additional adjustments occur at 900px and 1100px.

On phones UnitED uses two rows: the wordmark first, then its subtitle beside an 80px dialogue drawing. The drawing is positioned by the grid rather than over the letters. Availability statuses follow their headings.

The sticky header is 80px on desktop and 68px on mobile. Safe-area padding protects the top and footer edges; anchor offsets account for the header. Images reserve their proportions, and the exercise reserves a minimum stage height. Text does not depend on fixed-height containers. Decorative overlaps and drawings have smaller mobile versions; the hero halftone disappears on mobile, and the programme sketch disappears below 360px. Illustration space is kept separate from the main reading and action regions.

## Elevation & Depth

Most content remains flat. Photographic layering places the real hero subject above a ruled study sheet, irregular red paper plane, halftone patch, and original orbit stroke. The study sheet replaces the broad squared hero background and has a margin rule and a second lower paper edge. The caption is a stationary factual name-and-roles block rather than a rotated strip. The founder and other photo prints use light borders and modest rotation. The founder print has a small shadow (`2px 6px 14px rgb(30 20 10 / .08)`), while the recall note uses `2px 4px 10px rgb(0 0 0 / .1)`. These establish thin paper layers rather than floating app cards.

Squared-paper and dotted fields are CSS gradients. Tape strips and torn edges are CSS pseudo-elements and clipping contours. They are new digital treatments, never claimed as photographed personal materials.

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

The hero learning map combines an original three-node SVG with a semantic ordered list. Source photograph, headline, body, buttons, map labels, and factual name/teacher/engineering caption do not receive independent scroll displacement.

On desktop with no reduced-motion preference, the existing circled-word path draws once over 640ms with an 80ms delay. The learning sketch has one 640ms clip-path reveal with a 120ms delay. These entrances affect artwork; the source photograph and reading controls are immediately visible.

A feature-checked named hero view timeline drives four decorative transforms over `exit 0%` to `exit 100%`, using linear progress:

- Study sheet: 0 to 32px vertically, rotation 3 to 1 degrees.
- Red paper: 0 to 54px, rotation -4 to -1 degrees.
- Orbit route: 0 to -44px, rotation 0 to -4 degrees.
- Question bubble: 0 to -28px, rotation 5 to 1 degrees.

The hero clips decorative overflow. There is no pinning, scroll interception, JavaScript scroll listener, or runtime animation library. Under 768px, with reduced motion, or without the required view-timeline/range support, depth remains static and the composition stays complete. Reduced motion also removes draw-on and smooth scrolling. This describes the implemented CSS contract; it does not establish successful execution across browsers or a final performance result.

## Do's and Don'ts

### Do:

- **Do** preserve Romanian diacritics, the founder's full name, supplied first-person words, and content archive.
- **Do** preserve exact source red on primary fills and the large hero emphasis, with near-black primary button text and darker same-hue small links and wordmark.
- **Do** use the same original pen-line grammar and keep paper decoration subordinate to content.
- **Do** identify marks and paper treatments as new editorial artwork rather than personal artifacts.
- **Do** keep responsive image variants, crops, dimensions, and preloads aligned with the actual layout.
- **Do** retain keyboard access, visible focus, reduced-motion support, and HTML fallbacks.
- **Do** keep all reading content, actions, labels, and source photography stable while decorative planes supply depth.
- **Do** label forthcoming material honestly and explain the email handoff.

### Don't:

- **Don't** publish private character descriptions, inferred personal claims, or invented praise.
- **Don't** reintroduce V2's blue/yellow/orange palette or generic photo-card rhythm.
- **Don't** copy reference artwork, fabricate handwriting or signatures, or claim the drawings belong to Alex.
- **Don't** add a font, raster texture, drawing library, or looping animation just to support the collage.
- **Don't** use em dashes in new visible copy or supporting guidance.
- **Don't** invent dates, prices, testimonials, affiliations, attendance figures, registration availability, or downloadable resources.
- **Don't** imply that the auditorium photograph records a previous UnitED edition or that the AI-assisted cutout is untouched photography.
