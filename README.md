# Saturn Textiles — Marketing Site

A Next.js (App Router) marketing site for Saturn Textiles: a homepage plus
content pages for research, projects, news, achievements, gallery, and the
leadership team.

## Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript**, strict mode
- **Tailwind CSS v4**, theme driven by CSS custom properties (`app/globals.css`)
- **framer-motion** for scroll-triggered entrance animations
- **lucide-react** for icons
- **next-themes** for the light/dark toggle

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```

## Project structure

```
app/                     Routes (App Router). Each subpage follows the same
                          PageShell + PageHeader + content pattern.
components/
  layout/                Navbar, Footer, PageShell, PageHeader
  sections/              Homepage sections (Hero, Statistics, LeadershipTeam)
  cards/                 ProfileCard and other content cards
  ui/                     Small, generic, reusable primitives (Badge, Button, FormField)
  providers/             ThemeProvider
lib/
  data/                  All page content — the only place you should need
                          to touch to add or edit content (see below)
  animations.ts          Shared framer-motion presets
  icons.ts               Typed icon name → lucide-react component registry
  utils.ts               `cn()` class-name helper
```

## How to add content

Every content page reads from a plain, typed array in `lib/data/`. **You do
not need to touch any page or component to add an entry** — just add an
object to the relevant array. Each file has a "How to add a new X" doc
comment at the top with a copy-pasteable example; the quick reference is
below.

| Content | File | Notes |
|---|---|---|
| Team member / leadership | `lib/data/team.ts` | First member of the first department renders as the featured hero card (e.g. Managing Director); the rest render in a grid beneath it. |
| Research area | `lib/data/research.ts` | `icon` must be a name registered in `lib/icons.ts`. |
| Project | `lib/data/projects.ts` | `status` drives the badge color (`active` → success, `planning` → warning, `completed` → info). |
| Future / roadmap project | `lib/data/futureProjects.ts` | `priority` drives the badge color + icon (`critical` → danger, `high` → warning, `medium` → info). |
| Achievement stat | `lib/data/achievements.ts` | `icon` must be a name registered in `lib/icons.ts`. |
| News post | `lib/data/news.ts` | Set `featured: true` to show it in the "Featured" grid instead of the regular list. |
| Gallery item | `lib/data/gallery.ts` | `width`/`height` (1 or 2) control how many grid cells the tile spans. |
| Tech stack category | `lib/data/techStack.ts` | Add a category, or push a string onto an existing category's `technologies`. |

**Adding an icon that isn't registered yet:** import it in `lib/icons.ts`
and add it to `iconRegistry`. Data files reference icons by name (e.g.
`icon: 'Leaf'`) typed against that registry, so a typo is a compile error
instead of a silently-missing icon.

## Building a new page

Use `PageShell` + `PageHeader` instead of re-declaring the navbar/footer
boilerplate:

```tsx
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'

export default function ExamplePage() {
  return (
    <PageShell>
      <PageHeader title="Example" description="One sentence describing the page." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* page content */}
      </div>
    </PageShell>
  )
}
```

For entrance animations, use the helpers in `lib/animations.ts` rather than
writing a new `{ initial, whileInView, transition }` object:

```tsx
import { motion } from 'framer-motion'
import { fadeUpProps } from '@/lib/animations'

{items.map((item, idx) => (
  <motion.div key={item.id} {...fadeUpProps(idx * 0.05)}>...</motion.div>
))}
```

For statuses, priorities, categories, or tags, use `<Badge>`
(`components/ui/badge.tsx`) instead of a one-off `<span>` — it has five
theme-aware tones (`neutral`, `info`, `success`, `warning`, `danger`) so new
badges automatically look correct in both light and dark mode.

## Theming

All color is driven by CSS custom properties defined once in
`app/globals.css` (light values under `:root`, dark values under `.dark`).
Components should reference the semantic Tailwind tokens (`bg-secondary`,
`text-muted-foreground`, `border-border`, `bg-chart-4`, etc.) rather than
hardcoded colors (`bg-blue-500`) or raw `dark:` overrides, so everything
re-grades correctly when the theme changes. `next-themes` toggles the
`.dark` class on `<html>`; see `components/providers/ThemeProvider.tsx`.

## Adding a UI primitive

Shared, generic building blocks (used by more than one page) live in
`components/ui/`. Page- or section-specific components live next to what
uses them (`components/sections/`, `components/cards/`). If you find
yourself copy-pasting a chunk of markup across two or more pages, that's
the signal to extract it into `components/ui/` instead.
