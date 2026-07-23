/**
 * PageShell — standard full-page layout wrapper for all routes except the homepage.
 *
 * Composes `Navbar` (fixed top) + a padded content area + `Footer`.
 * Use this on every non-homepage page to avoid repeating the layout boilerplate.
 *
 * @example
 * export default function JoinPage() {
 *   return (
 *     <PageShell>
 *       <div className="max-w-3xl mx-auto px-4 py-12">
 *         {/* page content *\/}
 *       </div>
 *     </PageShell>
 *   )
 * }
 *
 * @module components/layout/PageShell
 */
import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export interface PageShellProps {
  /** Page content rendered between the Navbar and Footer. */
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main>
      <Navbar />
      <div className="pt-28 min-h-screen">{children}</div>
      <Footer />
    </main>
  )
}
