# Kanvi Panchal — Developer Portfolio (Foundation)

This is the **foundation pass** of the full-stack portfolio: complete folder
architecture, design system, theming, routing, reusable components, and a
fully built Home page — plus real content on About / Experience / Skills /
Projects / Client Work / Contact, pulled from the resume. Deeper pages
(Blog, Testimonials, GitHub activity, full CMS admin) are scaffolded and
ready to be filled in next, exactly as the brief asked to build
foundation-first.

## Structure

```
portfolio/
├── frontend/   React 19 + Vite + Tailwind v4 + Framer Motion + React Router
└── backend/    Node.js + Express + MongoDB (Mongoose) + JWT auth
```

## Design system

- **Palette** — near-black canvas (`#0b0c0f`) with a signal-violet accent
  (`#6e56cf`) and an amber highlight, switchable to a light theme.
- **Type** — Outfit (display), Inter (body), JetBrains Mono (tags, data,
  the terminal-styled hero).
- **Signature element** — the monospace "code object" hero intro and
  `TechTag` pills, tying the whole UI back to "written by a developer."
- All tokens live in `frontend/src/styles/index.css` as CSS variables, so
  swapping the palette later is a one-file change.

## Running locally

**Frontend**
```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

**Backend**
```bash
cd backend
cp .env.example .env   # fill in MONGO_URI, JWT_SECRET, email creds
npm install
npm run dev             # http://localhost:5000
```

The frontend's `Contact` page posts to `VITE_API_BASE_URL` (defaults to
`http://localhost:5000/api`) — copy `frontend/.env.example` to `.env` too.

## What's built vs. scaffolded

| Area | Status |
|---|---|
| Folder architecture (frontend + backend) | ✅ Complete |
| Design system / theming (dark + light) | ✅ Complete |
| Routing for every page in the brief | ✅ Complete |
| Reusable UI kit (Button, Card, Badge, Input, TechTag, Heading...) | ✅ Complete |
| Home, About, Experience, Skills, Projects, Client Work, Contact | ✅ Built with real resume content |
| Blog, Testimonials, GitHub, Resume pages | 🟡 Scaffolded, static placeholder content |
| Backend: contact inquiries + admin auth + Project CRUD | ✅ Complete, MongoDB-ready |
| Backend: ClientWork / Blog / Testimonial / Settings CRUD | 🟡 Models done, routes/controllers follow the `projectRoutes.js` pattern |
| Admin dashboard UI | 🟡 Layout + nav done, CRUD screens not wired to API yet |
| GitHub API integration, Cloudinary uploads, SEO meta/sitemap | ⬜ Not started |

## Next steps (page by page, per the brief)

1. Wire `ClientWork`/`Blog`/`Testimonial` routes+controllers (copy the
   `Project` pattern) and swap the frontend's static `data/*.js` files for
   `services/*.js` API calls.
2. Build out the Admin CRUD screens against those endpoints.
3. Add the GitHub API integration for the GitHub page.
4. Add `react-helmet-async` (or similar) for per-page dynamic meta tags,
   plus a sitemap/robots.txt generation step.
5. Confirm and fill in the real details for the six unconfirmed client
   sites in `frontend/src/data/clientWork.js`.

This project is a strong candidate for **Claude Code**, since the remaining
work is many iterative, testable steps (wiring APIs, running a real Mongo
instance, verifying pages in a browser) rather than a single generated
artifact.
