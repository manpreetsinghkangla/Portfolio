# Manpreet Singh — Research Portfolio

Next.js 14 (App Router) + React 18 + TypeScript. Dark-first, with a theme switch (Auto / Light / Dark; Auto follows the browser setting). No UI library, no animation dependency: reveals use IntersectionObserver and the hero is a lightweight canvas that pauses off-screen and respects `prefers-reduced-motion`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # optional
```
Requires Node.js 18.18+ . The first build downloads Google Fonts (Space Grotesk, JetBrains Mono), so it needs internet access.

## Build for hosting
```bash
npm run build      # static site is written to ./out
```
`output: "export"` makes this a plain static site with no Node server needed.

### Hostinger (shared hosting)
1. `npm run build`
2. In hPanel → File Manager (or FTP), open `public_html` and upload **the contents of `out/`** (not the folder itself).
3. Point your domain to that site. Done; no Node setup required.

### Vercel
Push this folder to GitHub, import the repo at vercel.com, and deploy with the defaults (Framework: Next.js).

### GitHub Pages (project site)
Set `NEXT_PUBLIC_BASE_PATH=/your-repo-name` before `npm run build`, then publish `out/` (add an empty `out/.nojekyll` file).

## Project structure
```
app/            layout.tsx (SEO metadata, fonts, theme bootstrap), page.tsx, globals.css, icon.svg
components/     Navbar, ThemeToggle, Hero, HeroCanvas, About, Research, ResearchPipeline,
                Projects, Publications, Background (education + experience + achievements),
                Skills, NextChapter, Contact, ContactForm, CVButton, CVModal, Effects
data/           profile.ts (links, CV path), pipeline.ts (research stages + status), skills.ts
public/cv.pdf   the CV served by the View/Download button
```

## Updating content
- Links, email, CV path: `data/profile.ts`. Replace `public/cv.pdf` to update the CV (keep the file name).
- Research pipeline stages and their Implemented / Ongoing / Planned status: `data/pipeline.ts`.
- Skills: `data/skills.ts`.
- Text for About, Research, Projects, Publications, Education, Experience, Achievements: edit the matching file in `components/`.
- Add a project: copy an `<article className="pj">` block in `components/Projects.tsx`. Replace the SVG stand-in with an image in `public/` when you have a figure. Add a GitHub link only once the repository is public.
- Publications: update the status badge in `components/Publications.tsx` only when the status really changes (SUBMITTED, ACCEPTED, PUBLISHED). Add DOI links when available.
- Colours and spacing: CSS variables at the top of `app/globals.css`.

## Notes
- The contact form opens the visitor's email client (`mailto:`); there is no backend.
- SEO: title, description, keywords and Open Graph tags are in `app/layout.tsx`. Add `public/og.png` and an `images` entry in `openGraph` for link-preview images.
