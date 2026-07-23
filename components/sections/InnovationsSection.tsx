/**
 * InnovationsSection — filterable grid of R&D projects, shown on the homepage.
 *
 * Reads from `lib/data/projects.ts` (the single source of truth for project
 * data). Projects can be filtered by status using the tab buttons above the
 * grid. Framer Motion's `AnimatePresence` + `layout` prop handles the smooth
 * reflow animation when items enter/exit.
 *
 * ## How to add a project
 * Edit `lib/data/projects.ts` — do NOT hard-code project data here.
 *
 * ## Filter tabs
 * The `filters` array maps UI labels to `Project['status']` values.
 * If a new status is added to the `Project` type, add a corresponding
 * entry to `filters` and `statusTone` here.
 *
 * ## Progress bar
 * Each project card shows an animated width bar driven by `project.progress`
 * (0–100). The animation fires once when the bar scrolls into view.
 *
 * @module components/sections/InnovationsSection
 */
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge, type BadgeTone } from '@/components/ui/badge'
import { projects, type Project } from '@/lib/data/innovations'
import { fadeUpProps } from '@/lib/animations'
import { formatDate, cn } from '@/lib/utils'

/** Maps each project status to the appropriate Badge tone (color). */
const STATUS_TONE: Record<Project['status'], BadgeTone> = {
  active: 'success',
  planning: 'warning',
  completed: 'info',
}

/** UI filter labels and the project status they correspond to. */
const FILTERS = ['All', 'Ongoing', 'Upcoming', 'Completed'] as const
type FilterLabel = typeof FILTERS[number]

export const InnovationsSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterLabel>('All')

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Ongoing') return project.status === 'active'
    if (activeFilter === 'Upcoming') return project.status === 'planning'
    if (activeFilter === 'Completed') return project.status === 'completed'
    return true
  })

  return (
    <section id="innovations" className="py-12 border-t border-slate-200 dark:border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500 uppercase">Our Innovations</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Pioneering the next generation of intelligent systems and sustainable textile solutions</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                activeFilter === filter
                  ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20"
                  : "bg-transparent text-slate-600 border-slate-300 hover:border-orange-500 hover:text-orange-600 dark:text-slate-300 dark:border-slate-700 dark:hover:border-orange-400 dark:hover:text-orange-400"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="max-w-xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={project.id}
                className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0a1526] border border-slate-200 dark:border-blue-950/60 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] transition-all duration-300 shadow-xl dark:shadow-none flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500" />

                <div>
                  {/* Title & Status Badge */}
                  <div className="flex justify-between items-start gap-4 mb-4 pt-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <Badge tone={STATUS_TONE[project.status]} capitalize className="shrink-0 font-semibold px-3 py-1">
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-blue-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-blue-900/50 hover:border-orange-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 font-medium">
                    Started {formatDate(project.startDate)}
                    {project.endDate && ` • Ended ${formatDate(project.endDate)}`}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
