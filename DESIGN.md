---
name: EDU MindSet
description: A vivid educational identity built around real people, questions, and learning by doing.
colors:
  primary: "#2847bd"
  primary-hover: "#1b3191"
  ink: "#18275c"
  muted: "#4b5573"
  paper: "#fbf9ef"
  surface: "#fffef9"
  rule: "#c7cbd5"
  hero-yellow: "#f2efb6"
  learning-yellow: "#f1eb8f"
  pale-blue: "#edf0fb"
  orange: "#f4aa69"
  founder-blue: "#243d9a"
  founder-ink: "#fffdf1"
  founder-muted: "#d3ddfc"
  founder-accent: "#f5e98d"
  founder-rule: "#6c7fc1"
  dark-paper: "#141d36"
  dark-surface: "#1b2744"
  dark-ink: "#f6f3df"
  dark-muted: "#c2cbe3"
  dark-rule: "#4e5b7b"
  dark-accent: "#b8c9ff"
  dark-hero: "#263456"
  dark-tint: "#2a395e"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(58px, 6.1vw, 88px)"
    fontWeight: 700
    lineHeight: 1.04
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
    backgroundColor: "{colors.learning-yellow}"
    textColor: "{colors.ink}"
    padding: "28px 34px"
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

**Creative North Star: "Learning in progress"**

A curious, direct educational identity pairs expressive lettering with real photographs of Alexandru and useful opportunities to participate. Blue ink, yellow learning surfaces, and a warm orange counterpoint give the page energy without borrowing a luxury aesthetic. The source-derived hero cutout shares space with typography rather than sitting inside a generic image card.

This documents the implemented V2 source, replacing V1's red and green-grey system. Page-specific narrative and asset decisions remain in `docs/v2-direction.md`. Final captures are being collected in `.impeccable/review/v2`, including `desktop-final.jpg` and `small-final.jpg`; see `docs/verification-v2.md` for the exact verification evidence and limits.

**Key Characteristics:**

- Expressive display type, clear body copy, and flat coloured surfaces.
- Real photographic subjects integrated with the surrounding composition.
- Learning demonstrated through an optional recall exercise.
- Responsive reflow, native disclosures, and readable interaction states.

## Colors

Blue supplies identity and action, yellow marks learning, orange adds a small warm emphasis, and the neutral fields support long Romanian text. Exact values are in the frontmatter.

### Primary

- **Teaching Blue:** primary actions, links, headline emphasis, and the vertical MindSet wordmark. Its deeper hover shade is limited to pointer feedback.
- **Ink Blue:** general text, strong rules, and the exercise button.

### Secondary

- **Soft Learning Yellow:** hero and UnitED fields.
- **Recall Yellow:** the exercise surface, preserved with dark ink in either page theme.
- **Pale Blue:** workshop notices and resources index.

### Tertiary

- **Warm Orange:** the background question mark, headline underline, and a principle rule. It is not the ordinary body-text colour.

### Neutral

- **Warm Paper / Light Surface:** page background and contact surface.
- **Quiet Slate / Fine Rule:** secondary text and structural separators.
- **Founder Blue:** a deliberate coloured portrait-and-note region, with its own pale text, yellow emphasis, and legible separators.
- **Dark Paper / Dark Surface:** system or manually selected dark theme, using pale ink and blue accents. The exercise and founder region retain their deliberate colour treatments. The primary button keeps its dark blue fill and white text.

**The Colour Roles Rule.** Keep each colour's job consistent instead of assigning every section a new palette.

## Typography

**Display Font:** Bricolage Grotesque Variable, falling back to sans-serif.

**Body Font:** Bricolage Grotesque Variable, falling back to sans-serif. One local Fontsource variable family supplies both roles, with Romanian glyph coverage and automatic optical sizing.

**Character:** Bricolage gives questions and introductions a warmer, more distinctive voice. Weight, size, spacing, and automatic optical sizing distinguish display from readable prose without loading a second family.

### Hierarchy

- **Display:** hero proposition with a compact line-height; the second beat uses Teaching Blue and the key word has an orange underline. Mobile uses a separate fluid scale, with a smaller override below 360px.
- **Headline:** section-level questions. Several sections have deliberate local sizes, including a much larger UnitED wordmark.
- **Title:** topic names, exercise words, and short subsection headings. Workshop names use a fluid size.
- **Body:** main paragraphs are usually 16px, with 17px introductions, comfortable leading, and reading widths generally between 43ch and 65ch. Captions and labels remain smaller; the hero caption and vertical wordmark have a 12px minimum in the final source.
- **Label:** ordinary sentence case for forms, notices, and navigation. There is no separate monospace or handwriting family.

**The Readable Copy Rule.** Keep explanatory prose legible on mobile instead of shrinking it to preserve a desktop arrangement.

## Layout

The main container is capped at 1280px. Desktop side gutters are 48px, reducing to 32px at 1100px, 20px on mobile, and 16px below 360px. Most main regions use two columns; principles use three and audience statements use a smaller two-column grid.

Mobile at 767px reflows the major regions into one column, reduces section gaps, and changes image scale and crop. Navigation also switches to its compact disclosure between 768px and 980px. Additional adjustments occur at 900px and 1100px. There are no fixed text heights. The exercise reserves a minimum stage height to limit jumping between its states.

The sticky header is 80px on desktop and 68px on mobile, with top safe-area padding. Anchor offsets account for the header. Footer padding accommodates the bottom safe area. The mobile workshop notice keeps the clickable Instagram action and hides the scan-oriented QR.


## Elevation & Depth

Surfaces are flat, without decorative box shadows. Depth comes from the hero's transparent subject in front of a large question mark, and from the portrait caption over a restrained dark gradient. These image layers have a purpose: preserving the subject and making the quote readable. The header and skip link use explicit stacking layers.

## Shapes

Photographs and coloured content regions use square edges. Buttons and form fields have modest control corners. Fine rules organise disclosures, while a stronger rule starts the workshop programme. The hero's silhouette follows the alpha channel of the source-derived cutout rather than a rounded frame.

## Components

### Buttons

Solid, direct actions with a compact control radius, white text, and a minimum 54px primary height. The recall action uses Ink Blue. Pointer hover darkens the fill; a press scales to .98 over 140ms. Focus uses a visible 3px outline. Hover decoration is restricted to devices with a fine pointer and genuine hover capability.

### Cards / Containers

These are flat content fields rather than elevated cards. The recall region has a dark border and yellow fill. Workshop announcements and resource listings use Pale Blue. Container padding reduces on smaller screens without introducing nested decorative shells.

### Inputs / Fields

Visible labels, paper-coloured fills, fine borders, control corners, and 16px input text. Inputs have a minimum 52px height; the message field can be resized vertically. Validation uses native validity feedback with Romanian messages. The form prepares an email draft; no component should imply confirmed delivery.

### Navigation

An accessible text wordmark retains the EDU/vertical MindSet arrangement. Desktop links use the same family at a compact weight and at least a 44px hit area. Compact navigation uses native `details` and `summary`, with vertically stacked links. Selecting a link closes the menu; Escape closes it and returns focus to the summary. Theme choice follows system preference unless explicitly selected and stored locally.

### Recall Exercise

A three-state read, recall, and reveal interaction. The words are hidden on request, the prompt replaces them, and reveal includes a plain explanation of reamintire activă. Reset is explicit. It has no timer, scoring, diagnosis, or required personal input. Without JavaScript, the words and a manual exercise explanation remain available.

### Workshop Disclosures

Native summaries show topic names and short explanations. Opening reveals the full supplied programme bullets; the plus rotates into a close cue. Deep links open the relevant workshop. Longer founder, mission, vision, and UnitED content uses related native disclosures.

Desktop entry motion uses a 10px vertical shift and partial-opacity arrival. Button feedback uses a strong ease-out curve. Reduced motion removes animation, transitions, and smooth scrolling. Native disclosure content does not depend on an animated height.

## Do's and Don'ts

### Do:

- **Do** preserve Romanian diacritics, the founder's full name, and the supplied content archive.
- **Do** keep image variants, crops, and preloads aligned with the actual layout.
- **Do** retain keyboard access, visible focus, reduced-motion support, and no-JavaScript fallbacks.
- **Do** label upcoming workshops and resources honestly and explain the email handoff.

### Don't:

- **Don't** restore V1's red/green-grey palette or its interchangeable photo-card rhythm.
- **Don't** use em dashes in new visible copy or supporting guidance.
- **Don't** invent dates, prices, testimonials, partners, attendance figures, registration availability, or downloadable resources.
- **Don't** present the auditorium image as proof of a previous UnitED event or the AI-assisted cutout as an untouched photograph.
