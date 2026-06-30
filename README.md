# Laxman Acharya — Portfolio

A responsive personal portfolio for **Laxman Acharya**, a Computer Engineering student at
Kathmandu University building practical software across digital health, language accessibility,
civic technology, and public systems.

The website brings together my background, achievements, selected projects, GitHub activity, and
contact information in a dark-first editorial interface.

## Highlights

- Responsive hero designed for phones, tablets, laptops, and large screens
- Personal About section with original content
- Achievement timeline featuring HackForUHC, openIMIS, and Harvard Health Hackathon
- Continuously moving selected-work showcase
- Live project metadata synchronized from the GitHub API
- Portfolio-wide search overlay
- Dark theme by default with a persistent light/dark switch
- Direct links to email, GitHub, LinkedIn, and an externally hosted resume
- Responsive navigation and accessible interactive controls
- SEO and social-sharing metadata

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [Lucide React](https://lucide.dev/)
- [Nitro](https://nitro.build/) for the production server build

## Getting started

### Requirements

- Node.js 20 or newer
- npm

### Install and run

From the project directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run format` | Format the project with Prettier |

## Project structure

```text
src/
├── assets/                 # Portrait and local visual assets
├── components/
│   ├── portfolio/          # Portfolio sections and cards
│   └── ui/                 # Reusable interface components
├── data/
│   └── portfolio.ts        # Projects, achievements, and social links
├── hooks/
│   └── useGithubRepos.ts   # Live GitHub repository synchronization
├── routes/
│   ├── __root.tsx          # Document shell, metadata, and theme bootstrap
│   └── index.tsx           # Main portfolio page
└── styles.css              # Theme tokens, typography, motion, and utilities
```

## Updating portfolio content

Most portfolio information can be edited in:

```text
src/data/portfolio.ts
```

Use it to update:

- Achievements
- Featured projects
- Project technologies and descriptions
- Email, GitHub, and LinkedIn links

The About section is located at:

```text
src/components/portfolio/AboutSection.tsx
```

The resume link is configured in:

```text
src/components/portfolio/ContactSection.tsx
```

## GitHub synchronization

The selected-work section fetches public repository information from the GitHub API and matches
repositories with the projects defined in `src/data/portfolio.ts`.

This allows repository descriptions, primary languages, update years, and source links to stay
current without requiring a full content rewrite.

If GitHub is temporarily unavailable or rate-limited, the website falls back to the locally defined
project information.

## Production build

Create a deployable build with:

```bash
npm run build
```

The current TanStack Start configuration uses Nitro and targets a Cloudflare-compatible production
output. The generated files are written to `.output/`.

## Contact

- Email: [laxmanacharya8848@gmail.com](mailto:laxmanacharya8848@gmail.com)
- GitHub: [@laxmanacharya8](https://github.com/laxmanacharya8)
- LinkedIn: [laxmanacharya8848](https://www.linkedin.com/in/laxmanacharya8848)

---

Built in Kathmandu, Nepal.
