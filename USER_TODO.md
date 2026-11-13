# EDU MindSet: your remaining checklist

Updated13 November2026. Alex has approved the existing base website, according to the user. The new priority is an anniversary countdown before the full website release. The user thinks the anniversary is25 November; exact date/year/hour is still unconfirmed. See docs/ANNIVERSARY_LAUNCH_PLAN.md for the proposed concept and the owner/AI split. Workshop, film, UnitED, resources and other optional work are explicitly deferred until after publication.

## Immediate decisions for the anniversary launch

- [x] Alex has agreed to the current base website. Do not repeat that approval request for the same version.
- [ ] Confirm with Alex the exact anniversary date, target year and launch hour in Europe/Bucharest. Candidate25 November2026 is not yet a configured deadline.
- [ ] React to the countdown concept and confirm a public countdown-first experience versus an inline timer on an already-public full site. The AI will implement after this discussion.
- [ ] Verify contacts on14 November2026, as you said you would do tomorrow. The website currently uses edumindset8@gmail.com and @edu.mind.set.
- [ ] Choose a domain/hosting cost route after availability checking:edumindset.ro preferred; .com/.app alternatives are usually paid too. A branded pages.dev subdomain may be a zero-cost option if its name is available. No purchase/budget is approved.

## Hosting and publication checklist

- [x] **Base-site review with Alex completed.** Reported by the user on13 November2026. The new countdown concept is a separate, still-open discussion.
- [ ] **Confirm the public contact destinations are correct and monitored.** The site uses `edumindset8@gmail.com` and `https://www.instagram.com/edu.mind.set/`. The on-page QR opens Instagram. No new address or social account needs creating if these are already correct.
- [ ] **Choose the public hosting account and site address.** A custom domain is optional. Use a static host, either connected to the existing GitHub repository or accepting the prepared release ZIP. The repository already exists: `https://github.com/bordeadavid24-rgb/EduMindset`. Do not recreate it. A Git-connected deployment must wait until the new local commits are pushed; otherwise it will build the older upstream version. The12 November ZIP remains the existing full-site build. Deploy a new countdown artifact only after it exists and the concept/release flow is agreed.
- [ ] **Set the final public URL before the final public build.** On a Git-connected host, set `EDUMINDSET_SITE_URL` to the full HTTPS site address, including any repository subpath. Build command: `npm run build`; output: `dist`; tested Node version:24. The build then creates absolute social-image and canonical URLs automatically. If you use a direct ZIP upload first, send back the generated public address so the final archive can be rebuilt for that address. The current archive intentionally assumes no domain.
- [ ] **Check the live version on a real phone and desktop before sharing it.** Check menu, text wrapping, image crops, scrolling, the recall exercise, light/dark appearance and the desktop stop/start motion control. Tap Instagram and email. For the form, confirm that your email app opens a draft to the correct address; sending happens in that app. Check the copy fallback if no mail app is configured. Physical-phone behavior has not been verified in this environment.
- [ ] **Share the final URL when satisfied.** Put it in the Instagram bio and workshop communications if desired. A website QR can be prepared once the address is fixed; the existing site QR remains an Instagram QR.

## Deployment details already prepared for you

The accepted full site is constructed. The proposed countdown has not been built. The existing full-site release includes local fonts, responsive images, real project content, source-asset cleanup, a CSP and a generated `_headers` file. Cloudflare Pages and Netlify can use that file; other hosts may require their own header configuration. Final hosted behavior still needs checking on the chosen service.

`EDUMINDSET-RELEASE-2026-11-12.zip` contains the full website, not the new countdown. Do not upload it as the anniversary prelaunch page. The AI should prepare a new, correct archive after the countdown and host/address are agreed. For any eventual direct static upload: `index.html` must end up at the site's root, beside `assets/`, `images/` and `_headers`, not inside an extra nested folder. The archive is the current teaser build; its social URLs should be finalized once the public address is known.

## After publication: when the first workshop is ready

Send the confirmed details together so the announcement and registration can be added in one pass:

- [ ] Workshop title, topic and short description.
- [ ] Date, start/end time, time zone and duration.
- [ ] Venue and address, or online format and joining instructions.
- [ ] Intended audience, such as school years/age range or students, and any prerequisites.
- [ ] Capacity and whether it is free or paid; the exact price if paid.
- [ ] Registration destination, opening/closing dates if applicable, and who handles enquiries and confirmations.
- [ ] Any practical attendance instructions that participants need.

Until then, the current forthcoming labels and Instagram announcement link are intentional.

## After publication: when the film is approved

- [ ] Supply the final approved EDU MindSet workshop film and say where it should appear: this landing page, a workshop page, the workshop itself, or several places.
- [ ] Supply a preferred poster frame and captions/transcript if available. Hosting, compression and playback integration can then be completed for the actual file.

The MINA video/render work was not modified by this website audit. The website does not imply affiliation with the MINA museum.

## After publication: later content and optional features

- [ ] **UnitED:** provide the first edition's real date, location, programme, confirmed speakers and registration destination when ready. The current coming-soon section can stay until then.
- [ ] **Resources:** provide actual approved articles, guides, PDFs or links, with titles and short descriptions. The site currently promises forthcoming resources, not downloads that do not exist.
- [ ] **Direct form sending, only if wanted:** choose the form/email service and configure its account/integration. The actual delivery behavior and data-handling explanation can then be updated. The current transparent email-app handoff is usable without this feature.
- [ ] **Custom domain, only if wanted:** register/connect it through your chosen host and keep its renewal active. A host-provided address is enough to publish.
- [ ] **Ongoing maintenance:** keep event/contact information current, supply new resources, and request periodic dependency/link checks. The current `security.txt` contact record expires on10 November2027 and should be renewed before then if kept.

## Technical follow-ups that do not require you to fix code

Terminal DNS currently blocks GitHub synchronization and a fresh npm audit. The latest completed changes are committed locally and backed up. The last known successful upstream V5 sync was10 November; see HANDOFF.md for the newest local commit and push result. No current dependency-clean claim is made from the older audit.

Fresh headless Chrome cannot start, and an isolated browser connection is unavailable. The current eight behavior tests, production build and55 release/HTTP checks pass; old Lighthouse results are labelled historical. A fresh live-browser/performance pass and safe GitHub push should be retried once access returns. The replacement QA checker tests a top-level copy of the production page under the unchanged CSP and does not send email or write to your real clipboard.

After you choose the hosting address, final metadata, deployment and hosted checks can be completed against that actual destination. You do not need to redesign the site or manually edit its source to provide these decisions.
