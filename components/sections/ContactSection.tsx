'use client'

import { motion } from 'framer-motion'
import { fadeUpProps } from '@/lib/animations'

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 border-t border-slate-200 dark:border-blue-950/40 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500 uppercase">Connect with Us</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind or want to collaborate? Send us a message and our R&D team will get back to you.
          </p>
        </div>

        <motion.div {...fadeUpProps(0.1)} className="bg-white dark:bg-[#0a1526]/60 border border-slate-200 dark:border-slate-800/60 p-8 md:p-10 rounded-2xl backdrop-blur-sm shadow-sm dark:shadow-none">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-50 dark:bg-[#030a15]/80 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-50 dark:bg-[#030a15]/80 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-slate-50 dark:bg-[#030a15]/80 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                placeholder="How can we help?"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-slate-50 dark:bg-[#030a15]/80 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-950/50 transition-all duration-300 hover:brightness-110 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-orange-500/50"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
