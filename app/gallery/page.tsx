'use client'

import { motion } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { galleryItems } from '@/lib/data/gallery'
import { scaleInProps } from '@/lib/animations'
import { cn } from '@/lib/utils'

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        title="Innovation Gallery"
        description="Visual showcase of our research facilities, projects, and achievements."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              {...scaleInProps(idx * 0.05)}
              className={cn(
                'rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 hover:border-secondary/50 transition-all cursor-pointer group',
                item.width === 2 ? 'md:col-span-2' : 'md:col-span-1',
                item.height === 2 ? 'md:row-span-2' : 'md:row-span-1'
              )}
            >
              <div className="h-48 md:h-64 w-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <div className="text-center">
                  <div className="text-4xl opacity-10 mb-2">📸</div>
                  <p className="text-foreground/30 text-sm">{item.category}</p>
                </div>
              </div>
              <div className="p-4 bg-card/50">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
