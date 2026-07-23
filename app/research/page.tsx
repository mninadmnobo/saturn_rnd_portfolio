'use client'

import { motion } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { Badge } from '@/components/ui/badge'
import { researchAreas } from '@/lib/data/research'
import { getIcon } from '@/lib/icons'
import { fadeUpProps } from '@/lib/animations'

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHeader
        title="Research Areas"
        description="Exploring twelve key areas of textile innovation and advancement."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, idx) => {
            const Icon = getIcon(area.icon)
            return (
              <motion.div
                key={area.id}
                {...fadeUpProps(idx * 0.05)}
                className="p-8 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ backgroundColor: area.color + '20', borderColor: area.color, borderWidth: '2px' }}
                >
                  <Icon size={24} style={{ color: area.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{area.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.keywords.map((keyword) => (
                    <Badge key={keyword} tone="info">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}
