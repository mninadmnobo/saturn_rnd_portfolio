'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface StatItem {
  value: number
  suffix?: string
  label: string
}

const StatCounter = ({ value, suffix = '', label }: StatItem) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const step = value / (duration / 16)
    let currentValue = 0

    const timer = setInterval(() => {
      currentValue += step
      if (currentValue >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(currentValue))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-foreground/60 text-sm sm:text-base">{label}</p>
    </motion.div>
  )
}

export const Statistics = () => {
  const stats: StatItem[] = [
    { value: 24, label: 'Active Research Projects', suffix: '+' },
    { value: 12, label: 'Research Focus Areas', suffix: '+' },
    { value: 3, label: 'Core Leadership Team', suffix: '' },
    { value: 8, label: 'Industry Partnerships', suffix: '+' },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30 border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our Research Impact
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Driving innovation through focused research initiatives and world-class partnerships in advanced textiles.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
