# Copilot instructions — Ardhra's portfolio

Simple guide so any AI session can pick up where the last left off.

## What this is
A personal portfolio site built with **Astro** (static site). Deploys to GitHub Pages at
`https://ardhra7ms.github.io/`. Local dev: `npm run dev` → http://localhost:4321.

## 🔒 What NOT to publish (most important rule)
Everything in **`src/data/_source/`** is **confidential and gitignored** — Microsoft
performance Connects, colleagues' private feedback, raw notes. Also the root
`*.pdf` / `*.pptx` / `*.docx` files. **Never commit these. Never copy their raw
content into the public site.** Only *sanitized* wording that Ardhra has approved
may appear in `src/content/**`.

If you're unsure whether something is safe to publish, **ask Ardhra first.**

## Where the data is
- `src/data/_source/INDEX.md` — catalog of all the private source material (read this first).
- `src/data/_source/BACKLOG.md` — the full to-do list + projects still to add.
- `src/content/story/*.md` — personal story pages (published).
- `src/content/projects/*.md` — work case studies.
- `src/content/creative/*.md` — creative / academic projects.
- `public/files/` — images, PDFs, and other assets that DO ship with the site.

## How publishing works (the draft → publish switch)
Each content file has `draft:` in its frontmatter:
- `draft: true`  → hidden from the live site; its detail page shows **"coming soon."**
- `draft: false` → **published** and live.

To publish a page: edit its `.md`, set `draft: false`, commit to `main`.
GitHub Actions (`.github/workflows/deploy.yml`) rebuilds and deploys automatically.

Right now: **story pages are live**; **all case studies + creative projects are `draft: true`
("coming soon")** until Ardhra finishes editing each one. The Work index still lists them.

## How to help Ardhra edit
1. Check `src/data/_source/BACKLOG.md` for what she wants to add/finish.
2. When she picks an item, draft the content from the matching `_source` material —
   **sanitized**, in her voice — into the right `src/content/**` file.
3. Keep it `draft: true` until she approves, then flip to `draft: false`.
4. Update `BACKLOG.md` as things get done.

## Commands
| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server at :4321 |
| `npm run build` | Build to `./dist/` (run before pushing to catch errors) |
| `npm run preview` | Preview the built site |

## Site conventions
- Site red is `#e10600` (`--red`). Fonts + tokens live in `src/styles/global.css`.
- The floral background (`.page-bg`, driven by the `bg` prop in `Base.astro`) is on all
  pages **except** Skills (which uses a dark "fireflies" night canvas).
- Skills fireflies are pure CSS animation (no JS); labels are in `src/pages/skills/index.astro`.
- Verify visual changes with a real screenshot before saying they're done.
