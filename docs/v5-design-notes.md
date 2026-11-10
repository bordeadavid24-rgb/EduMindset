# V5: one coherent working study board

10 November 2026. Design and motion advice only; no app edits. Preserve V4's red/charcoal palette, real photographs, supplied content, local font, and native implementation. Increase the hero's drawing ambition by giving it one composition and one motion idea, not by multiplying independent doodles.

## Composition

- **Make the artwork a sketchnote, not a sticker collection.** Build one connected drawing around three plain learning actions: understand, explore, apply. One larger open-book/observation diagram can lead into a short drawn route with three distinct nodes. Use red for the route's important marks and charcoal for structure. Let a few connected strokes travel behind the subject, with generous empty space around the face and hands.
- **Give the photo a professional anchor.** Keep the real cutout as the largest, clearest subject, with the microscope and table base intact. A layered study sheet behind it can carry the new diagram, while one red cut-paper plane supplies weight. Maintain a shared baseline and repeatable grid alignment. A coherent larger diagram is stronger than many small bubble, orbit, book, star, and tape objects competing for attention.
- **Separate drawing from reading.** Keep the proposition, welcome, short original motivation, and CTA in a quiet readable region. The learning-route labels should be brief and legible, not tilted microcopy. Keep the existing full name and factual roles together beneath or beside the scene. Qualifications are quiet context, not an awards panel or an invented claim.
- **Limit materials.** One ruled study sheet, one red backing, and one small photo-caption strip are enough. Keep the existing pen width and rounded joins. Reduce redundant dots, tape, or orbit loops if the larger drawing already supplies texture and connection. The page should look deliberately composed before any movement begins.

These are new digital teaching illustrations. Do not describe them as Alex's drawings, notes, handwriting, private belongings, or actual workshop materials. Do not add personality praise or imply that the three-step diagram is a validated proprietary method.

## Motion grammar

| Layer or action | Recommended movement | Purpose |
| --- | --- | --- |
| Main proposition, body, credentials, CTA and actual photographic subject | Stable. No scroll-linked translation or fade. | Keeps the reading/action anchor solid while surrounding depth changes. |
| Red paper backing | About 24px of vertical displacement over the hero's exit, with less than 1 degree of rotation change. | The nearest decorative plane has the strongest depth cue. |
| Ruled study sheet | About 12px in the same direction, with its original small rotation retained. | Establishes a second depth plane without turning the composition into floating cards. |
| Farthest connecting marks | About 8px in the opposite or slower direction. | Adds spatial separation while retaining the visual connection. |
| Selected diagram connector | One restrained line reveal or short entrance, roughly 500 to 700ms total. Leave the labels visible. | Explains the three-node route once. Avoid drawing every path at once or starting several unrelated entrances. |
| Buttons and disclosure states | Preserve short current press/focus feedback. | Interaction remains responsive and predictable. |

Use a **linear** mapping for scroll-linked depth: position should follow the reader's scroll directly rather than lagging behind with a spring. Limit the active range to the hero's exit, not the entire document's progress. Long lower-page content must not compress the whole effect into a few nearly invisible pixels. Do not pin or hijack scrolling.

Native CSS `animation-timeline` can connect animation progress to scroll; older-browser behavior still needs a static fallback. A named `scroll-timeline` measures a scrollable element's progress. Choose the actual scrolling source deliberately and do not accidentally make the hero an artificial scroll container. Also place `animation-timeline` after an `animation` shorthand, because the shorthand resets the timeline association. See [MDN: animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline) and [MDN: scroll-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-timeline).

## Mobile, accessibility and performance

At small-phone widths, keep a static composition with one simplified study sheet and a readable three-node route. Reduce secondary marks, not the real subject or main action. The whole face, glove, and microscope should remain clear at 320px. Labels must not depend on motion to become visible. At tablet widths, check that larger art does not invade the headline or extend past the container.

Define the static layout first, then enable scroll animation only inside feature and preference checks. Unsupported browsers and `prefers-reduced-motion: reduce` keep the same complete art without displacement. Decorative layers remain non-interactive and hidden from assistive technology; essential content and actions remain semantic HTML. No mouse-only effects are required.

Animate only transforms and, where justified, opacity. Do not animate clip-path points, filters, grid geometry, large shadows, or continuously redraw the entire SVG. Keep the existing image dimensions, responsive format choices and preload. New SVG/CSS art adds no raster texture, font family, drawing library, or JavaScript scroll loop.

## Bounded checks

Inspect desktop at top/mid-hero/hero-exit positions, plus tablet, phone, reduced-motion, and unsupported-timeline fallback. Verify that text and controls never drift, artwork does not cross a hit target or crop the subject, no horizontal scroll appears, and the page remains complete with animation disabled. Compare performance with the same conditions used for the baseline; do not carry a V4 score forward as V5 evidence.
