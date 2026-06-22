# AMPM Group — Claude project

This project holds the work Claude has produced for AMPM Group Limited. Two distinct deliverables:

## Folder layout

```
AMPM Group/
├── website/                      ← THE WEBSITE — active work
│   ├── PROJECT LOG.md            ← the living work log — read this first
│   ├── README.md                 ← website quickstart
│   ├── Ghost Setup Guide.html    ← designed 10-step setup walkthrough
│   ├── source/                   ← React/JSX design prototype
│   ├── ghost-theme/              ← uploadable Ghost theme
│   └── content-seed/             ← markdown content ready to paste into Ghost
│
├── business-plan/                ← BUSINESS PLAN HTML
│   ├── AMPM Group Business Plan.html             ← investment memorandum (PE-facing)
│   ├── AMPM Building Services Launch Plan.html   ← Year-1 subsidiary launch plan (board-facing)
│   ├── business-plan.css
│   └── styles.css
│
├── strategic-artefacts/          ← TRUSTEE-FACING STRATEGIC DECK — frozen
│   ├── AMPM Group Strategic Artefacts.html
│   ├── AMPM Group Strategic Artefacts Deck.html
│   └── (artefact components)
│
├── screenshots/                  ← reference screenshots
└── uploads/                      ← user-uploaded reference material
```

## Where to start

| If you are... | Open... |
|---|---|
| Picking up the website after time away | `website/PROJECT LOG.md` |
| Setting up Ghost for the first time | `website/Ghost Setup Guide.html` |
| Looking at the live design | `website/source/AMPM Group Website v2.html` |
| Editing the Ghost theme | `website/ghost-theme/ampm-mothership/` (+ its README) |
| Sharing the business plan with a PE partner | `business-plan/AMPM Group Business Plan.html` |
| Looking at the strategic deck | `strategic-artefacts/AMPM Group Strategic Artefacts.html` |

## How this maps to your local filesystem

This project is laid out to mirror the structure Jamie has on his local machine:

```
~/Documents/Claude Projects/AMPM Group/
  ├── website/        ← copy the website/ folder here
  └── strategic-artefacts/   ← copy the strategic-artefacts/ folder here
```

When Claude produces new artefacts for the website, they go into `website/`. When they're for the strategic deck, they go into `strategic-artefacts/`. Anything cross-project goes at the project root.

## Working pattern going forward

1. Jamie tells Claude what's needed
2. Claude produces / edits the artefact in the right folder
3. Claude updates `website/PROJECT LOG.md` with what was done
4. Jamie downloads the updated folder when he wants to back up to local

All ongoing work for **this** project happens in this Claude project.
