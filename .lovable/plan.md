
# Laxman Acharya — Portfolio Build Plan

A single-page, dark, editorial-tech portfolio with calm motion, contour-line texture, and a handcrafted feel. All copy, links, and data come straight from the brief — nothing invented.

## Design Direction

- **Palette**: deep ink background (near-black with a cool tint), warm bone/ivory foreground, single restrained accent (muted amber/saffron — a nod to Nepal without clichés), plus a cool slate for secondary surfaces. Defined as oklch tokens in `src/styles.css`.
- **Typography**: editorial serif display (Instrument Serif) for headlines + a precise sans (Geist / Inter Tight) for body + JetBrains Mono for labels, repo names, timestamps. Loaded via `<link>` in `__root.tsx` (not `@import` in CSS).
- **Texture**: subtle SVG topographic contour lines and a faint dotted grid as background layers. Thin 1px hairline dividers. Generous whitespace, asymmetric section headers (small mono eyebrow + serif title).
- **Motion**: section reveal on intersect (opacity + 8px rise), animated SVG node-map in hero (slow stroke-dash on connector lines, gently pulsing nodes), hover lifts on cards. No parallax, no particles, no 3D.
- **Identity per project card**: each card gets a unique mono "glyph block" in the corner (language/accessibility waveform, health pulse, C++ braces, finance bars) so cards don't look identical.

## Page Structure

```text
__root.tsx          fonts + meta + shell
routes/index.tsx    assembles all sections
```

Sections (all in `src/components/portfolio/`):

1. `HeroSection` — name, subhead, support copy, 4 CTAs, 5 status chips, animated SVG system-map visual, contour backdrop.
2. `AchievementTimeline` — vertical cinematic timeline (desktop) / stacked cards (mobile). Renders `AchievementCard` from a data array. Achievement 2 includes a stat row (120+ / 20 / Kathmandu / Digital public goods). Achievement 3 includes team pills.
3. `SelectedWork` — `ProjectCard` grid (2 cols desktop, 1 col mobile), each with title, type, description, tech pills, year, GitHub link, contextual case-study button label ("Coming Soon" / "Add Details Later").
4. `GithubRepos` — live fetch from `https://api.github.com/users/laxmanacharya8/repos?sort=updated&per_page=6`. Skeleton loaders, error state, fallback to static project list on failure. Terminal-dashboard feel with mono labels, star/fork/language chips, "Updated Mon YYYY" formatting.
5. `SkillsSection` — 5 grouped cards (Programming, Frontend, Backend/Database, Tools, Areas) each with mono label, one-line description, chips, and a small abstract SVG mark.
6. `ContactSection` (also footer) — heading, copy, 3 buttons (mailto, GitHub, LinkedIn), footer line.

## Data

Single source of truth in `src/data/portfolio.ts`:
- `achievements: Achievement[]`
- `projects: Project[]`
- `skillGroups: SkillGroup[]`
- `socials` (email, github, linkedin)

## GitHub Integration

- Client-side `useEffect` fetch with `AbortController`.
- States: `loading` (6 skeleton cards) → `success` (live repos) → `error` (inline message + "Showing selected work instead" + render project fallback inside the same section).
- Safe field access: `repo.description ?? ''`, `repo.language ?? null`, `stargazers_count`, `forks_count`, `updated_at` → `Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })`.
- No auth, no token. Cached in component state for the session.

## Technical Notes

- TanStack Start v1: keep `__root.tsx` shell intact, only edit `routes/index.tsx` (replace placeholder) — no new routes needed (single-page brief).
- Tailwind v4: tokens via `@theme inline` in `src/styles.css`; fonts loaded via `<link>` in root head; never `@import` URLs in CSS.
- Semantic tokens only (no `text-white`, no `bg-black`, no arbitrary hex in components).
- shadcn `Button` + `Badge` reused with custom variants where helpful; everything else hand-rolled to avoid generic shadcn vibes.
- Lucide icons used sparingly (Github, Linkedin, Mail, ArrowUpRight, Star, GitFork).
- All external links: `target="_blank" rel="noreferrer"`.
- SEO: update `routes/index.tsx` `head()` with Laxman-specific title, description, og tags.
- No backend, no Lovable Cloud (brief is fully static + public GitHub API).

## Files to Create / Modify

Create:
- `src/data/portfolio.ts`
- `src/components/portfolio/HeroSection.tsx`
- `src/components/portfolio/SystemMap.tsx` (animated SVG)
- `src/components/portfolio/ContourBackdrop.tsx`
- `src/components/portfolio/AchievementTimeline.tsx`
- `src/components/portfolio/AchievementCard.tsx`
- `src/components/portfolio/SelectedWork.tsx`
- `src/components/portfolio/ProjectCard.tsx`
- `src/components/portfolio/GithubRepos.tsx`
- `src/components/portfolio/SkillsSection.tsx`
- `src/components/portfolio/ContactSection.tsx`
- `src/components/portfolio/SectionHeader.tsx` (shared eyebrow/title)
- `src/hooks/useReveal.ts` (IntersectionObserver reveal)

Modify:
- `src/styles.css` — new dark palette tokens, mono/serif/sans font tokens, contour utility.
- `src/routes/__root.tsx` — add Google Fonts `<link>` entries, update default meta to Laxman.
- `src/routes/index.tsx` — replace placeholder; compose all sections; add proper `head()`.

## Quality Pass Before Finishing

- Remove anything that feels template: extra hero CTA buttons beyond the 4, generic "Get started" copy, identical-looking cards, default shadcn button styling on hero.
- Check mobile layout for every section (chips wrap, timeline collapses, project grid stacks).
- Verify contrast, focus rings, and that all 4 CTAs + 3 achievement link buttons + 4 project GitHub links + 3 contact buttons are present and correct.
