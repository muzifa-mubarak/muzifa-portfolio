# Muzifa Mubarak Ali — Portfolio

An interactive developer portfolio built with React, Vite, Tailwind CSS, and
Framer Motion. The visual theme is a LangGraph-style state-machine graph —
nodes, edges, and pulses — echoing the agentic AI work in the resume.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder anywhere static (Vercel, Netlify,
GitHub Pages, Cloudflare Pages).

## Editing content

Everything text-based — name, experience, projects, skills, education,
honors, and social links — lives in one file:

```
src/data/profile.js
```

Change the content there and every section updates automatically. No need
to touch component code for text edits.

### Important: update your real links

Open `src/data/profile.js` and replace the placeholder GitHub/LinkedIn URLs
in the `links` object with your actual profile URLs:

```js
links: {
  github: "https://github.com/YOUR-USERNAME",
  linkedin: "https://linkedin.com/in/YOUR-HANDLE",
  ...
}
```

## Project structure

```
src/
  data/profile.js       ← all content (edit here)
  components/
    NavRail.jsx          state-machine style section nav (left rail on desktop)
    Hero.jsx              intro + animated node graph + social CTAs
    NodeGraph.jsx          animated SVG LangGraph-style graph
    About.jsx              profile summary
    Experience.jsx         expandable timeline of roles
    Projects.jsx            filterable, expandable project cards
    Skills.jsx               tabbed skill groups
    Education.jsx            education + honors
    Contact.jsx               copy-to-clipboard email/phone + socials
    BrandIcons.jsx            GitHub/LinkedIn glyphs
  App.jsx
  index.css
```

## Deploying

**Vercel / Netlify:** connect the repo (or drag-drop the `dist/` folder after
`npm run build`) — both auto-detect Vite.

**GitHub Pages:** run `npm run build`, then push the `dist/` folder to a
`gh-pages` branch (or use the `gh-pages` npm package).
