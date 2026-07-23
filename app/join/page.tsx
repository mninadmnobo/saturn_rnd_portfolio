'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, UploadCloud } from 'lucide-react'
import Link from 'next/link'

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030812] text-slate-900 dark:text-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-[#0a1526] p-8 md:p-12 rounded-3xl shadow-xl dark:shadow-none border border-slate-200 dark:border-slate-800/80"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase">Join <span className="text-orange-500">Our Team</span></h1>
            <p className="text-slate-600 dark:text-slate-400">
              We're always looking for brilliant minds to help us pioneer the future of textile automation.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name <span className="text-orange-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address <span className="text-orange-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number <span className="text-orange-500">*</span></label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    id="countryCode" 
                    defaultValue="+880"
                    className="w-24 px-3 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all text-center"
                    placeholder="+880"
                  />
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all"
                    placeholder="17XX-XXXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-slate-700 dark:text-slate-300">Present Address <span className="text-orange-500">*</span></label>
                <input
                  type="text"
                  id="address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all"
                  placeholder="123 Innovation Drive, City, Country"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="linkedin" className="text-sm font-medium text-slate-700 dark:text-slate-300">LinkedIn Profile <span className="text-slate-400 font-normal">(Optional)</span></label>
                <input
                  type="url"
                  id="linkedin"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="github" className="text-sm font-medium text-slate-700 dark:text-slate-300">GitHub Profile <span className="text-slate-400 font-normal">(Optional)</span></label>
                <input
                  type="url"
                  id="github"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all"
                  placeholder="https://github.com/username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="website" className="text-sm font-medium text-slate-700 dark:text-slate-300">Personal Website <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input
                type="url"
                id="website"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="reason" className="text-sm font-medium text-slate-700 dark:text-slate-300">Why do you want to join us? <span className="text-orange-500">*</span></label>
              <textarea
                id="reason"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#030812] border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:text-white transition-all resize-none"
                placeholder="Tell us about your passion for textile innovation and automation..."
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Resume / CV <span className="text-orange-500">*</span></label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 dark:border-slate-700 border-dashed rounded-xl hover:border-orange-500/50 transition-colors cursor-pointer bg-slate-50 dark:bg-[#030812]">
                <div className="space-y-2 text-center">
                  <UploadCloud className="mx-auto h-10 w-10 text-slate-400 dark:text-slate-500" />
                  <div className="flex text-sm text-slate-600 dark:text-slate-400 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-orange-500 hover:text-orange-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" required />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all shadow-orange-500/25 hover:shadow-orange-500/40"
              >
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
