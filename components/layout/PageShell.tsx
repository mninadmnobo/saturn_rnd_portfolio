import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export interface PageShellProps {
  children: ReactNode
}

/**
 * Standard wrapper for every top-level route except the homepage:
 * fixed `Navbar`, a full-height content area padded below the navbar,
 * and the `Footer`. Use this instead of re-declaring the
 * `<main><Navbar/>...<Footer/></main>` boilerplate on every page.
 *
 * @example
 * export default function AchievementsPage() {
 *   return (
 *     <PageShell>
 *       <PageHeader title="Achievements" description="..." />
 *       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
 *         ...page content...
 *       </div>
 *     </PageShell>
 *   )
 * }
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <main>
      <Navbar />
      <div className="pt-28 min-h-screen">{children}</div>
      <Footer />
    </main>
  )
}
