'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingUp, Zap } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { Badge, type BadgeTone } from '@/components/ui/badge'
import { futureProjects, type FutureProject } from '@/lib/data/futureProjects'
import { fadeLeftProps } from '@/lib/animations'

/** Update this list if a new `phase` value is added to `FutureProject` in lib/data/futureProjects.ts. */
const phases: FutureProject['phase'][] = ['Q3-2024', 'Q4-2024', '2025', '2026']

const priorityConfig: Record<FutureProject['priority'], { tone: BadgeTone; icon: typeof AlertCircle }> = {
  critical: { tone: 'danger', icon: AlertCircle },
  high: { tone: 'warning', icon: Zap },
  medium: { tone: 'info', icon: TrendingUp },
}

export default function FutureProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Future Projects"
        description="Upcoming initiatives and innovations in our research roadmap."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Phase Tabs */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          {phases.map((phase) => (
            <button
              key={phase}
              className="px-4 py-2 rounded-lg bg-card border border-border hover:border-secondary/50 whitespace-nowrap transition-colors"
            >
              {phase}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {futureProjects.map((project, idx) => {
            const { tone, icon } = priorityConfig[project.priority]
            return (
              <motion.div
                key={project.id}
                {...fadeLeftProps(idx * 0.05)}
                className="p-6 rounded-lg bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <Badge tone={tone} icon={icon} capitalize>
                        {project.priority}
                      </Badge>
                    </div>
                    <p className="text-foreground/70 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} tone="info">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Expected Impact */}
                    <div className="p-3 rounded bg-secondary/5 border border-secondary/20">
                      <p className="text-sm font-medium text-secondary">Expected Impact:</p>
                      <p className="text-sm text-foreground/70">{project.expectedImpact}</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex-shrink-0">
                    <div className="px-4 py-3 rounded-lg bg-secondary/10 border border-secondary/20 text-center">
                      <p className="text-xs text-foreground/60 mb-1">Target</p>
                      <p className="text-lg font-bold text-secondary">{project.phase}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}
