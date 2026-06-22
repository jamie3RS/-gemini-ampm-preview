# Gemini AMPM — LOGO UPDATE for the live build

**For: Claude Code (building geminiampm.co.uk)**
**From: design**
**Date: June 2026**
**Priority: do this before more brand chrome goes in — it touches the header, footer, favicon and any logo usage.**

---

## TL;DR

We are **replacing the code-drawn logo with the real brand artwork.** Earlier mockups
rendered the "gemini AMPM" lockup with CSS (a wordmark + four CSS-gradient circles with
letters typed in). The AMPM letters sat slightly off-centre and the font/gradients didn't
match the master. **Stop using the CSS recreation. Use the PNG assets in `./assets/`.**

If you have anything like this in the codebase, remove it:

```html
<!-- ❌ REMOVE: CSS recreation of the logo -->
<span class="glogo">
  <span class="glogo-word">gemini</span>
  <span class="glogo-ampm">
    <i style="--c:#E8742C">A</i><i style="--c:#3D8E2E">M</i>
    <i style="--c:#2E5FAB">P</i><i style="--c:#7A2E8F">M</i>
  </span>
</span>
```
…and the matching `.glogo / .glogo-word / .glogo-ampm` CSS. Replace with `<img>` (below).

---

## The assets (in `./assets/`)

| File | Contents | Wordmark colour | Use on | px | ratio |
|---|---|---|---|---|---|
| `gemini-logo.png` | full lockup **with** "Asset Management Planned Maintenance" strapline | grey (master) | **light** backgrounds | 1113×594 | 1.87:1 |
| `gemini-logo-rev.png` | full lockup with strapline | **cream** `#f4ead8` | **dark / night** backgrounds | 1113×594 | 1.87:1 |
| `gemini-logo-notag.png` | wordmark + roundels only (no strapline) | grey | **light**, compact (header, cards, doc headers, favicon source) | 1113×516 | 2.16:1 |
| `gemini-logo-notag-rev.png` | wordmark + roundels only | **cream** | **dark**, compact (header on dark, cards) | 1113×516 | 2.16:1 |
| `GEMINI_AMPM_RGB-master.png` | the original client master (reference only) | grey | — keep for regenerating at higher res | 1136×606 | 1.87:1 |

All are transparent PNGs, trimmed to the artwork (no padding). The **roundels are the
client's exact artwork** in every file — never recolour or rebuild them.

> Prefer SVG in production. If you can get/trace a vector master, use it. Until then these
> trimmed PNGs are the source of truth and are crisp to ~2× their on-screen size. The
> header logo is small, so consider exporting a 2×/3× PNG from the vector once available.

---

## Which variant where

- **Site header / nav:** `notag` (compact). Pick the colourway by background:
  - over the dark hero / night sections → **`-notag-rev.png`** (cream)
  - over a light/white nav (e.g. light theme, or solid white sticky header) → **`-notag.png`** (grey)
- **Footer:** dark background → **`gemini-logo-rev.png`** (full, with strapline — there's room).
- **Favicon / social / app icon:** crop a single roundel or the wordmark from `notag`; or supply a square master.
- **Email signature / documents:** see the stationery pack — light docs use `gemini-logo.png`, the small business-card uses `-notag-rev.png`.

**Rule of thumb:** light surface → grey-wordmark file; dark surface → `-rev` (cream-wordmark) file. Roundels are identical across both.

---

## Implementation

### Option A — two images, CSS swaps by context (matches the mockup)

Because the wordmark must be grey on light and cream on dark, ship **both** and let CSS
show the right one. This is what the design mockup does.

```html
<a class="logo" href="/" aria-label="Gemini AMPM — Asset Management, Planned Maintenance">
  <img class="logo--light" src="/assets/gemini-logo-notag.png"     alt="Gemini AMPM" />
  <img class="logo--dark"  src="/assets/gemini-logo-notag-rev.png" alt="" aria-hidden="true" />
</a>
```

```css
.logo img { display:block; height:30px; width:auto; }   /* size by height */
.logo .logo--dark { display:none; }
/* show the cream version when the header is over a dark background */
.header--on-dark .logo .logo--light { display:none; }
.header--on-dark .logo .logo--dark  { display:block; }
```

Toggle `.header--on-dark` on the header however the build already tracks "nav over a dark
section" (IntersectionObserver or scroll handler). In the mockup the whole site is
night-themed, so the header is on-dark by default and the cream logo is the common case.

### Option B — single image (simpler, if the header background is consistent)

If your header always has the same background, just use the one correct file:

```html
<a href="/" class="logo">
  <img src="/assets/gemini-logo-notag-rev.png" alt="Gemini AMPM" height="30">
</a>
```

> **Always size the logo by `height` with `width:auto`** so the aspect ratio is preserved.
> Don't set both width and height. Don't stretch.

---

## Clear-space & don'ts

- Keep clear space around the lockup ≈ the height of one roundel.
- **Do not** recolour, re-order or restyle the roundels (orange A · green M · blue P · purple M = Asset · Management · Planned · Maintenance).
- **Do not** re-typeset the wordmark or re-draw the circles in CSS.
- The only sanctioned recolour is the **wordmark + strapline → cream** for dark backgrounds, which is already baked into the `-rev` files.

---

## How the `-rev` and `-notag` files were derived (so you can regenerate from the master)

From `GEMINI_AMPM_RGB-master.png`:

1. **Reversed (cream wordmark):** recolour only the greyscale pixels (the wordmark +
   strapline) to cream `#f4ead8`; leave saturated pixels (the roundels) and near-white
   pixels (the letters inside the roundels) untouched. Rule used:
   `if (saturation < 30 && max(r,g,b) <= 215) → #f4ead8`.
2. **No-strapline crop:** crop to the bounding box of everything **above** the strapline
   (the strapline starts ~y=540 in the 606-tall master; crop 0–525), then trim transparent edges.
3. All files are then trimmed to the artwork bounding box.

If you produce a vector master later, regenerate all four treatments from it at higher
fidelity and drop the PNGs.

---

## Brand context (so the logo sits right)

- **Colours:** night `#0b0e1c` · warm paper `#fdfaf2` · cream text `#f4ead8` · ink `#1c1812` · amber accent `#E8742C`. Meridian: orange `#E8742C` / green `#3D8E2E` / blue `#2E5FAB` / purple `#7A2E8F`.
- **Type:** Big Shoulders Display (headlines), Archivo (body), JetBrains Mono (labels/contact data). Quicksand + Fredoka are **logo-only** — don't use them for UI text.
- **Identity:** night-led ("we keep watch", PM→AM). Fire & security, employee-owned (EOT), est. 1997.

Questions → ping design. Thanks!
