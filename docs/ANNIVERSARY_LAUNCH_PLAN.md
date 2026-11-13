# EDU MindSet anniversary launch plan

Authoritative checkpoint: 13 November 2026, countdown preview implementation.

## Latest user decisions

- Alex approved the existing full website. Preserve it at index.html.
- The user now authorizes building a working countdown preview with a mock launch time while waiting for Alex's preference. Use **25 November 2026 at 00:00 Europe/Bucharest** (2026-11-25T00:00:00+02:00). This is a visual demonstration, NOT the confirmed anniversary deadline.
- **Do not publish today.** Alex must first agree to the preferred edumindset.ro domain cost, currently 12 EUR plus VAT/year directly from RoTLD. No domain purchase, registration or public deployment is authorized in this checkpoint.
- The user will verify contacts on **14 November 2026**, relative to the message on 13 November. This is a note, not a scheduled reminder.
- Workshop details/registration, film, UnitED scheduling, downloadable resources and other optional content remain deferred until after website publication.

## Implemented preview

**Un an. Un nou capitol.** A red and paper educational sketchbook cover, with founder collage, original pen drawings, live countdown, and a short daily question producing a personal Story image.

- Separate route: **countdown.html**. The accepted website remains **index.html**. Both are built by Vite. The preview does not replace the homepage.
- Current local review server: http://127.0.0.1:4176/countdown.html?theme=light . Dark preview uses ?theme=dark. A local URL is not a published website.
- Exact logo red #e85448, established Bricolage type, charcoal/paper, source-derived Alex cutout with its existing provenance. No new generated photograph or font dependency.
- Phone composition places the timer directly below the title. Desktop pen entrance, restrained native scroll depth, manual pause and reduced-motion fallback. Functional text/digits stay still.
- Timer uses an absolute timestamp and recalculates against the current clock. Hidden tabs suspend scheduled updates and recover on return. No negative countdown or invented new deadline after expiry.
- **Vezi momentul lansării** previews the ready state and can return to counting. The ready state links to the full website. No automatic public deployment, redirect or site access restriction is configured.
- Daily questions are selected by the Romanian calendar day. The visitor's answer stays in memory, with no account, collection, submission or persistence. A 1080 × 1920 PNG is generated locally. Native file sharing is progressive enhancement; download remains the fallback. The website does not post to Instagram.
- The page is explicitly marked as a design preview with a demonstrative date, and has noindex/nofollow. Before any public launch, replace mock labels/date, finalize copy and metadata and select the actual publication flow.

## Unresolved before publication

The candidate anniversary is 25 November. Confirm the original anniversary date, target year and exact launch hour with Alex. The mock time does not settle these decisions or prove a founding date of 25 November 2025.

Confirm whether public visitors should see the countdown first and open the full site at the deadline, or whether the countdown should accompany an already-public full site. The current side-by-side local preview deliberately keeps both available for review. It is not a production release gate. Client-side timers alone do not protect unreleased content.

Review the visual concept, daily question wording and Story-card interaction. No follower-growth guarantee, fake audience counts, testimonials, live activity or leaderboard has been added.

## Domain and hosting

- First choice: **edumindset.ro**. Availability/ownership have not been checked or reserved.
- Official direct RoTLD registration and renewal price checked 13 November 2026: **12 EUR plus VAT per year**, not a free domain. Alex's agreement is pending. Source: https://www.rotld.ro/prices/
- Alternatives .com/.app also need paid availability/pricing checks; no zero-cost custom domain has been promised.
- Free static hosting is possible through Cloudflare Pages. A branded pages.dev subdomain may avoid a domain fee if its project name is available. No hostname is reserved. Sources: https://www.cloudflare.com/products/pages/ and https://developers.cloudflare.com/pages/get-started/direct-upload/
- Domain ownership should remain in the user's chosen account. Do not buy, transfer, register or publish merely because a preferred name is recorded here.

## Responsibilities

| Owner | Next action | Status |
| --- | --- | --- |
| User/Alex | Review the local countdown preview and choose any design/content adjustments. | Preview now implemented; review next. |
| User/Alex | Confirm anniversary date, year and exact Romanian launch hour. | Mock midnight is only for demonstration. |
| User/Alex | Agree to .ro cost including VAT and renewal, then choose host/account and confirm name availability. | No publication today. |
| User | Verify email/Instagram on 14 November 2026 and provide corrections. | Tomorrow's owner task, not an automation. |
| Next AI | Preserve the accepted full site and this separate preview; read HANDOFF and USER_TODO. | Required continuity. |
| Next AI | Act on the user's preview feedback, update the single mock timestamp plus visible date copy together after confirmation. | No guessed final deadline. |
| Next AI | After publication is explicitly resumed, configure the selected release flow, actual public URL/metadata, DNS/HTTPS and host headers; build the correct artifact and verify live. | Deferred. |
| User + next AI | Add workshop/film/UnitED/resources and optional form service when real material arrives after publication. | Deferred by user. |

## Artifacts and verification

The 12 November release ZIP is the accepted full website only. New dist contains both index.html and countdown.html. Neither archive is a countdown-first deployment package. Do not upload it as the planned public reveal without first configuring that flow and clearing the mock labels.

Current implementation/test/review evidence belongs in docs/countdown-preview.md and docs/countdown-review.md. Historical 12 November full-site verification remains docs/verification-current.md. No fresh Lighthouse or physical-phone certification is implied. Preserve the MINA video/render projects and all photographic provenance.
