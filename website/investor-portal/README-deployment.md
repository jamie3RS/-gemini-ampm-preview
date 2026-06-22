# AMPM Group · Investor Portal — Ghost deployment guide

This package turns your business plan into a **members-only investor portal** on the AMPM Group website (Ghost CMS), with **dynamic email watermarking** on every page so any leak is traceable.

URL: `https://ampm.co.uk/investors/` plus six section pages.

---

## What's in this folder

```
investor-portal/
├── README-deployment.md        ← you are here
├── preview.html                ← local preview (single-file demo, fully working)
├── investor-portal.css         ← portal-specific styles (nav, watermark, hub, pager)
├── theme/
│   ├── custom-investor.hbs     ← Ghost theme template — drop into your theme
│   ├── investor-portal.css     ← copy into theme assets
│   └── business-plan.css       ← copy into theme assets (typography for sections)
└── pages/
    ├── 00-hub.html             ← body for /investors/
    ├── 01-overview.html        ← body for /investors/overview/
    ├── 02-market.html          ← body for /investors/market/
    ├── 03-foundation.html      ← body for /investors/foundation/
    ├── 04-strategy.html        ← body for /investors/strategy/
    ├── 05-investment.html      ← body for /investors/investment/
    └── 06-risks-and-next-steps.html ← body for /investors/risks-and-next-steps/
```

---

## Deployment in 4 steps

### Step 1 — Add the template + CSS to your Ghost theme

Copy these three files into your `ampm-mothership` theme:

| From | To |
| --- | --- |
| `theme/custom-investor.hbs` | `ampm-mothership/custom-investor.hbs` |
| `theme/investor-portal.css` | `ampm-mothership/assets/css/investor-portal.css` |
| `theme/business-plan.css`   | `ampm-mothership/assets/css/business-plan.css` |

Then **re-zip and upload** the theme via Ghost Admin → **Settings → Design → Customise → Change theme → Upload**.

> If you're editing your theme directly on the server (or via the Ghost CLI), just commit the three files and reload the theme.

After upload, Ghost will list a new template under the page settings dropdown called **"Investor portal"**.

---

### Step 2 — Create the 7 pages in Ghost Admin

For each page, in Ghost Admin: **Pages → New page**.

| Page | Slug (in page settings) | Title | Body file |
| --- | --- | --- | --- |
| Hub | `investors` | AMPM Group · Investor portal | `pages/00-hub.html` |
| Overview | `investors/overview` | 01 · Overview | `pages/01-overview.html` |
| The market | `investors/market` | 02 · The market | `pages/02-market.html` |
| The foundation | `investors/foundation` | 03 · The foundation | `pages/03-foundation.html` |
| Strategy & platform | `investors/strategy` | 04 · Strategy & platform | `pages/04-strategy.html` |
| The investment | `investors/investment` | 05 · The investment | `pages/05-investment.html` |
| Risks & next steps | `investors/risks-and-next-steps` | 06 · Risks & next steps | `pages/06-risks-and-next-steps.html` |

For each page:

1. Click the **+** in the editor, choose **HTML** (the code card).
2. Open the corresponding file from `pages/` in any text editor.
3. Copy the **entire contents** and paste into the HTML card.
4. Open the right-hand **Page settings** panel (gear icon):
   - **Page URL / Slug:** set exactly as above (slashes are allowed — Ghost will nest the page under `/investors/`).
   - **Access:** set to **Members only**. ← **This is what gates the page.**
   - **Template:** select **"Investor portal"** from the dropdown.
   - **Excluded from collections:** tick if you have a posts collection, so these don't appear in any feed.
   - **Meta data → Meta robots:** add `noindex, nofollow` (the template also sets this in HTML).
5. Click **Publish → Publish**.

Repeat for all 7 pages.

> **Tip:** create the **Hub page first** — the other six link back to it, and you can use it to test the template renders correctly before you paste the rest.

---

### Step 3 — Configure membership

The "Members only" access setting on each page automatically shows Ghost's built-in **sign-in / sign-up portal** to non-members. You need to decide who gets in.

**Option A — Open sign-up + manual approval (simplest, recommended for low volume):**

1. Ghost Admin → **Settings → Membership → Subscription access**: keep set to **Anyone can sign up**.
2. When a prospective investor signs up, they land on Ghost's email confirmation page.
3. They are now a member, but until you add them to the right **label**, you may want to restrict.
4. **For tighter control**, switch **Subscription access** to **Only people I invite**. Then you invite each investor by email via Ghost Admin → **Members → Invite**.

**Option B — Invite-only (recommended for sensitive distribution):**

1. Ghost Admin → **Settings → Membership → Subscription access** → set to **Only people I invite**.
2. **Members → Invite member** → enter the investor's email → they receive a sign-in link.
3. To revoke later: **Members → [the member] → Delete member**.

Either way, each member is logged when they view any portal page (Ghost Admin → **Members → [member] → Activity**). You'll see who has read what and when.

---

### Step 4 — Test the watermark

1. Sign in as yourself (or as a test member) at `ampm.co.uk/investors/`.
2. You should see the **sticky nav at top**, the **hub page** with stats and 6 section cards, and a **faint diagonal watermark** across the page reading:

   ```
   YOUR-EMAIL@DOMAIN.COM  ·  AMPM GROUP CONFIDENTIAL  ·  2026-05-14
   ```

3. Sign out and visit `ampm.co.uk/investors/overview/` directly. You should be **redirected to Ghost's sign-in portal**.
4. On a clean device with a different test member, the watermark should show **that** member's email — confirming it's per-viewer.

---

## How updates work

The business plan lives in two places:

| File | Purpose |
| --- | --- |
| `business-plan/AMPM Group Business Plan.html` | The master document — single-file printable plan |
| `website/investor-portal/pages/*.html`        | Ghost-ready chunks of the same content |

When you want to update the portal:

1. Edit `business-plan/AMPM Group Business Plan.html` (this is your single source of truth).
2. The pages in `website/investor-portal/pages/` are derived from it. Either:
   - **Manual re-paste:** find the section you changed, copy the updated chunk into the matching `pages/*.html` file, then paste into Ghost Admin.
   - **Regenerate:** ask Claude to "re-port the business plan into the investor portal pages" and I'll regenerate all six page bodies in one go.

The Ghost template, watermark logic, and CSS don't need updates unless you change the structure.

---

## What the portal does and doesn't protect against

**What it does:**
- ✅ Gates access — only members you invite can read the plan
- ✅ Logs every visit — you see who read what and when (Ghost Admin → Members)
- ✅ Watermarks every page with the viewer's email — leaks are traceable
- ✅ Sets `noindex,nofollow` — invisible to search engines
- ✅ Blocks right-click and Ctrl/Cmd+P / Ctrl/Cmd+S as a mild deterrent

**What it doesn't do (browser limits, not Ghost limits):**
- ❌ Prevent screenshots — anyone can hold up a phone. The watermark is the defence.
- ❌ Prevent View Source / DevTools — a determined viewer can extract the HTML. The watermark stays on every page either way.
- ❌ Encrypt content at rest — Ghost stores page bodies in plain HTML in its database.

These are unavoidable in any browser-based viewer. The watermark + access log is the standard investor data-room threat model, used by VCs and M&A advisors for the same reason.

If you want **stronger** controls (encrypted view-only PDF, screen-shield blur, NDA gate before first read), use **DocSend**, **Digify**, or **Firmex** alongside this portal. Use the portal for narrative + always-current updates; use a VDR for the granular financial model and audit trail.

---

## Customisation hooks

A few things are easy to change without me regenerating files:

| What | Where |
| --- | --- |
| Watermark opacity | `investor-portal.css` → `.watermark { opacity: 0.07 }` |
| Watermark stamp text | `custom-investor.hbs` → `var stamp = ...` |
| Nav order or labels | `custom-investor.hbs` → `.ipnav-links` |
| Hub stats / hero copy | `pages/00-hub.html` |
| Section groupings | Regenerate via Claude — say which sections you want where |

---

## Troubleshooting

**"The template doesn't appear in the dropdown."**
→ Re-zip and re-upload the theme. Ghost only re-scans templates on upload.

**"The page renders but with no styles."**
→ Check the two CSS files are inside `ampm-mothership/assets/css/`. The template loads them via `{{asset "css/..."}}`.

**"The watermark says CONFIDENTIAL instead of an email."**
→ The viewer isn't signed in as a member. Either the page's Access setting isn't "Members only" (so Ghost isn't gating), or the member's session expired.

**"I want a single-password version instead of per-member."**
→ In Ghost Admin → page settings, switch **Access** from "Members only" to **Password protected** and set one password. The watermark will fall back to `CONFIDENTIAL` for all viewers (still better than nothing).

---

## Contact

Questions on deployment — happy to help. The preview at `preview.html` is the canonical reference for how the live site should look.
