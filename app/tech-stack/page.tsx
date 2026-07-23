'use client'

import { motion } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { techStackCategories, integratedCapabilities } from '@/lib/data/techStack'
import { fadeUpProps, fadeLeftProps } from '@/lib/animations'

export default function TechStackPage() {
  return (
    <PageShell>
      <PageHeader
        title="Technology Stack"
        description="Cutting-edge technologies powering our research and innovation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackCategories.map((stack, stackIdx) => (
            <motion.div
              key={stack.category}
              {...fadeUpProps(stackIdx * 0.05)}
              className="p-6 rounded-lg bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold mb-6 text-secondary">{stack.category}</h2>
              <ul className="space-y-3">
                {stack.technologies.map((tech, idx) => (
                  <motion.li
                    key={tech}
                    {...fadeLeftProps((stackIdx * 5 + idx) * 0.05, 0.3)}
                    className="flex items-center gap-3 text-foreground/70"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Integration Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <motion.div
            {...fadeUpProps()}
            className="p-8 rounded-lg bg-secondary/5 border border-secondary/20"
          >
            <h3 className="text-2xl font-bold mb-4">Integrated Capabilities</h3>
            <ul className="space-y-3 text-foreground/70">
              {integratedCapabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </PageShell>
  )
}
