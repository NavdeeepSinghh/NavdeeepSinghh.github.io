# 🚀 Navdeep Singh — Portfolio Deployment Guide

## Before you deploy

**Add your résumé PDF.** Two places link to `resume.pdf` (the hero button and the
contact section). Save your SDE résumé into the project root with exactly that name:

```
cp ~/Downloads/Navdeep_Singh_Resume_SDE.pdf ./resume.pdf
```

Without it, those two links 404. Everything else works as-is.

## File structure

```
NavdeeepSinghh.github.io/
├── index.html
├── resume.pdf          ← add this
├── Project.png         ← ICIPAIMAR certificate
├── PRoject_image.png   ← team photo
├── css/style.css
├── js/data.js          ← all content lives here
├── js/main.js
├── .gitignore
└── DEPLOY.md
```

---

## Deploy to GitHub Pages (free, recommended)

Your repo must be named **`NavdeeepSinghh.github.io`** — that exact name is what makes
GitHub serve it at the root domain.

From this folder:

```bash
git add -A
git commit -m "Portfolio: experience, journey, education, mobile pass"
git branch -M main
git remote add origin https://github.com/NavdeeepSinghh/NavdeeepSinghh.github.io.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `(root)` → Save.**

Live in ~1 minute at:

```
https://navdeeepsinghh.github.io
```

Every later `git push` redeploys automatically. Hard-refresh (⌘⇧R) if you don't see
changes — GitHub Pages caches aggressively.

### If the repo already exists on GitHub

Skip `remote add` and just:

```bash
git remote -v            # check what's already set
git push -u origin main
```

---

## Alternatives

**Netlify** — netlify.com → "Add new site" → "Deploy manually" → drag this whole folder in.
Free URL, plus a free custom subdomain.

**Vercel** — vercel.com → sign in with GitHub → New Project → import the repo. Auto-detects
a static site.

**Custom domain** — buy from Namecheap (~$10/yr for `.dev`), then point it at GitHub Pages
via Settings → Pages → Custom domain.

---

## Testing locally

Open `index.html` directly, or (better, so relative paths behave exactly like production):

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Check mobile with your browser's device toolbar (⌘⇧M in Chrome) at 375px width.

---

## Updating content

Almost everything is data-driven — **edit `js/data.js`**, not the HTML:

| Constant | Drives |
|---|---|
| `SEMESTER_STATS` | the animated counter band |
| `EDUCATION` | education cards in About |
| `EXPERIENCE` | the Experience section (BEL internship) |
| `RESEARCH` | the ICIPAIMAR paper spotlight |
| `PROJECTS` | project cards |
| `CONCEPTS` / `SHIFTS` | the "What Changed My Mind" section |
| `FIELD_NOTES` | the CNN comparison table |
| `JOURNEY` / `JOURNEY_CAPTION` | the timeline |
| `TAKEAWAYS` | the three takeaway cards |
| `SKILLS` | tech stack pills |
| `ACHIEVEMENTS` | highlights grid |
| `NOW_NEXT` / `CLOSING_QUOTE` | the "Where I'm Going" section |

Bio prose, the terminal `profile.json` card and contact links live in `index.html`.

### Adding a project

Append an object to `PROJECTS`. Optional fields:

- `github` / `demo` — URLs; omit or set `null` to hide that button
- `metric` + `badge` — `"conference"` (gold), `"accuracy"` (green), `"demo"` (orange)
- `status: "in-progress"` — dashed border and a blinking "Work in progress" badge
