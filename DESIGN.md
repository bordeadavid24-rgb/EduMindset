---
name: EDU MindSet
description: A red-pen notebook and photographic collage for learning, questions, and real participation.
colors:
  primary: "#b3342a"
  primary-hover: "#91281f"
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
    letterSpacing: "-0.04em"
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
    textColor: "#ffffff"
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

**Creative North Star: "The curious student's notebook"**

The original red and charcoal identity frames a direct invitation from the founder, his supplied first-person account, and opportunities to try a learning method. Photographs change scale and role across the page: a large source-derived laboratory cutout, a compact eye-contact portrait beside an open letter, and contextual teaching and auditorium photographs.

V4 develops that personal teaching space through original digital pen drawings, comic sequencing, squared-paper fields, and restrained photo collage. The source words and photographs provide authorship; the new marks are editorial artwork, not Alex's personal handwriting or classroom artifacts. No private personality claims, praise, signatures, or testimonials are added. Surface direction is recorded in `docs/v4-direction.md`, with primary references in `docs/v4-research-notes.md`. This documents current source; V4 performance verification is separate and no earlier score is inherited.

**Key Characteristics:**

- Red for identity and action; charcoal and warm neutrals for reading.
- A shared photographic opening with a circled word, comic question, and paper collage.
- An unboxed first-person letter with a smaller portrait.
- A worked-through programme containing an optional recall demonstration.
- Native disclosures, responsive reflow, and explicit interaction states.
- One coherent charcoal/red SVG line vocabulary and lightweight CSS materials.

## Colors

The palette follows the supplied logo's red and black relationship. Exact values are recorded in the frontmatter.

### Primary

- **Action Red:** small text links, buttons, focus outlines, headline emphasis, and the vertical MindSet wordmark. Pointer hover uses its deeper shade.
- **Artwork Red:** the broad plane behind the hero subject and a principle rule. It is deliberately brighter than the control colour.

### Secondary

- **Note Paper:** the light recall exercise field, retaining charcoal text even inside the dark programme.
- **Soft Field:** the UnitED background. **Tint** supplies a related neutral-red tone where needed.
- **Drawing Paper / Paper Edge / Grid Ink / Tape:** the light paper backings, subtle contours, squared ruling, and decorative tape. Dark-theme equivalents keep these treatments integrated with the page.

### Neutral

- **Paper / Surface:** page and contact backgrounds.
- **Charcoal / Quiet Stone / Fine Rule:** ordinary text, supporting text, and structural separators.
- **Workshop Charcoal:** a deliberate dark programme region with light text, warm secondary text, and a lighter red accent.
- **Dark Paper / Dark Surface:** system or selected dark theme with pale text and red emphasis. The workshop region and light exercise keep their own local palettes. Solid action buttons retain dark red with white text.

**The Red Roles Rule.** Use bright red for artwork and darker red for small controls; do not reintroduce a competing blue or yellow identity.

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

The opening uses twelve columns and two rows. The title spans columns 1 to 9, the personal copy occupies columns 1 to 5, and the photographic scene spans columns 6 to 12 across both rows. Controlled grid overlap gives the image and type shared space. Mobile becomes an explicit sequence: proposition, welcome, motivation, actions, photograph, then learning belief.

The founder region combines a portrait up to 300px wide with a wider open letter. On mobile the identity block uses a 120px photo-print column beside the name and qualifications, reducing to 98px on narrow phones. The programme has a larger Learning Skills column and a second column for the other topics and classroom context. Below 768px it becomes one stack; the secondary classroom photograph and QR are hidden, while text and the Instagram link remain available.

Principles form an asymmetric group: the leading learning idea spans two rows as a rotated squared-paper note with a book/bulb drawing; independent thinking uses an open underlined heading, while personal development has a tinted cut-paper field. Other reading regions use two columns where appropriate, with single-column mobile layouts. Navigation becomes a compact disclosure below 981px. Additional adjustments occur at 900px and 1100px.

The sticky header is 80px on desktop and 68px on mobile. Safe-area padding protects the top and footer edges; anchor offsets account for the header. Images reserve their proportions, and the exercise reserves a minimum stage height. Text does not depend on fixed-height containers. Decorative overlaps and drawings have smaller mobile versions; the hero halftone disappears on mobile, and the programme sketch disappears below 360px. Illustration space is kept separate from the main reading and action regions.

## Elevation & Depth

Most content remains flat. Photographic layering places the real hero subject above an irregular red paper plane, a halftone patch, and an original orbit stroke. The founder and other photo prints use light borders and modest rotation. The founder print has a small shadow (`2px 6px 14px rgb(30 20 10 / .08)`), while the recall note uses `2px 4px 10px rgb(0 0 0 / .1)`. These establish thin paper layers rather than floating app cards.

Squared-paper and dotted fields are CSS gradients. Tape strips and torn edges are CSS pseudo-elements and clipping contours. They are new digital treatments, never claimed as photographed personal materials.

## Shapes

The red plane, programme edges, and selected notes have short polygon contours suggesting cut paper. Tape strips cross a few print edges. Slight rotations vary by role, including the founder print, UnitED print, resource sheet, and principle notes. Controls keep their restrained corners and reading text stays clear.

Original SVG drawings use mostly unfilled paths with rounded caps and joins, a default stroke width of 2.4, and occasional red emphasis. The vocabulary includes an open book with a bulb, a pencil, a question bubble, an orbit/arrow, and dialogue marks. Interface icons remain Phosphor. Decorative drawing containers are hidden from assistive technology and are not controls.

## Components

### Buttons

Primary actions use Action Red, white text, control corners, and a minimum 54px height. The recall action uses fixed charcoal. Fine-pointer hover darkens the fill; press feedback scales to .98 over 140ms. Keyboard focus is a visible 3px outline, using a locally legible red inside the programme and exercise.

### Cards / Containers

The programme remains a charcoal field with torn-paper boundaries and an original book sketch. Its recall region is a light notebook page with a margin line, punched-hole dots, a small shadow, and extra left padding. The resource index is a lightly rotated, bordered paper sheet with a decorative tape tab. Photo prints and principle notes have distinct treatments within the same palette rather than repeated generic cards.

### Inputs / Fields

Visible labels, paper-coloured fills, fine borders, control corners, and 16px input text. Inputs have a minimum 52px height; the message field can resize vertically. Native validity feedback uses Romanian messages. The form prepares an email draft and offers copying; it never confirms delivery.

### Navigation

The text wordmark keeps black/charcoal EDU and vertical red MindSet in the light theme. Desktop links have at least a 44px hit area. Compact navigation uses native `details` and `summary`, with vertically stacked links. Link selection closes the menu; Escape closes it and restores focus. Theme preference follows the system unless explicitly selected and stored locally.

### Founder Letter

A compact portrait in a taped photo-print treatment, full name, and grouped factual qualifications establish authorship. A small original pencil drawing sits above the letter rule. The supplied first-person text has a greeting, a short enlarged quotation, an optional longer story, and a plain-text signoff. There is no invented signature or additional praise.

### Programme and Recall Exercise

Learning Skills is initially open and contains the optional read, recall, and reveal activity. The other three workshop directions remain easy to scan and expand. Opening turns the plus into a close cue. Deep links to a workshop or its contained exercise open the relevant disclosure.

A real ordered list shows the three stages: Citești, Îți amintești, Verifici. JavaScript moves `aria-current="step"` and the visual current-state border as the activity changes or resets. The exercise hides three words on request, invites retrieval, then reveals them with a plain explanation of reamintire activă. It has an explicit reset and no timer, scoring, diagnosis, or required personal input. Static HTML includes a manual no-JavaScript alternative. Longer project and UnitED material uses related native disclosures.

The old hero text/photo arrival is disabled. One desktop-only circled-word stroke draws on once over 640ms with an 80ms delay and strong ease-out. Buttons retain short feedback transitions. Reduced motion removes animation, transitions, and smooth scrolling. The collage does not bob, scroll independently, or require animated disclosure height.

## Do's and Don'ts

### Do:

- **Do** preserve Romanian diacritics, the founder's full name, supplied first-person words, and content archive.
- **Do** preserve the original red/black identity while keeping small controls legible.
- **Do** use the same original pen-line grammar and keep paper decoration subordinate to content.
- **Do** identify marks and paper treatments as new editorial artwork rather than personal artifacts.
- **Do** keep responsive image variants, crops, dimensions, and preloads aligned with the actual layout.
- **Do** retain keyboard access, visible focus, reduced-motion support, and HTML fallbacks.
- **Do** label forthcoming material honestly and explain the email handoff.

### Don't:

- **Don't** publish private character descriptions, inferred personal claims, or invented praise.
- **Don't** reintroduce V2's blue/yellow/orange palette or generic photo-card rhythm.
- **Don't** copy reference artwork, fabricate handwriting or signatures, or claim the drawings belong to Alex.
- **Don't** add a font, raster texture, drawing library, or looping animation just to support the collage.
- **Don't** use em dashes in new visible copy or supporting guidance.
- **Don't** invent dates, prices, testimonials, affiliations, attendance figures, registration availability, or downloadable resources.
- **Don't** imply that the auditorium photograph records a previous UnitED edition or that the AI-assisted cutout is untouched photography.

## Narrow UnitED composition
On phones the wordmark occupies the first grid row. Subtitle and80px dialogue drawing share the second row; the drawing has no absolute positioning over the letters. Availability statuses follow their headings.
