# EDU MindSet: visual direction research

Status: research recommendation, 8 November 2026. No app files edited. Read `design-taste-frontend` and `impeccable`; ran Impeccable context once against the workspace. The project did not yet contain PRODUCT.md or a visual implementation at that moment.

## Design read

Reading this as: a Romanian educational workshop landing page for pupils, students, and parents, with an approachable, intellectually curious voice and the visual language of a contemporary teaching studio.

Suggested dials: DESIGN_VARIANCE 7, MOTION_INTENSITY 4, VISUAL_DENSITY 4. The page should feel alive through people, questions, changing composition, and real interactions. Constant decorative motion would compete with its educational purpose.

## What the supplied images actually show

- `WhatsApp Image 2026-11-08 at 19.34.13.jpeg`: real classroom/lab photograph of the founder working at a microscope. Strongest image for the main proposition: education as participation and discovery. Preserve the microscope and hands in the crop.
- `...19.34.13-2.jpeg`: founder seated in an auditorium. Supports dialogue and the UnitED context; do not imply that the photograph documents a past UnitED event.
- `...19.34.13-3.jpeg`: formal founder portrait in a warm library setting. Best for the personal introduction, where eye contact creates trust; avoid making the whole website imitate the library's dark luxury materials.
- `...19.34.13-4.jpeg`: 500px dark brand square, clearly visible red vertical “MindSet”; remaining black lettering is nearly invisible against the black background. Inspect before placing as a masthead. A clean text wordmark preserving EDU MindSet spelling and red emphasis is more readable than this JPEG at tiny size.
- `...19.36.37.jpeg`: Instagram QR artwork. This is a fifth recent file, in addition to the four 19.34 images. Put it beside the workshop announcement on desktop with a real clickable Instagram link. On mobile, prioritize the link; visitors cannot conveniently scan a code on their own screen.

The brand assets support a red/black identity. They do not support adding a multicolour school palette or a luxury serif aesthetic.

## Recommended visual world: an open teaching studio

Use clear white or very pale cool paper, near-black type, and one confident red accent drawn from the supplied mark. The feel is a teacher making something understandable on a board, translated into a contemporary publication: large direct questions, annotations with a functional purpose, real documentary photography, and generous breathing room between ideas.

Use one legible sans family with Romanian diacritics (e.g. self-hosted Manrope variable) across display and body. Display typography can be bold and slightly tight; body should be 17–18px, roughly 1.6 line height, and 60–65ch maximum. No random serif emphasis, fake handwriting, scattered stickers, graduation-cap icons, stars, or decorative squiggles.

Suggested starting tokens: background #F7F8F6; text #202220; secondary #545954; accent #D13E37; pale accent #F5E7E4; lines #D9DDD8. Confirm contrast of final combinations. Use solid red buttons with white text only at a sufficiently dark final red. All informative text stays high contrast.

Corners: mostly square photographs and flat content regions; buttons/inputs modest 6–8px corners. No floating glass navigation, nested rounded cards, soft shadow clouds, or gold details. One thin rule can organize a content region; do not underline every paragraph as if it were a spreadsheet.

## Page choreography

1. **An invitation rather than an institutional slogan.** Lead with the provided “Nu este suficient să înveți. Contează cum înveți.” Give “cum” the red emphasis in the same typeface. Include the real classroom photograph in the first viewport and a concise explanation of the project. Primary action: discover upcoming workshops. Secondary action: meet Alexandru. Do not label workshop registration open when dates and places are unconfirmed.
2. **A small active learning moment.** “De unde vrei să începi?” Three or four plain text choices (learning, time, confidence, direction) open a short practical preview and link directly to the relevant workshop topic. This is a navigation aid, not a fabricated personality test or diagnosis. Full keyboard support; selected state must have text/shape as well as colour.
3. **Meet the person.** The formal portrait and the user's “Salut! Eu sunt Alexandru-Constantin Tulică.” His qualifications are factual evidence, followed by his own motivation. Give this section a personal voice and a natural reading column, not a metric dashboard. Keep the longer story in an accessible disclosure if necessary.
4. **Workshops as a working agenda.** Four numbered topic rows with independent expand/collapse details. On desktop, an opened topic reveals its content in a generous adjacent area; on mobile use a conventional stacked accordion. Keep every supplied topic and bullet available. The upcoming announcement and QR form a distinct, visible endpoint: “Vrei să fii printre primii care află?”
5. **The three educational directions.** Use a large typographic progression or staggered open columns for intelligent learning, independent thought, and personal development. Do not use three identical rounded icon cards. Put the mission, vision, and values nearby in readable disclosures rather than silently deleting the supplied content.
6. **UnitED as an editorial announcement.** The auditorium image plus the actual promise of dialogue and the real “Coming soon” state. A large UnitED wordmark and a short programme outline create a change in rhythm without changing the page's theme. No invented date, speakers, venue, countdown, or past-attendee claim.
7. **Resources with honest availability.** Show the categories that are being prepared as a concise index, with “În pregătire” clearly stated. Do not create fake article cards with publish dates or dead download buttons. This can be compact, not an empty section filling a screen.
8. **Conversation.** Clear email, Instagram, and the requested contact fields. If no submission service exists, the interface must state that it opens an email draft and label the action accordingly. Never show “Message sent” without a real send result. Institutional collaboration is an equally useful reason to contact.

## Purposeful motion and behavior

- Button press: scale .98, 120–160ms; colour/opacity transitions 150–180ms. Strong ease-out such as cubic-bezier(.23,1,.32,1).
- Opened topics: restrained 180–220ms content transition, no bounce or scale from zero; preserve a stable focus target.
- Optional one-time first-viewport entrance: 12–16px translation and opacity, stagger <=60ms. Content must remain readable with JS unavailable. Avoid hiding the entire page behind scroll reveal.
- A photo can change gently with the active learning choice only if the relationship is meaningful. No pointer-following decoration, rotating seals, endless marquees, parallax, or scroll hijacking.
- `prefers-reduced-motion`: remove displacement and smooth scrolling. Use native anchor navigation with proper scroll offset below header.
- Mobile navigation: accessible disclosure, Escape dismissal, correct expanded state; no hover-dependent information.

## What will make this feel personal

The founder's real lab photograph is the main distinguishing asset. His first-person explanation should be visible early enough that people understand who is inviting them. The website's helpfulness should demonstrate its values: choosing a question reveals a clear next step, workshop topics are easy to understand, unavailable items are honestly marked, and contact is straightforward.

The contrast to avoid is a generic course marketplace on one side and a moody consultant portfolio on the other. Neither follows the supplied content or the candid classroom evidence.

## Implementation checks for the owner

Use at least four distinct composition families across the page. Keep the six supplied content areas accessible, even if combined into a single landing page with deeper disclosures. Keep real images semantic and optimize them without changing their identity. Test 390px and laptop widths, keyboard flow, reduced motion, form semantics, and every CTA destination. No fabricated proof numbers or testimonials.

Impeccable context reported the greenfield init/new-work requirements and the final single mechanical detector pass. This memo is advisory research and does not constitute user approval of a visual direction or a substitute for the build owner's PRODUCT.md/DESIGN.md workflow.
