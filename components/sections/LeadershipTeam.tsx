'use client'

import { motion } from 'framer-motion'
import { teamDepartments } from '@/lib/data/team'
import Link from 'next/link'
import { ChevronDown, Mail } from 'lucide-react'
import { fadeInUpVariants, staggerContainer, defaultViewport } from '@/lib/animations'

const Linkedin = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export function LeadershipTeam() {
  const department = teamDepartments[0]
  const members = department.members

  const containerVariants = staggerContainer()
  const itemVariants = fadeInUpVariants

  return (
    <section id="leadership" className="relative py-12 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 uppercase tracking-tight"
          >
            Our Leaders
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div variants={itemVariants} className="relative max-w-xl mx-auto h-[1px] mb-8 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Meet the leadership and engineering professionals driving AI, automation, and next-generation textile innovation at Saturn Textiles Limited.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {members.map((member, idx) => {
            const isFeatured = idx === 0 // Managing Director is featured

            return (
              <motion.div 
                key={member.id} 
                variants={itemVariants}
                className="bg-white dark:bg-[#0a1526] border border-slate-200 dark:border-blue-950/40 rounded-[2rem] p-8 flex flex-col hover:border-orange-500/30 transition-colors shadow-xl dark:shadow-none"
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className={`w-40 h-40 rounded-full p-1 border-2 ${isFeatured ? 'border-orange-500' : 'border-blue-500'} bg-white dark:bg-[#0a1526]`}>
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl font-bold text-slate-400">
                        {member.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                  <p className={`text-sm font-semibold ${isFeatured ? 'text-orange-500' : 'text-blue-500'}`}>
                    {member.title}
                  </p>
                  
                  {/* Tiny Line */}
                  <div className={`w-8 h-[2px] mx-auto mt-5 mb-8 rounded-full ${isFeatured ? 'bg-orange-500' : 'bg-blue-500'}`} />

                  <button className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors uppercase tracking-wider mb-2">
                    View Details <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Divider & Socials */}
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-center gap-6">
                    <Link href={member.social?.linkedin || '#'} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group">
                      <div className="p-1.5 rounded-md bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      LinkedIn
                    </Link>
                    
                    <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700" />
                    
                    <Link href={`mailto:${member.id}@saturntextiles.com`} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group">
                      <div className="p-1.5 rounded-md bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      Email
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
