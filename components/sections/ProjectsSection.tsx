'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge, type BadgeTone } from '@/components/ui/badge'
import { projects, type Project } from '@/lib/data/projects'
import { fadeUpProps } from '@/lib/animations'
import { formatDate, cn } from '@/lib/utils'

const statusTone: Record<Project['status'], BadgeTone> = {
  active: 'success',
  planning: 'warning',
  completed: 'info',
}

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Ongoing' | 'Upcoming' | 'Completed'>('All')
  const filters = ['All', 'Ongoing', 'Upcoming', 'Completed'] as const

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Ongoing') return project.status === 'active'
    if (activeFilter === 'Upcoming') return project.status === 'planning'
    if (activeFilter === 'Completed') return project.status === 'completed'
    return true
  })

  return (
    <section id="projects" className="py-12 border-t border-slate-200 dark:border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500 uppercase">Our Innovations</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Pioneering the next generation of intelligent materials and sustainable textile solutions</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
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

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={project.id}
                className="p-6 rounded-xl bg-white dark:bg-[#0a1526]/60 border border-slate-200 dark:border-slate-800/60 hover:border-orange-500/50 hover:shadow-lg transition-all shadow-sm dark:shadow-none"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold flex-1 text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <Badge tone={statusTone[project.status]} capitalize>
                    {project.status}
                  </Badge>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-300">Progress</span>
                    <span className="text-xs text-orange-500 dark:text-orange-400 font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: idx * 0.05 + 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} tone="info">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Timeline */}
                <div className="text-xs text-slate-500">
                  Started {formatDate(project.startDate)}
                  {project.endDate && ` • Ended ${formatDate(project.endDate)}`}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
