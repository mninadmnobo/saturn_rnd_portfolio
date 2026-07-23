'use client'

import { motion } from 'framer-motion'
import { Calendar, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { news } from '@/lib/data/news'
import { fadeLeftProps, fadeUpProps } from '@/lib/animations'
import { formatDate } from '@/lib/utils'

export const NewsSection = () => {
  const featuredNews = news.filter((item) => item.featured)
  const otherNews = news.filter((item) => !item.featured)

  return (
    <section id="news" className="py-12 bg-slate-50 dark:bg-[#0a1526]/30 border-t border-slate-200 dark:border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500 uppercase">Latest News</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Stay updated on our latest breakthroughs and announcements.</p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Featured</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredNews.map((item, idx) => (
                <motion.div key={item.id} {...fadeUpProps(idx * 0.05)} className="group cursor-pointer">
                  <div className="h-64 rounded-xl bg-gradient-to-br from-blue-100/50 to-transparent dark:from-blue-900/40 dark:to-blue-900/10 border border-blue-200 dark:border-blue-800/40 group-hover:border-orange-500/50 transition-all mb-4 flex items-center justify-center">
                    <div className="text-center text-blue-500/40 dark:text-blue-300/40">
                      <div className="text-5xl font-bold opacity-20 mb-2">★</div>
                      <p>Featured Story</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <Badge tone="info">{item.category}</Badge>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(item.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {item.author}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other News */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Recent Updates</h3>
          <div className="space-y-4">
            {otherNews.map((item, idx) => (
              <motion.div
                key={item.id}
                {...fadeLeftProps(idx * 0.05)}
                className="p-6 rounded-xl bg-white dark:bg-[#0a1526]/60 border border-slate-200 dark:border-slate-800/60 hover:border-orange-500/50 hover:shadow-lg transition-all group cursor-pointer shadow-sm dark:shadow-none"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                  </div>
                  <Badge tone="info" className="ml-4">
                    {item.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(item.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {item.author}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
