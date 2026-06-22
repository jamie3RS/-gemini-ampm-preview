# Website — quickstart

Everything for the AMPM Group website lives in this folder.

## Read these first

| File | What it is |
|---|---|
| `PROJECT LOG.md` | The **living work log**. Updated every session. Read this first when picking up. |
| `Ghost Setup Guide.html` | Designed 10-step walkthrough for getting the site live on Ghost. |

## Folder map

```
website/
├── PROJECT LOG.md            ← living document — start here
├── README.md                 ← this file
├── Ghost Setup Guide.html    ← 10-step Ghost setup walkthrough
├── source/                   ← React/JSX prototype (current design source)
│   ├── AMPM Group Website.html       (v1 — kept for history)
│   ├── AMPM Group Website v2.html    (v2 — current; this is the design)
│   ├── AMPM Group Website (standalone).html  (bundled, hostable as-is)
│   ├── *.jsx                          (React components)
│   ├── styles.css                     (design tokens — colours, type)
│   ├── site.css                       (page layout)
│   └── ghost-theme.css                (publication layer)
├── ghost-theme/
│   └── ampm-mothership/      ← uploadable Ghost theme — see its own README
└── content-seed/
    └── *.md                  ← ready-to-paste content (case studies, insights, pages)
```

## Three things worth knowing

1. **`PROJECT LOG.md` is the source of truth for "where are we?"** It records every decision, every change, every next step. Claude updates it as work happens.

2. **`source/` is the design prototype, `ghost-theme/` is the production code.** When iterating on design, work in `source/`. When the design is ready, the change is ported into `ghost-theme/`.

3. **Going forward, all website work is filed here.** New page types, new content templates, new brand applications — all into `website/`. Nothing on the project root.
