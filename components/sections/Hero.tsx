'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Cpu, Factory, Leaf, Microscope } from 'lucide-react'

const capabilities = [
  { icon: Cpu, label: 'AI & Vision' },
  { icon: Microscope, label: 'Advanced Materials' },
  { icon: Factory, label: 'Automation' },
  { icon: Leaf, label: 'Sustainability' },
]


export const Hero = () => (
  <section className="relative text-slate-900 dark:text-slate-100">
    <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-8 lg:px-10 lg:pt-10">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            <span className="text-slate-900 dark:text-white">Leading the Future of</span><br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-200 to-blue-400 bg-clip-text text-transparent">Textile Innovation</span><br />
            <span className="text-slate-600 dark:text-slate-400">and Automation</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-justify">
            We build smart solutions that modernize production, drive efficiency, and solve complex challenges across the textile industry through automation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#projects" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 dark:shadow-orange-950/50 transition-all duration-300 hover:brightness-110 hover:-translate-y-1 hover:scale-105 hover:shadow-orange-500/50">
              Explore Our Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#leadership" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 dark:shadow-orange-950/50 transition-all duration-300 hover:brightness-110 hover:-translate-y-1 hover:scale-105 hover:shadow-orange-500/50">
              Meet the Team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/join" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 dark:shadow-orange-950/50 transition-all duration-300 hover:brightness-110 hover:-translate-y-1 hover:scale-105 hover:shadow-orange-500/50">
              Join Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative lg:-mt-10"
        >
          <div className="relative w-full">
            <img
              src="/saturn-image.png"
              alt="Saturn Textiles Limited Research and Development Division"
              className="mx-auto block h-auto w-full object-contain scale-[1.12]"
              style={{ mixBlendMode: 'lighten' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)
