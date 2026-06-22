# AMPM Group — Mothership theme

A custom Ghost theme for AMPM Group Limited. Holds the AMPM publication architecture: holding-company brochure, six subsidiary detail pages, work (case studies) and insights (long-form editorial).

---

## What this theme contains

```
ampm-mothership/
├── package.json
├── routes.yaml                    ← upload separately in Ghost Admin → Labs → Routes
├── default.hbs                    ← base layout (loaded into every page)
├── index.hbs                      ← home page (hero + counters + featured)
├── post.hbs                       ← post router (routes by tag to case-study or insight)
├── page.hbs                       ← generic fallback page
├── tag.hbs                        ← /topic/{slug}/ archive
├── author.hbs                     ← /author/{slug}/ archive
├── error.hbs                      ← 404 page
├── custom-companies.hbs           ← /companies/ index
├── custom-company.hbs             ← single subsidiary detail (assigned per page)
├── custom-approach.hbs            ← /approach/
├── custom-people.hbs              ← /people/
├── custom-contact.hbs             ← /contact/
├── custom-work.hbs                ← /work/ collection index
├── custom-insights.hbs            ← /insights/ collection index
├── partials/                      ← reusable bits
│   ├── header.hbs
│   ├── footer.hbs
│   ├── meridian-bar.hbs
│   ├── newsletter.hbs
│   ├── work-card.hbs
│   ├── insight-card.hbs
│   ├── post-case-study.hbs        ← single case-study layout
│   ├── post-insight.hbs           ← single insight layout
│   └── post-default.hbs           ← non-tagged post fallback
└── assets/
    ├── css/main.css               ← combined: tokens + site + publication
    └── js/main.js                 ← reveal-on-scroll, counters, nav, members form
```

---

## Content schema — what each post / page needs

### Case studies — Ghost Posts tagged `case-study`

| Field in Ghost editor | What it controls |
|---|---|
| Title | The case study headline (used in the dark header + listings) |
| Custom excerpt | The deck — 1-2 line summary under the title |
| **Primary tag = `case-study`** | **Required.** Routes the post into the /work/ collection. |
| Second tag = lead company | e.g. `Gemini AMPM` — shows in the meta strip and on cards |
| Additional tags | Sector + services — used in the meta strip and on the Work index filter chips |
| Feature image | Cover photo — full-bleed under the dark header |
| Body (markdown) | The narrative — uses ## H2 section headings for Brief / Approach / Outcome, > for pull quotes, lists for metrics and credits |

**Markdown body convention** (free to deviate, this is the default the CSS expects):

```markdown
## The brief
{paragraph text}

## The approach

### Phase 01 — Intrusive survey
{paragraph}

### Phase 02 — Sequenced remediation
{paragraph}

> "The pull quote text goes here."
> — Director of Estates

## The outcome
{paragraph}

## Metrics
- **14,200+** assets onboarded to the live register
- **3,800** compartmentation penetrations surveyed
- **11 mo** from kick-off to audit-ready handover
- **0** remedials at first BSA inspection

## Credits
- **Lead company:** Gemini AMPM
- **Project team:** L. Woodford, R. Gemmel, P. Fitzpatrick
- **Frameworks:** Building Safety Act 2022, BS 9999
- **Operating stack:** Uptick, Procore, M365
```

### Insights — Ghost Posts tagged `insight`

| Field in Ghost editor | What it controls |
|---|---|
| Title | The insight title |
| Custom excerpt | The deck — 1-2 line dek under the title |
| **Primary tag = `insight`** | **Required.** Routes into the /insights/ collection. |
| Second tag = topic | e.g. `Procurement` — used in meta strip + filter chips |
| Author | The byline (and avatar if uploaded) — shows in the editorial header |
| Author bio | The role line under the byline (e.g. "Chair, AMPM Group") |
| Feature image | Optional cover; renders below the title with caption support |
| Body (markdown) | Long-form editorial — ## H2 headings, > blockquotes, ![alt](url) images, **bold**, etc. |

### Static pages — Ghost Pages with assigned templates

Create these as Pages (Admin → Pages → New page) with the slug AND template noted:

| Page slug | Template to assign | Contents |
|---|---|---|
| `home` | (none — uses `index.hbs`) | The body of the Ghost Page itself is unused; content is in `index.hbs`. |
| `approach` | Approach | Body field optional — appended after the 5 principles. |
| `companies` | Companies | Body field optional — appended after the 6 tiles. |
| `people` | People | Body field optional — appended after the team grid. |
| `contact` | Contact | Body field optional — appended after the email block. |
| `work` | Work | Body field optional — appended above the listing (or leave blank). |
| `insights` | Insights | Body field optional — appended above the listing. |

### Subsidiary detail pages — Ghost Pages with `Company` template

One per subsidiary (Gemini AMPM excluded — it links externally):

| Page slug | Title (editable) | Tag for status |
|---|---|---|
| `ampm-building-services` | AMPM Building Services | `status-yr1` |
| `ampm-facilities` | AMPM Facilities | `status-future` |
| `ampm-live` | AMPM Live | `status-future` |
| `ampm-ventures` | AMPM Ventures | `status-future` |
| `ampm-academy` | AMPM Academy | `status-future` |

In each, set:
- **Title** — company name
- **Custom excerpt** — the deck (1-2 line summary, dark header)
- **Tag** — one of `status-live` / `status-yr1` / `status-future`
- **Template** — Company
- **Feature image** — optional, full-bleed cover photo
- **Body** — markdown content with `## 01 · Overview`, `## 02 · What we do`, etc. (mirrors the structure from the prototype). The article-body CSS handles the rendering.

---

## Routes — `routes.yaml`

After uploading the theme, upload `routes.yaml` separately:

> Ghost Admin → Labs → Routes → **Upload routes file** → pick `routes.yaml`.

This wires:
- `/` → home (template `index`)
- `/approach/`, `/companies/`, `/people/`, `/contact/` → custom templates above
- `/work/` → collection of posts tagged `case-study`, permalink `/work/{slug}/`
- `/insights/` → collection of posts tagged `insight`, permalink `/insights/{slug}/`
- `/companies/{slug}/` → subsidiary pages (works via Pages with `Company` template)
- `/topic/{slug}/` → tag archives
- `/author/{slug}/` → author archives

---

## Newsletter

The theme uses Ghost's **Members** system natively. The `<form data-members-form>` in `partials/newsletter.hbs` is intercepted by Ghost — emails are added to your Members list automatically.

To turn on:
> Ghost Admin → Settings → Membership → enable

The "Mothership briefings" copy in the form can be edited directly in `partials/newsletter.hbs`.

---

## Editing copy

| What | Where |
|---|---|
| Home hero headline / deck | `index.hbs` (lines ~10–20) |
| Home counters | `index.hbs` (lines ~25–45) |
| Approach 5 principles | `custom-approach.hbs` |
| Companies tile copy | `custom-companies.hbs` (each tile is its own `.company-tile` block) |
| Subsidiary detail content | The Ghost Page body for that subsidiary (markdown editor) |
| People list | `custom-people.hbs` (each `.person` block) |
| Footer accreditations | `partials/footer.hbs` (the `.trust-chip` list) |
| Newsletter copy | `partials/newsletter.hbs` |

---

## Re-uploading

After any change to the theme files, repack the folder:

```
zip -r ampm-mothership.zip ampm-mothership/
```

Then in Ghost Admin → Settings → Design → upload the new zip.

Keep the **theme in a Git repo** for proper version control. Auto-deploy to Ghost(Pro) via GitHub Action is recommended for ongoing work.

---

## Need help?

This theme is co-authored with Claude. To iterate:

1. Describe the change you want
2. Claude updates the relevant `.hbs` or `.css` file
3. Re-zip and upload to Ghost
4. Site updates in seconds

Bug reports, content drafts, new page types — all the same workflow.

---

© 2026 AMPM Group Limited
