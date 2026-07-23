# Saturn Textiles R&D — Portfolio Web Application

> **Official portfolio** of the Research & Development Department of **Saturn Textiles Limited**,
> showcasing innovations in smart textile automation, advanced materials, AI integration, and sustainability research.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0066?logo=framer)](https://www.framer.com/motion/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Architecture Guide](#-architecture-guide)
- [How to Update Content](#-how-to-update-content)
- [Spring Boot Backend Integration Plan](#-spring-boot-backend-integration-plan)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🌐 Overview

The Saturn Textiles R&D Portfolio is a **Next.js 16 App Router** single-page application with:

- A **single scrolling homepage** with distinct, anchor-linked sections (Home, About, Projects, News, Contact)
- A separate `/join` page for job applications
- Scroll-triggered animations powered by **Framer Motion**
- Forced **dark mode** with a premium deep-navy + electric-blue + orange design system
- **Data-driven content** for dynamic lists (team, projects, news) stored as typed TypeScript objects in `lib/data/`
- Fully responsive layout (mobile → desktop)
- SEO-ready metadata

---

## 🛠 Tech Stack

### Frontend (Current — Phase 1)

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | [Next.js](https://nextjs.org/) App Router | 16.2.6 |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5.7.3 |
| UI Library | [React](https://react.dev/) | 19 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) | ^4.3 |
| Animations | [Framer Motion](https://www.framer.com/motion/) | ^12 |
| Icons | [Lucide React](https://lucide.dev/) | ^1.16 |
| Analytics | [@vercel/analytics](https://vercel.com/analytics) | 1.6.1 |
| Package Manager | [pnpm](https://pnpm.io/) | — |

### Backend (Planned — Phase 2)

| Layer | Technology |
|-------|-----------|
| Backend | [Spring Boot 3](https://spring.io/projects/spring-boot) (Java 21) |
| Database | PostgreSQL |
| API | REST (Spring Web MVC) |
| Auth | Spring Security + JWT |

---

## 📁 Project Structure

```
saturn_rnd_portfolio/
│
├── app/                            # Next.js App Router — pages & layouts
│   ├── layout.tsx                  # Root layout (metadata, global CSS, providers)
│   ├── page.tsx                    # Homepage (/) — single scrolling page
│   ├── globals.css                 # Tailwind imports + CSS design tokens
│   ├── join_us/
│   │   └── page.tsx                # /join_us — job application form
│
├── components/
│   ├── layout/                     # Site-wide structural components
│   │   ├── Navbar.tsx              # Fixed top navigation with scroll-based active tracking
│   │   ├── Footer.tsx              # Site footer with contact info and branding
│   │   └── PageShell.tsx           # Reusable Navbar + content + Footer wrapper
│   │
│   ├── sections/                   # Homepage section components (rendered in order)
│   │   ├── Hero.tsx                # Hero headline, CTA buttons, hero image
│   │   ├── CapabilitiesSection.tsx # 4-column capability pillars
│   │   ├── AboutSection.tsx        # Mission / Vision / What We Do / Focus Areas
│   │   ├── LeadershipTeam.tsx      # Team member card grid (data from lib/data/team.ts)
│   │   ├── ProjectsSection.tsx     # Filterable project grid (data from lib/data/projects.ts)
│   │   ├── NewsSection.tsx         # Featured + recent news (data from lib/data/news.ts)
│   │   └── ContactSection.tsx      # Contact form (static in Phase 1; wired in Phase 2)
│   │
│   ├── ui/
│   │   └── badge.tsx               # Semantic pill badge (neutral/info/success/warning/danger)
│   │
│   └── providers/
│       └── ThemeProvider.tsx        # App-wide context provider stub (dark mode forced via HTML class)
│
├── lib/
│   ├── animations.ts               # Shared Framer Motion presets (fadeUp, fadeLeft, stagger)
│   ├── utils.ts                    # cn() class merger + formatDate() locale-safe helper
│   │
│   └── data/                       # ⚠️ DYNAMIC CONTENT LIVES HERE — edit to update the site
│       ├── team.ts                 # Team members & departments (used by LeadershipTeam.tsx)
│       ├── projects.ts             # Active & completed R&D projects (used by ProjectsSection.tsx)
│       └── news.ts                 # News & announcements (used by NewsSection.tsx)
│
├── public/                         # Static assets (served at root URL)
│   ├── saturn-logo.png
│   ├── saturn-image.png
│   ├── rahin-photo.png
│   └── ninad-photo.png
│
├── next.config.mjs                 # Next.js configuration
├── tsconfig.json                   # TypeScript configuration (strict mode)
├── postcss.config.mjs              # PostCSS / Tailwind pipeline
├── package.json                    # Dependencies & scripts
├── README.md                       # This file
└── PLAN.md                         # Development roadmap
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.17 or later ([download](https://nodejs.org/))
- **pnpm** v8 or later — install with `npm install -g pnpm`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mninadmnobo/saturn_rnd_portfolio.git
cd saturn_rnd_portfolio

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root:

```env
# Phase 1 — Frontend only. No environment variables required.

# Phase 2 — Uncomment and set when the Spring Boot backend is running:
# NEXT_PUBLIC_API_URL=http://localhost:8080
```

> **Never commit `.env.local`** — it is already in `.gitignore`.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start the Next.js development server with hot reload |
| `pnpm build` | Type-check + compile the production bundle |
| `pnpm start` | Start the production server (requires `pnpm build` first) |
| `pnpm lint` | Run TypeScript type-check across the entire project |

---

## 🏗 Architecture Guide

### Design Principle: Separation of Data and View

The codebase follows a clean separation between **dynamic data** and **static structure**:

| Type | Where it lives | Rationale |
|------|----------------|-----------|
| **Dynamic list content** (team, projects, news) | `lib/data/*.ts` | Frequently updated; typed interfaces enforce shape; easy to swap for API calls |
| **Static structural copy** (hero headline, about text, footer address) | Inline in the component JSX | Rarely changes; tightly coupled to layout; no benefit to abstracting |

This means:
- A developer adding a new team member only touches `lib/data/team.ts`
- A designer changing the hero headline edits `components/sections/Hero.tsx`
- TypeScript enforces the data shape — a missing required field is a compile error
- Phase 2: the data files are replaced by `fetch()` calls to the Spring Boot API

### Data Flow

```
lib/data/team.ts      ──▶  components/sections/LeadershipTeam.tsx  ──▶  app/page.tsx
lib/data/projects.ts  ──▶  components/sections/ProjectsSection.tsx  ──▶  app/page.tsx
lib/data/news.ts      ──▶  components/sections/NewsSection.tsx      ──▶  app/page.tsx
```

### Animation System

All scroll-triggered animations use presets from `lib/animations.ts`. Never hand-roll a new animation object — always use or extend the shared presets.

```tsx
import { fadeUpProps, fadeLeftProps, staggerContainer, fadeInUpVariants } from '@/lib/animations'

// Single independently animated element (e.g. inside .map()):
<motion.div {...fadeUpProps(index * 0.05)}>...</motion.div>

// Stagger pattern — parent container + child variants:
<motion.ul variants={staggerContainer()} initial="hidden" whileInView="visible">
  {items.map(item => (
    <motion.li key={item.id} variants={fadeInUpVariants}>...</motion.li>
  ))}
</motion.ul>
```

### Page Layout Pattern

The homepage (`/`) renders sections directly inside `app/page.tsx`.
The `/join` page uses `PageShell`, which wraps content with `Navbar` + `Footer`:

```tsx
import { PageShell } from '@/components/layout/PageShell'

export default function JoinPage() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* page content */}
      </div>
    </PageShell>
  )
}
```

If you add a new separate page, always wrap it with `PageShell`.

---

## ✏️ How to Update Content

All three data files are self-documented with "How to add" guides at the top.

| What to update | File to edit |
|----------------|-------------|
| **Team members** | [`lib/data/team.ts`](./lib/data/team.ts) |
| **R&D projects** | [`lib/data/projects.ts`](./lib/data/projects.ts) |
| **News & announcements** | [`lib/data/news.ts`](./lib/data/news.ts) |
| **Hero headline / description / CTAs** | [`components/sections/Hero.tsx`](./components/sections/Hero.tsx) |
| **Mission / Vision / About copy** | [`components/sections/AboutSection.tsx`](./components/sections/AboutSection.tsx) |
| **Capability pillars** | [`components/sections/CapabilitiesSection.tsx`](./components/sections/CapabilitiesSection.tsx) |
| **Footer address / phone / email** | [`components/layout/Footer.tsx`](./components/layout/Footer.tsx) |
| **Navigation links** | [`components/layout/Navbar.tsx`](./components/layout/Navbar.tsx) — edit `NAV_LINKS` |

---

## 🔌 Spring Boot Backend Integration Plan

The backend will be added as a `backend/` subdirectory in this monorepo (Phase 2).

### Planned REST API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `POST /api/contact` | POST | Receive and store contact form submissions |
| `POST /api/applications` | POST | Receive job applications (`multipart/form-data` with CV file) |
| `GET /api/projects` | GET | Serve projects list dynamically (replaces `lib/data/projects.ts`) |
| `GET /api/news` | GET | Serve news list dynamically (replaces `lib/data/news.ts`) |
| `GET /api/team` | GET | Serve team members dynamically (replaces `lib/data/team.ts`) |

### Frontend Integration Steps

1. Add `NEXT_PUBLIC_API_URL=http://localhost:8080` to `.env.local`
2. Replace `import { projects } from '@/lib/data/projects'` with `fetch(process.env.NEXT_PUBLIC_API_URL + '/api/projects')`
3. Implement `onSubmit` handlers in `ContactSection.tsx` and `app/join/page.tsx`
4. Add loading and error states to all data-fetching sections
5. Configure Spring Boot CORS to allow requests from `localhost:3000` (dev) and the production domain

### Running Both Services Locally (Phase 2)

```bash
# Terminal 1 — Spring Boot backend
cd backend
./mvnw spring-boot:run

# Terminal 2 — Next.js frontend
pnpm dev
```

---

## 🚢 Deployment

### Frontend (Vercel)

The frontend deploys automatically on every push to `main`:

1. Connect the GitHub repository to your Vercel project
2. Vercel auto-detects Next.js — no build configuration needed
3. Set environment variables in the Vercel dashboard (Phase 2: add `NEXT_PUBLIC_API_URL`)

For a manual production build:

```bash
pnpm build   # Verify build succeeds locally
pnpm start   # Test the production server locally
```

### Backend (Phase 2 — Planned)

The Spring Boot API will be deployed on a cloud provider (Railway, Render, or AWS EC2) with a managed PostgreSQL instance (Supabase, Railway, or RDS).

---

## 🤝 Contributing

### Branch Naming Convention

| Prefix | When to use |
|--------|-------------|
| `feature/` | New functionality |
| `fix/` | Bug fixes |
| `docs/` | Documentation updates only |
| `refactor/` | Code improvements with no behaviour change |

### Before Submitting a Pull Request

1. Run `pnpm lint` — must pass with zero errors
2. Run `pnpm build` — must compile successfully
3. Content-only changes (editing `lib/data/*.ts`) don't require a formal PR

### Component Guidelines

- Place UI primitives (badges, buttons) in `components/ui/`
- Place page-section components in `components/sections/`
- Place layout wrappers in `components/layout/`
- Every new file must include a JSDoc module comment explaining its purpose

---

*For inquiries or collaboration, reach out via the [contact section](http://localhost:3000/#contact) or email [saturn.rnd.innovation@gmail.com](mailto:saturn.rnd.innovation@gmail.com).*
