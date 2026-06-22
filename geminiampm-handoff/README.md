# Gemini AMPM — Developer Handoff Pack

**Project:** renew **geminiampm.co.uk** on the new "night" design system **without losing SEO.**
**Audience:** Claude Code (and any developer) building the live WordPress site.
**Date:** June 2026 · **From:** design

---

## 0. Read in this order

1. **This README** — direction, tokens, build approach, open items.
2. **`LOGO-UPDATE.md`** + **`Logo Handoff.html`** — the logo change (do this first; it touches header/footer/favicon). Assets in `assets/`.
3. **`SEO-Migration-Map.html`** — the page-by-page URL inventory, redirect register and cutover checklist. **This governs the whole build.**
4. **The design prototype** — see §4. It is the visual spec; build to match it.

---

## 1. The goal in one paragraph

Gemini AMPM is the fire & security / life-safety company of AMPM Group. We're **re-skinning
the existing WordPress site** with a new night-led identity (sister to the AMPM Building
Services site). The single hard requirement: **keep the search ranking.** That means it is a
**theme/template re-skin inside the same WordPress install** — page IDs, slugs, permalinks,
SEO titles/meta and uploaded media all stay exactly as they are. We are changing how pages
*look*, not rebuilding the site tree. See `SEO-Migration-Map.html`.

---

## 2. Brand tokens

```css
/* Colour */
--night:      #0b0e1c;   /* primary dark surface */
--night-2:    #141a30;
--dusk:       #2b3558;
--paper:      #fdfaf2;   /* warm light surface */
--cream:      #f4ead8;   /* text/logo on dark */
--ink:        #1c1812;   /* text on light */
--accent:     #E8742C;   /* amber — the night accent (CTAs, kickers) */
/* Four-colour meridian (A·M·P·M = Asset · Management · Planned · Maintenance) */
--m-orange:   #E8742C;
--m-green:    #3D8E2E;
--m-blue:     #2E5FAB;
--m-purple:   #7A2E8F;
```

```
/* Type (Google Fonts) */
Display / headlines …… Big Shoulders Display (700/800, UPPERCASE, tight)
Body ……………………… Archivo (400–700)
Labels / data / meta … JetBrains Mono (UPPERCASE, letter-spaced)
Logo only ………………… Quicksand + Fredoka  ← never use for UI text
```

**Identity:** night-led — "we keep watch", the inverted PM→AM arc. Fire & security,
employee-owned (EOT), est. 1997. Recurring devices: the four-colour **meridian** bar, mono
**kickers** with a leading tick, big uppercase Big-Shoulders headlines.

---

## 3. Logo — see `LOGO-UPDATE.md`

Short version: **use the PNG artwork in `assets/`, not a CSS recreation.** Light (grey
wordmark) on light, `-rev` (cream) on dark, `-notag` crop for the compact header/cards.
Never recolour or rebuild the roundels. Prefer a vector master in production if you can get one.

---

## 4. The design prototype (visual spec)

The approved design lives in the project at **`geminiampm/`** (open
`geminiampm/Gemini AMPM Website.html`). It is a React-in-HTML prototype — treat it as the
**visual reference**, not code to ship. Map it to WordPress templates as follows:

| Prototype route | WordPress template | Live URL (preserve) |
|---|---|---|
| Home | front-page | `/` |
| Service pillar (×7) | page template | e.g. `/fire-alarm-evacuation-systems/` |
| Child service (~40) | **same** pillar template, no child-grid | e.g. `/…/fire-alarm-installation/` |
| Sector (×8) | page | `/sector/…/` |
| Services / Sectors / About / Why / Contact | page | existing slugs |
| News index + posts | archive + single | `/news-overview/`, post slugs at root |
| Casework | `case-studies-category/…` taxonomy | preserve term URLs |

Key UI behaviours to reproduce: sticky header that flips light↔dark over sections; the
home PM→AM arc (dusk → night → dawn handback); kicker + big-headline section pattern; the
meridian device; child-service pages reuse the pillar layout (one template, not forty).

> The prototype's `.jsx` files are readable if you want exact spacing/copy, but build with
> the real CMS + semantic HTML. Don't ship Babel-in-browser.

---

## 5. SEO rules (non-negotiable) — full detail in `SEO-Migration-Map.html`

- **Freeze every URL.** 7 pillars, ~40 child services, 8 `/sector/…/`, news, casework, system pages keep their exact slugs.
- **Preserve** SEO titles, meta descriptions, canonicals, H1s (keep the target keyword in H1 + first paragraph), XML sitemap, robots, schema, and the `llms.txt` / `llm-info` resources.
- **One intentional 301:** move `/passive-fire-systems/security-systems-remedial-works/` → `/security-access-control/security-systems-remedial-works/` (it was mis-filed under Passive Fire; it belongs under Security). Add a permanent redirect and update internal links.
- **Crawl first.** Run Screaming Frog on the live site and diff against the map so any page not listed inherits the right template and keeps its slug. Re-submit the sitemap after cutover and watch Search Console for 14 days.

---

## 6. Open items / needs from the client

- [ ] **Legal details** still `[tbc]` in stationery + footer: **company number, VAT number, registered office** (Companies House shows Hailsham; recent material shows Burgess Hill — confirm for NAP consistency / LocalBusiness schema).
- [ ] **Accreditation marks** to display — confirm exactly which are current (BAFE 302260, NSI Gold, FIRAS, CHAS Elite, Constructionline Gold, SafeContractor, Cyber Essentials, BESA, FIA, FPA, British Safety Council, Avetta).
- [ ] **Vector logo master** (SVG) — would supersede the PNGs for crisp rendering at all sizes.
- [ ] **Apprenticeships page** — in progress in the prototype; owner-led page on the apprenticeship programme. Will be added to the design before final handoff.
- [ ] Confirm the header **"Sectors"** destination (legacy site pointed it off-site).

---

## 7. What's in this pack

```
README.md                     ← you are here
LOGO-UPDATE.md                ← logo direction + recolour recipe
Logo Handoff.html             ← visual logo reference (light/dark, all 4 variants)
SEO-Migration-Map.html        ← URL inventory + redirects + cutover checklist
assets/
  gemini-logo.png             ← full lockup, grey wordmark (on light)
  gemini-logo-rev.png         ← full lockup, cream wordmark (on dark)
  gemini-logo-notag.png       ← compact, grey (header/cards, on light)
  gemini-logo-notag-rev.png   ← compact, cream (header/cards, on dark)
  GEMINI_AMPM_RGB-master.png  ← original client master (regenerate from this)
```

Design prototype (visual spec, in the project): **`geminiampm/`**.
Stationery & identity suite (separate pack): **`geminiampm-stationery/`**.

Questions → design. Thanks!
