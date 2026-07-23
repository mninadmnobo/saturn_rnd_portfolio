'use client'

import { motion } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { achievements } from '@/lib/data/achievements'
import { getIcon } from '@/lib/icons'
import { fadeUpProps } from '@/lib/animations'

export default function AchievementsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Achievements"
        description="Milestones and accomplishments in our journey of innovation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = getIcon(achievement.icon)
            return (
              <motion.div
                key={achievement.id}
                {...fadeUpProps(idx * 0.05)}
                className="p-6 rounded-lg bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Icon size={32} className="text-secondary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">{achievement.value}</div>
                <h3 className="font-semibold mb-2">{achievement.metric}</h3>
                <p className="text-sm text-foreground/60">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}
