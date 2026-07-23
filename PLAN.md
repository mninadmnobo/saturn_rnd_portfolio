# Saturn Textiles R&D — Development Roadmap

> This is the living development roadmap for the Saturn Textiles R&D Portfolio.
> It tracks what has been built, what is in progress, and what is planned.
> Update this file whenever a significant milestone is completed or planned.

---

## 📊 Project Status Summary

| Phase | Description | Status | Target |
|-------|-------------|--------|--------|
| Phase 1 | Frontend Portfolio | ✅ Complete | Q2 2025 |
| Phase 2 | Spring Boot Backend API | 🔵 Planned | Q3–Q4 2025 |
| Phase 3 | Production Deployment & CI/CD | 🔵 Planned | Q4 2025 |
| Phase 4 | Admin Panel & CMS | 🔵 Future | 2026 |

---

## ✅ Phase 1 — Frontend Portfolio (Complete)

### Infrastructure & Configuration
- [x] Next.js 16 App Router project initialized with TypeScript
- [x] Tailwind CSS v4 configured with a custom design token system (dark navy + electric blue + orange)
- [x] Framer Motion integrated for scroll-triggered entrance animations
- [x] Vercel Analytics integrated (`@vercel/analytics`)
- [x] Dark mode enforced globally via `className="dark"` on `<html>`
- [x] SEO metadata (title, description, OpenGraph) on all pages
- [x] Proper `.gitignore` configured
- [x] `package.json` with correct project name, description, and homepage URL
- [x] `tsconfig.json` with strict mode enabled

### Design System
- [x] Global CSS design tokens (CSS custom properties for colors, spacing, typography)
- [x] Shared Framer Motion animation presets (`lib/animations.ts`) — `fadeUpProps`, `fadeLeftProps`, `staggerContainer`, `fadeInUpVariants`
- [x] `cn()` utility for conditional class merging (`lib/utils.ts`)
- [x] `formatDate()` utility with locale-pinned formatting (prevents React hydration mismatch)

### Reusable UI Components
- [x] `Badge` — semantic pill with 5 tones: neutral, info, success, warning, danger

### Layout Components
- [x] `Navbar` — fixed top bar, scroll-aware active section tracking, mobile responsive drawer
- [x] `Footer` — company logo, tagline, contact info (address with map link, phone, email)
- [x] `PageShell` — reusable `Navbar` + padded content area + `Footer` wrapper (used by `/join`)
- [x] `ThemeProvider` — context provider stub (dark mode is enforced at HTML level; documented with upgrade path)

### Homepage Sections (all on single scrolling `/` page)
- [x] `Hero` — headline, CTA buttons (Explore Projects, Meet the Team, Join), hero image with entrance animation
- [x] `CapabilitiesSection` — 4-column feature pillars with animated icon circles
- [x] `AboutSection` — Mission, Vision, What We Do, Focus Areas with connector-line layout
- [x] `LeadershipTeam` — featured MD card + engineer grid with responsibilities and social links
- [x] `ProjectsSection` — filterable project grid with animated progress bars and status badges
- [x] `NewsSection` — featured news grid + recent updates chronological list
- [x] `ContactSection` — contact form (static in Phase 1; Spring Boot integration in Phase 2)

### Pages
- [x] `/` — Homepage (single scrolling page with all sections above)
- [x] `/join` — Job application form (full name, email, phone, address, LinkedIn, GitHub, portfolio, motivation, CV upload)

### Data Layer (`lib/data/` — single source of truth for dynamic content)
- [x] `lib/data/team.ts` — `TeamMember` and `Department` interfaces + team data
- [x] `lib/data/projects.ts` — `Project` interface + R&D project list
- [x] `lib/data/news.ts` — `NewsItem` interface + news and announcements

### Code Quality
- [x] Removed all orphaned route pages (`/achievements`, `/gallery`, `/research`, `/tech-stack`, `/future-projects`)
- [x] Removed all unused data files (`achievements.ts`, `gallery.ts`, `research.ts`, `techStack.ts`, `futureProjects.ts`)
- [x] Removed unused UI components (`Statistics.tsx`, `ProfileCard.tsx`, `PageHeader.tsx`, `button.tsx`, `form-field.tsx`)
- [x] Removed unused npm dependencies (`@base-ui/react`, `class-variance-authority`, `next-themes`, `hono`)
- [x] Fixed contact form submit button (`type="button"` → `type="submit"`)
- [x] All component static arrays moved outside component functions (prevent re-creation on every render)
- [x] All form inputs have `id`, `name`, and `required` attributes as appropriate
- [x] All JSDoc file-level comments on every component and data file
- [x] `README.md` and `PLAN.md` fully written and up to date

---

## 🔵 Phase 2 — Spring Boot Backend API (Planned)

### Goal
Connect the frontend to a REST API so that:
- Contact and job application forms submit real data (stored in PostgreSQL, email notifications)
- Dynamic content (projects, news, team) can be updated without a code deployment
- Admin users can manage content through a secure API

### Backend Setup
- [ ] Initialize Spring Boot 3 project in `backend/` directory
  - Java 21, Maven build system
  - Dependencies: `spring-boot-starter-web`, `spring-boot-starter-data-jpa`, `spring-boot-starter-security`, `postgresql`, `lombok`
- [ ] Configure local PostgreSQL database (Docker Compose for dev environment)
- [ ] Configure CORS: allow `http://localhost:3000` in development, production domain in production

### REST API Endpoints to Build
| Endpoint | Method | Description |
|----------|--------|-------------|
| `POST /api/contact` | POST | Store contact form submission, trigger email notification |
| `POST /api/applications` | POST | Accept job application + CV file (`multipart/form-data`) |
| `GET /api/projects` | GET | Return full project list |
| `GET /api/news` | GET | Return news articles list |
| `GET /api/team` | GET | Return team members list |
| `POST /api/auth/login` | POST | Admin login → returns JWT |
| `PUT /api/projects/{id}` | PUT | Admin: update a project (protected) |
| `POST /api/news` | POST | Admin: create a news article (protected) |

### Frontend Integration Tasks
- [ ] Add `NEXT_PUBLIC_API_URL=http://localhost:8080` to `.env.local` and document in `README.md`
- [ ] `ContactSection.tsx` — add `handleSubmit` that POSTs to `POST /api/contact`
- [ ] `app/join/page.tsx` — add `handleSubmit` that POSTs to `POST /api/applications` as `multipart/form-data`
- [ ] `ProjectsSection.tsx` — replace `lib/data/projects.ts` import with `fetch(/api/projects)`
- [ ] `NewsSection.tsx` — replace `lib/data/news.ts` import with `fetch(/api/news)`
- [ ] `LeadershipTeam.tsx` — replace `lib/data/team.ts` import with `fetch(/api/team)`
- [ ] Add loading skeletons for all data-fetching sections
- [ ] Add error boundary / fallback UI for failed API calls

### Admin Authentication
- [ ] JWT-based login (`POST /api/auth/login`)
- [ ] Next.js `middleware.ts` to protect `/admin/*` routes
- [ ] Admin dashboard page with content management UI

---

## 🔵 Phase 3 — Production Deployment & CI/CD (Planned)

### Frontend (Vercel)
- [ ] Connect GitHub repository to Vercel project
- [ ] Configure custom domain
- [ ] Set production environment variables in Vercel dashboard

### Backend (Cloud)
- [ ] Deploy Spring Boot API to a cloud provider (Railway, Render, or AWS EC2)
- [ ] Set up managed PostgreSQL instance (Supabase, Railway, or RDS)
- [ ] Configure production CORS and environment variables

### CI/CD Pipeline (GitHub Actions)
- [ ] On every PR: run `pnpm lint` and `pnpm build`
- [ ] On merge to `main`: auto-deploy frontend to Vercel
- [ ] On every PR to `main`: build and test Spring Boot backend (`./mvnw verify`)
- [ ] Secrets management (GitHub Actions secrets for production credentials)

---

## 🔵 Phase 4 — Admin Panel & CMS (Future)

- [ ] Full admin dashboard UI (Next.js routes behind JWT middleware)
- [ ] Rich text editor for news article body content
- [ ] Image upload for team photos, gallery images, and news thumbnails
- [ ] Activity/audit log for all admin actions
- [ ] Analytics dashboard: form submissions, section traffic, project views

---

## 📝 Developer Notes

### How to Add a New Homepage Section
1. Create `components/sections/YourSection.tsx` with a JSDoc comment
2. Export a named component (e.g. `export const YourSection = () => { ... }`)
3. Import and render it in `app/page.tsx` in the correct position
4. If the section has a nav link, add an entry to `NAV_LINKS` in `Navbar.tsx`
5. If the section has dynamic list content, create `lib/data/yourSection.ts`

### How to Add a New Separate Page
1. Create `app/your-route/page.tsx`
2. Wrap content with `<PageShell>` to get Navbar + Footer
3. If there's a back link, add an `<ArrowLeft>` link to the homepage or parent page

### How to Add a New Team Member
Edit `lib/data/team.ts` — see the "How to add a new team member" guide at the top of that file.

### How to Add a New Project
Edit `lib/data/projects.ts` — see the "How to add a new project" guide at the top of that file.

---

*Last updated: July 2026*
