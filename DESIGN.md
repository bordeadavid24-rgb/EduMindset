---
name: EDU MindSet
description: A personal teaching space with original red and charcoal identity, real photographs, and learning by doing.
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
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(58px, 6.1vw, 82px)"
    fontWeight: 650
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
    padding: "24px 28px"
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

**Creative North Star: "A personal teaching space"**

The original red and charcoal identity frames a direct invitation from the founder, his supplied first-person account, and opportunities to try a learning method. Photographs change scale and role across the page: a large source-derived laboratory cutout, a compact eye-contact portrait beside an open letter, and contextual teaching and auditorium photographs.

The V3 system replaces the blue, yellow, and orange V2 identity. Personal authorship comes from the supplied words and images, without invented personality claims, praise, signatures, testimonials, or luxury styling. Surface-specific direction is recorded in `docs/v3-direction.md`. This is source documentation, not a final test report.

**Key Characteristics:**

- Red for identity and action; charcoal and warm neutrals for reading.
- A shared photographic opening rather than a separate image card.
- An unboxed first-person letter with a smaller portrait.
- A worked-through programme containing an optional recall demonstration.
- Native disclosures, responsive reflow, and explicit interaction states.

## Colors

The palette follows the supplied logo's red and black relationship. Exact values are recorded in the frontmatter.

### Primary

- **Action Red:** small text links, buttons, focus outlines, headline emphasis, and the vertical MindSet wordmark. Pointer hover uses its deeper shade.
- **Artwork Red:** the broad plane behind the hero subject and a principle rule. It is deliberately brighter than the control colour.

### Secondary

- **Note Paper:** the light recall exercise field, retaining charcoal text even inside the dark programme.
- **Soft Field:** the UnitED background. **Tint** supplies a related neutral-red tone where needed.

### Neutral

- **Paper / Surface:** page and contact backgrounds.
- **Charcoal / Quiet Stone / Fine Rule:** ordinary text, supporting text, and structural separators.
- **Workshop Charcoal:** a deliberate dark programme region with light text, warm secondary text, and a lighter red accent.
- **Dark Paper / Dark Surface:** system or selected dark theme with pale text and red emphasis. The workshop region and light exercise keep their own local palettes. Solid action buttons retain dark red with white text.

**The Red Roles Rule.** Use bright red for artwork and darker red for small controls; do not reintroduce a competing blue or yellow identity.

## Typography

**Display Font:** Bricolage Grotesque Variable, falling back to sans-serif.

**Body Font:** the same local variable family, with automatic optical sizing and Romanian glyph coverage.

Weight, scale, and spacing distinguish roles without a second font download. Type remains direct and readable; there is no handwriting or luxury serif layer.

### Hierarchy

- **Display:** the hero's two-line proposition, with one red word. Desktop uses the frontmatter scale; mobile has its own fluid size and a narrow-screen override.
- **Headline:** section introductions. The UnitED name is deliberately much larger than ordinary section headings.
- **Title:** topic names, recall words, and short subsection headings. The leading learning principle is larger than its two related ideas.
- **Body:** general copy uses 16px, introductions usually 17px, and the desktop founder letter uses 18px with generous leading. The letter returns to 16px on mobile. Reading widths generally remain between 44ch and 67ch.
- **Label:** sentence-case navigation, fields, status notes, and captions. The header's vertical wordmark is 12px; the hero caption is 13px. Qualifications are compact factual text.

**The Readable Copy Rule.** Reflow prose on mobile rather than shrinking it to preserve a desktop composition.

## Layout

The main container is capped at 1280px. Side gutters are 48px on desktop, 32px below 1100px, 20px on mobile, and 16px below 360px. Main section gaps are 104px on desktop and 64px on mobile.

The opening uses twelve columns and two rows. The title spans columns 1 to 8, the personal copy occupies columns 1 to 5, and the photographic scene spans columns 6 to 12 across both rows. Controlled grid overlap gives the image and type shared space. Mobile becomes an explicit sequence: proposition, welcome, motivation, actions, photograph, then learning belief.

The founder region combines a portrait up to 300px wide with a wider open letter. On mobile the identity block uses a 116px portrait beside the name and qualifications, reducing to 96px on narrow phones. The programme has a larger Learning Skills column and a second column for the other topics and classroom context. Below 768px it becomes one stack; the secondary classroom photograph and QR are hidden, while text and the Instagram link remain available.

Principles form an asymmetric group: the leading learning idea spans two rows beside the other two. Other reading regions use two columns where appropriate, with single-column mobile layouts. Navigation becomes a compact disclosure below 981px. Additional adjustments occur at 900px and 1100px.

The sticky header is 80px on desktop and 68px on mobile. Safe-area padding protects the top and footer edges; anchor offsets account for the header. Images reserve their proportions, and the exercise reserves a minimum stage height. Text does not depend on fixed-height containers.

## Elevation & Depth

Surfaces remain flat, without decorative box shadows. Depth comes from the transparent hero subject in front of a simple red plane, with copy placed on its own readable layer. The founder letter is unboxed. Real image crops and changes of scale supply visual detail without simulated paper, floating stickers, or decorative classroom objects.

## Shapes

Images and content fields have square edges. Controls have restrained corners. Fine rules organise programme rows, reading disclosures, captions, and resource categories. The hero silhouette follows the alpha channel of the source-derived image. The red plane is a simple rectangular field, not an ornamental shape.

## Components

### Buttons

Primary actions use Action Red, white text, control corners, and a minimum 54px height. The recall action uses fixed charcoal. Fine-pointer hover darkens the fill; press feedback scales to .98 over 140ms. Keyboard focus is a visible 3px outline, using a locally legible red inside the programme and exercise.

### Cards / Containers

The site groups content with space, tone, and rules rather than elevated cards. The programme uses a charcoal field. Its recall exercise uses Note Paper with charcoal text and 24px by 28px desktop padding, reduced on mobile. The resource index is open, with a red top rule rather than a filled card.

### Inputs / Fields

Visible labels, paper-coloured fills, fine borders, control corners, and 16px input text. Inputs have a minimum 52px height; the message field can resize vertically. Native validity feedback uses Romanian messages. The form prepares an email draft and offers copying; it never confirms delivery.

### Navigation

The text wordmark keeps black/charcoal EDU and vertical red MindSet in the light theme. Desktop links have at least a 44px hit area. Compact navigation uses native `details` and `summary`, with vertically stacked links. Link selection closes the menu; Escape closes it and restores focus. Theme preference follows the system unless explicitly selected and stored locally.

### Founder Letter

A compact portrait, full name, and grouped factual qualifications establish authorship. The supplied first-person text has a greeting, a short enlarged quotation, an optional longer story, and a plain-text signoff. There is no invented signature or additional praise.

### Programme and Recall Exercise

Learning Skills is initially open and contains the optional read, recall, and reveal activity. The other three workshop directions remain easy to scan and expand. Opening turns the plus into a close cue. Deep links to a workshop or its contained exercise open the relevant disclosure.

The exercise hides three words on request, invites retrieval, then reveals them with a plain explanation of reamintire activă. It has an explicit reset and no timer, scoring, diagnosis, or required personal input. Static HTML includes a manual no-JavaScript alternative. Longer project and UnitED material uses related native disclosures.

Desktop opening motion uses a 10px shift and partial-opacity arrival with a strong ease-out. Buttons retain short feedback transitions. Reduced motion removes animation, transitions, and smooth scrolling. Disclosure content does not require animated height.

## Do's and Don'ts

### Do:

- **Do** preserve Romanian diacritics, the founder's full name, supplied first-person words, and content archive.
- **Do** preserve the original red/black identity while keeping small controls legible.
- **Do** keep responsive image variants, crops, dimensions, and preloads aligned with the actual layout.
- **Do** retain keyboard access, visible focus, reduced-motion support, and HTML fallbacks.
- **Do** label forthcoming material honestly and explain the email handoff.

### Don't:

- **Don't** publish private character descriptions, inferred personal claims, or invented praise.
- **Don't** reintroduce V2's blue/yellow/orange palette, decorative question mark, or generic photo-card rhythm.
- **Don't** use em dashes in new visible copy or supporting guidance.
- **Don't** invent dates, prices, testimonials, affiliations, attendance figures, registration availability, or downloadable resources.
- **Don't** imply that the auditorium photograph records a previous UnitED edition or that the AI-assisted cutout is untouched photography.
