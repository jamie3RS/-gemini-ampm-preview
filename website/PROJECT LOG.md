# AMPM Group — Website project log

**A living document.** Updated every time we do work in this project. If you've been away from this for a week (or a month), start here.

**Last updated:** 15 May 2026
**Project owner:** Jamie Dawson (Chair, AMPM Group)
**Working pattern:** Jamie + Claude (this conversation). All work happens in this Claude project; final outputs are filed into `Documents/Claude Projects/AMPM Group/website/`.

---

## Where we are right now

| | |
|---|---|
| **Phase** | Build complete · ready for Ghost upload |
| **Live site** | Not yet — staging.ampm.co.uk planned |
| **Hosting** | Ghost(Pro) — to be set up by Jamie |
| **Status** | Theme + content seed + setup guide produced. Jamie working through guide. |
| **Next move (Jamie)** | Step 1 of `Ghost Setup Guide.html` — sign up for Ghost(Pro) |
| **Next move (Claude)** | On standby for any setup-blocking questions, or new work as commissioned |

---

## What we've built so far

### 1. The interactive prototype — `website/source/`

A working React/JSX site you can navigate end-to-end in the Claude preview. Everything below is live in `AMPM Group Website v2.html`:

- **Home** — dark hero, four-counter row (6 companies / £10m Y1 / £20m Y3 / 100% EOT), companies teaser, Approach teaser, latest insights
- **Companies** — 6-tile grid (Gemini AMPM external link + 5 subsidiary detail pages), simplified structure diagram ("How the group fits")
- **Approach** — 5 principles + capability matrix (filterable by company)
- **Work** — case studies index (featured + grid + sector filter chips), 8 case studies seeded
- **Case study post template** — dark editorial header with meta strip, three-phase narrative pattern, full-bleed pull quote, big-number metrics row, credits block, related work, CTA
- **Insights** — publication index (featured + grid + topic chips), 7 insights seeded
- **Insight article template** — light editorial header with byline + reading time, long-form serif prose body, inline pull quote, image-with-caption, newsletter inline, related insights
- **People** — team grid + "Growing the next layer" section (Academy/careers preview)
- **Contact** — 5 direct email routes (bids / ventures / hello / press / careers) + subsidiary emails
- **5 subsidiary detail pages** — Building Services, Facilities, AMPM Live, Ventures, Academy. Each has Overview / What we do / Who we work with (or equivalent) / CTA.
- **Tweaks panel** — runtime palette swap (4 sets), hero variant, density, type scale, show counters/trustees, people scope

### 2. The Ghost theme — `website/ghost-theme/ampm-mothership/`

A complete, uploadable Ghost theme that mirrors the prototype:

- 11 Handlebars templates: `default`, `index`, `post`, `page`, `tag`, `author`, `error`, plus custom templates for `companies`, `company`, `approach`, `people`, `contact`, `work`, `insights`
- 8 partials: `header`, `footer`, `meridian-bar`, `newsletter`, `work-card`, `insight-card`, `post-case-study`, `post-insight`, `post-default`
- Combined `main.css` (38KB — tokens + site layout + publication layer)
- `main.js` (reveal-on-scroll, counter animation, nav active-state, Members form feedback)
- `routes.yaml` (URL structure for /work, /insights, /companies, etc.)
- `package.json` (Ghost theme metadata)
- `README.md` (content schema reference)

### 3. Content seed — `website/content-seed/`

9 markdown files ready to paste into Ghost on day one:
- **2 case studies** — London teaching hospital BSA remediation, Mayfair Cat-B fit-out
- **2 insights** — Jamie on PPN 06/20 & EOT social value, Dan on Building Safety Act & golden thread
- **5 company detail pages** — one per subsidiary (BS / Fac / Live / Ventures / Academy)

Each file has a frontmatter block telling Jamie exactly what to set in the Ghost editor (tags, custom excerpt, author, template).

### 4. Setup guide — `website/Ghost Setup Guide.html`

Designed, 10-step walkthrough for setting up Ghost(Pro), uploading the theme, creating pages, connecting the domain, password-protecting the site, and going live. Estimated time: 3–4 hours first pass.

---

## Decisions made (so we don't relitigate them)

| Decision | Made when | Rationale |
|---|---|---|
| **Ghost as the CMS** | 12 May 2026 | Jamie already uses Ghost on another site. For a publication-heavy mothership, Ghost is sized right — 90% of the Sanity+Next.js stack value at 10% the complexity. |
| **AMPM Live (not Gemini Live)** | 12 May 2026 | Jamie's call — AMPM Live is a group-level portal across all subsidiaries, not Gemini-branded. Built on Uptick's client layer with AI assistant. Renamed in 11 places across the project. |
| **Dan Small as MD of the Group** | 12 May 2026 | Promoted from "MD · Gemini AMPM" to "MD · AMPM Group" — covers Gemini AMPM and wider trading subs as they stand up. |
| **Luke Finney as Commercial Director, Group** | 12 May 2026 | From "Co-owner" framing to active "Commercial Director · AMPM Group" role. |
| **Seller-of-EOT narrative dropped from bios** | 12 May 2026 | Jamie + Luke bios no longer mention being Sellers in the EOT transition. They lead with the group role + 20-year Gemini tenure. |
| **EOT trustee company removed from structure diagram** | 12 May 2026 | The Gemini AMPM EOT box was sitting beside the holding company on the structure diagram — Jamie asked to fold it into the Gemini AMPM node ("Trading · EOT"). EOT trustee names live in the node detail text. |
| **AMPM Ventures actively invites approaches** | 12 May 2026 | Strap updated to "Acquisition vehicle · Acqui-hire · Open to approaches". Detail page invites owners-of-fit to email `ventures@ampm.co.uk`. |
| **Home counters tell the trajectory** | 12 May 2026 | Replaced "13 accreditations / £2m year-one target" with "£10m group year-one consolidated / £20m three-year plan". Accreditations strip stays in footer. |
| **Office fit-out + Planned maintenance as sectors** | 12 May 2026 | Added to Work index sector filter. Mayfair Cat-B fit-out case study written as the first office fit-out example. |
| **Academy positioned as people-pipeline + external authority** | 12 May 2026 | Internal apprenticeships + skills + prof-dev + accreditation, external training prospectus from Q3 2027. "Growing the next layer" preview lives on the People page until Academy gets its own page. |

---

## Open questions / decisions pending

- [ ] **Domain plan** — `staging.ampm.co.uk` for review; later move to apex `ampm.co.uk` or `www.ampm.co.uk`?
- [ ] **Password protection** — Ghost private mode (single password) vs Cloudflare Access (allowlist by email). Setup guide covers both; default suggested = private mode first, upgrade to Cloudflare closer to launch.
- [ ] **Analytics** — Plausible (£14/mo, GDPR-clean) vs Fathom (similar) vs Google Analytics (free but cookie-banner cost). Setup guide recommends Plausible.
- [ ] **Editorial calendar** — cadence not yet committed. Suggested: 1 case study every 2 weeks + 1 insight every 2 weeks = 4 published items/month, ~50/year.
- [ ] **Press / News / Careers pages** — not yet templated. Decide if needed before launch.
- [ ] **Long-term theme dev** — happy with Claude-supported iteration, OR bring in a Ghost theme developer to polish + extend? Setup guide assumes Claude-supported for now.

---

## Suggested next moves, in order

### Immediately (Jamie, this week)
1. Sign up for Ghost(Pro) Starter (~£9/mo) at `ghost.org/pricing`
2. Pack `website/ghost-theme/ampm-mothership/` into a `.zip` and upload to Ghost Admin → Design
3. Upload `website/ghost-theme/ampm-mothership/routes.yaml` to Ghost Admin → Labs → Routes
4. Create the 7 static pages (Approach, Companies, People, Contact, Work, Insights, Home) + 5 subsidiary pages (per setup guide Step 5)
5. Paste 4 seed posts (2 case studies, 2 insights) into Ghost editor
6. Connect `staging.ampm.co.uk` via DNS CNAME (per setup guide Step 7)
7. Enable Ghost private mode with a password; share with internal reviewers

### Within 4 weeks
- First 4 published case studies live (1/week)
- First 4 published insights live (1/week)
- Members signup wired to a real welcome email
- Plausible analytics installed
- Internal review pass: tone, copy, layout tweaks (commissioned back to Claude)

### Before public launch (target: Q3 2026)
- Move from staging subdomain to apex `ampm.co.uk`
- Disable private mode
- Submit sitemap to Google Search Console
- Cloudflare Access switched on for any still-private pages
- Newsletter list seeded with team + initial trusted reviewers

---

## What lives where in this project

```
[project root]
├── README.md                        ← this project's top-level orientation
├── website/                         ← everything for the AMPM Group website
│   ├── PROJECT LOG.md               ← THIS FILE — the living work log
│   ├── README.md                    ← website-specific quickstart
│   ├── Ghost Setup Guide.html       ← designed 10-step setup walkthrough
│   ├── source/                      ← React/JSX prototype (current design source)
│   │   ├── AMPM Group Website.html              (v1)
│   │   ├── AMPM Group Website v2.html           (v2 — current)
│   │   ├── AMPM Group Website (standalone).html (bundled, hostable as-is)
│   │   ├── *.jsx                                (React components)
│   │   ├── styles.css                           (design tokens)
│   │   ├── site.css                             (layout)
│   │   └── ghost-theme.css                      (publication layer)
│   ├── ghost-theme/
│   │   └── ampm-mothership/         ← uploadable Ghost theme
│   └── content-seed/
│       └── *.md                     ← ready-to-paste content for Ghost
├── business-plan/                   ← PE investment memorandum (designed)
│   ├── AMPM Group Business Plan.html
│   ├── business-plan.css
│   └── styles.css
├── strategic-artefacts/             ← the trustee-facing strategic deck (frozen)
│   ├── AMPM Group Strategic Artefacts.html
│   ├── AMPM Group Strategic Artefacts Deck.html
│   └── *.jsx                        ← artefact components
├── screenshots/                     ← reference screenshots
└── uploads/                         ← user-uploaded reference material
```

---

## How to read this log in future sessions

When you open this project on Claude after time away:

1. **Read this file first** — gives you the state, the decisions, the next moves
2. **Open `website/Ghost Setup Guide.html`** if you're still mid-setup
3. **Open `website/source/AMPM Group Website v2.html`** to see the live prototype
4. **Open `website/ghost-theme/ampm-mothership/README.md`** for content-schema reference (what tags/fields each post type needs)
5. **Tell Claude where you're picking up from** — e.g. "I've got Ghost(Pro) set up and the theme uploaded. Walking through step 5 now and I'm stuck."

Claude will update this log every time we do work. Look for the date in the header — if it's old, ask Claude what's happened since.

---

## Update history

### 15 May 2026 — AMPM Building Services website built
- New top-level folder `building-services-website/` for the AMPM Building Services site. Sister to the AMPM Group site (`website/source/`) — same design tokens (`styles.css`), same type system, same meridian palette — but a distinct Building Services treatment.
- **Sister-site differences:** green meridian lead (default `#3D8E2E`, deeper than the meridian green for readability), trades-functional voice over editorial, audience-led routes on the homepage, transparent accreditation status table on Services (in / planned / held), capability-example placeholders on Work (no stock photography), `tbc` portrait state on About for the Operations Manager hire.
- **Five pages built:** Home (hero → counters → services overview → three audience routes → Group context dark band → closing green CTA), Services (5-line detail blocks + accreditations + insurance + CTA), About (4 design principles + Phase 1/2 parallel-track → leadership grid → CTA), Work (4 capability cards with hand-built SVG placeholders + honest note + Group track-record context), Contact (4 direct lines — tenders / hello / suppliers / careers — + registered details).
- **Tweaks panel:** hero variant (3 options), lead colour (5 options including the AMPM orange and blue), show/hide counters, group-badge prominence, type scale.
- File layout: `building-services-website/AMPM Building Services Website.html` (entry), `bs-site.css` (sister-site styles), `bs-components.jsx` (header, footer, brand mark, group badge, reveal hook, counter, capability SVGs), `bs-pages.jsx` (Home + Services), `bs-pages-2.jsx` (About, Work, Contact), `tweaks-panel.jsx` (copy of the shared starter).
- Domain: `ampmbuilding.services` (purchased 15 May 2026; replaces the earlier `ampmbuildingservices.co.uk` placeholder across both the Building Services site and the AMPM Group contact page).

### 15 May 2026 — AMPM Building Services launch plan designed
- Jamie produced a launch business plan for AMPM Building Services Limited (`uploads/ampm-building-services-plan.docx`) — operational/board-facing, not investor-facing. 11 sections, ~20k chars.
- Built a designed HTML version at `business-plan/AMPM Building Services Launch Plan.html`, sharing the Group BP's CSS (`styles.css` + `business-plan.css`) so the two docs sit side-by-side with one design system.
- Treatment specifics: same cover/running-head/contents pattern as the Group BP, but with three doc-specific design moves — (1) a subbrand line under the cover brand reading "Building Services" + a small entity-badge with a green meridian dot, to differentiate visually from the Group doc without forking the palette; (2) a two-column Phase 1 / Phase 2 card block in Section 04 to show the parallel GTM tracks at a glance; (3) a four-column timeline lane component in Section 08 (when / action / owner / flag) for the 90-day plan, with coloured flags for priority / gate / target / critical hire. Risks table uses inline likelihood/impact dots in oxblood/mustard/moss.
- Content faithful to the docx end-to-end, with minor structural lifts: 90-day table reformatted as a clean timeline (gates highlighted), risk likelihood/impact promoted to coloured indicators, decision-required framing pulled forward into a `warn`-tone highlight on the executive summary so it reads as a board-facing ask not a pitch.
- Print-friendly via the existing `@page A4` rules; Cmd+P → save as PDF for the board pack.

### 14 May 2026 — Cross-check after Jamie's business plan revision
- Jamie confirmed the business plan has been finalised. Refreshed Claude's memory of the latest version (`uploads/ampm-group-business-plan22.docx` — v22, May 2026) and cross-checked every downstream artefact in the project.
- **Business plan HTML** (`business-plan/AMPM Group Business Plan.html`) — in sync with v22. £20m two-component facility, 49% Gemini stake from EOT, £4.1m seller loan note settlement, andwis competitor analysis, FY25 actuals (£8.4m / ~£989k EBITDA / 11.7% margin), FY26 H1 trading-update + recovery narrative, acqui-hire mechanics, three-year targets (FY27 £12–14m → FY29 £25–30m), exit thesis (£21–24m EV at 7–8× on £3m). No edits required.
- **Investor portal** (`website/investor-portal/preview.html`) — in sync with v22. Same numbers, same structure, same narrative across the six sections (Hub / Overview / Market / Foundation / Strategy / Investment / Risks & next steps). No edits required.
- **Public website prototype** (`website/source/`) — by design, carries no investor-confidential figures (no Component A/B, no 49%, no seller loan note, no andwis comparison). The high-level positioning (27-year foundation, EOT advantage, six-company group structure, AMPM Live as technology layer, Academy as people pipeline + IP licensing arm, Ventures as acquisition vehicle) matches the BP narrative. Home counters (£10m year-one consolidated / £20m three-year) are a conservative public framing vs. the BP's internal FY27 £12–14m / FY29 £25–30m targets — defensible. No edits required.
- **Ghost theme + content seed** (`website/ghost-theme/`, `website/content-seed/`) — no BP-specific numbers anywhere; nothing to drift. No edits required.
- **Strategic artefacts deck** (`strategic-artefacts/`) — frozen per the 12 May entry; left untouched.
- One small public-website tweak applied to lean on the BP's foundation narrative: home counters changed from `6 companies / £10m year-1 / £20m 3-yr / 100% EOT` to `27 yrs since 1997 / 13+ accreditations / £25–30m 3-yr plan / 100% EOT`. Reasoning: surfaces the BP's heritage + trajectory story (continuous trading since 1997, the accreditation stack, the three-year group plan) on the public face, without disclosing any investor-confidential figures (no EBITDA, no deal structure, no client-level revenue). The 6-companies / year-one consolidated framing is still discoverable on the Companies page and in the structure diagram.
- Net conclusion: the BP v22 is now the single source of truth, and the artefact stack downstream of it is consistent. One small public-counter refresh applied; no other content edits required.

### 13 May 2026 — Business plan rebranded
- Took Jamie's `ampm-group-business-plan.docx` (Word doc — functional but visually flat) and built a properly designed investment memorandum at `business-plan/AMPM Group Business Plan.html`.
- Cover page (dark, meridian-branded), running brand header, 13 sections, big-number stat rows, polished financial tables (positive green / negative oxblood), pull-quote highlight panels (with a warn variant for the H1 trading transparency note), full-bleed dark band for the investment ask, 3-column meta-strip for the contact block.
- Print-friendly: `@page A4` rules, page-break-before on each section, color-adjust:exact for the dark elements. Cmd+P → save as PDF gives a clean board-pack output.
- Stored in `business-plan/` alongside `styles.css` (tokens) and `business-plan.css` (doc-specific layout).
- All content preserved verbatim from the Word doc — same facts, same numbers, same H1 trading transparency. Visually elevated to investment-memorandum quality, not slide-deck-quality.

### 12 May 2026 — Project filed into `/website/`, log started
- Reorganised the project: all website-related work consolidated into `website/`. Strategic-deck files moved to `strategic-artefacts/`.
- Added this living log as `website/PROJECT LOG.md`.
- Final state of website + Ghost theme + content seed + setup guide: complete. Awaiting Jamie's Ghost upload.

### 12 May 2026 — Earlier in the same session
- Built Ghost theme (`ampm-mothership`) — 11 templates, 8 partials, combined CSS, routes config, README
- Built content seed: 2 case studies, 2 insights, 5 company pages
- Built designed Setup Guide HTML (10-step walkthrough)
- Renamed Gemini Live → AMPM Live across the entire project (11 places)
- Added Office fit-out + Planned maintenance as sectors on Work index; wrote Mayfair fit-out case study
- Simplified Companies structure diagram (folded EOT trustee into Gemini AMPM node)
- Updated home page counters (£10m Y1, £20m Y3)
- Expanded Academy positioning + added "Growing the next layer" section on People page
- Updated Jamie + Luke bios (group roles, dropped Seller narrative, added 20-year Gemini tenure)
- Promoted Dan Small to MD of AMPM Group
- Built 5 subsidiary detail pages (BS, Fac, Live, Ventures, Academy) with bespoke content per subsidiary
- AMPM Ventures now invites acquisition approaches via `ventures@ampm.co.uk`
- Built case-study + insight templates and listing pages (Work + Insights)
- Built v2 of the website with tweak controls (palette, hero, density, type scale, counters, trustees, people scope)

### (Earlier sessions) — pre-12 May
- Built v1 of the AMPM Group website (Home, Companies, Approach, People, Contact)
- Designed the meridian palette + shape system + tile architecture
- Wrote the Strategic Artefacts deck (now archived in `strategic-artefacts/`)
