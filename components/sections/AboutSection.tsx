import { LeadershipTeam } from '@/components/sections/LeadershipTeam'
import { Target, Eye, Lightbulb, Search, CheckCircle2 } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 border-t border-slate-200 dark:border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500 tracking-tight uppercase">About Us</h2>
          
          {/* Decorative Divider */}
          <div className="relative max-w-xl mx-auto h-[1px] mb-8 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]" />
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            The R&D Department of Saturn Textiles Limited is committed to advancing the textile industry through smart automation and sustainable technology.
          </p>
        </div>

        {/* Mission, Vision, What We Do, Focus Areas */}
        <div className="relative mb-24">
          {/* Horizontal Connection Line */}
          <div className="absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

            {/* Our Mission */}
            <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="relative mb-6">
                <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_2px_rgba(249,115,22,0.4)] dark:shadow-[0_0_8px_2px_rgba(249,115,22,0.6)] hidden lg:block" />
                <div className="w-24 h-24 rounded-full border border-orange-500/20 dark:border-orange-500/30 flex items-center justify-center bg-white dark:bg-[#071526]/80 group-hover:border-orange-500/60 transition-colors relative z-10 shadow-[inset_0_0_20px_rgba(249,115,22,0.05)] group-hover:shadow-[inset_0_0_30px_rgba(249,115,22,0.15)]">
                  <Target className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 tracking-wider uppercase">OUR MISSION</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-0 lg:pr-4">
                To develop intelligent, sustainable, and automated textile solutions through advanced research and innovation that drive efficiency, quality, and value.
              </p>
            </div>

            {/* Our Vision */}
            <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="relative mb-6">
                <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.4)] dark:shadow-[0_0_8px_2px_rgba(59,130,246,0.6)] hidden lg:block" />
                <div className="w-24 h-24 rounded-full border border-blue-500/20 dark:border-blue-500/30 flex items-center justify-center bg-white dark:bg-[#071526]/80 group-hover:border-blue-500/60 transition-colors relative z-10 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)] group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.15)]">
                  <Eye className="w-10 h-10 text-blue-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 tracking-wider uppercase">OUR VISION</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-0 lg:pr-4">
                To be a global leader in textile innovation, recognized for transforming challenges into sustainable technologies that empower the industry.
              </p>
            </div>

            {/* What We Do */}
            <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="relative mb-6">
                <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_2px_rgba(249,115,22,0.4)] dark:shadow-[0_0_8px_2px_rgba(249,115,22,0.6)] hidden lg:block" />
                <div className="w-24 h-24 rounded-full border border-orange-500/20 dark:border-orange-500/30 flex items-center justify-center bg-white dark:bg-[#071526]/80 group-hover:border-orange-500/60 transition-colors relative z-10 shadow-[inset_0_0_20px_rgba(249,115,22,0.05)] group-hover:shadow-[inset_0_0_30px_rgba(249,115,22,0.15)]">
                  <Lightbulb className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 tracking-wider uppercase">WHAT WE DO</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-0 lg:pr-4">
                We research, design, and develop smart systems, advanced materials, and automation solutions that enhance performance, productivity, and sustainability.
              </p>
            </div>

            {/* Our Focus Areas */}
            <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="relative mb-6">
                <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.4)] dark:shadow-[0_0_8px_2px_rgba(59,130,246,0.6)] hidden lg:block" />
                <div className="w-24 h-24 rounded-full border border-blue-500/20 dark:border-blue-500/30 flex items-center justify-center bg-white dark:bg-[#071526]/80 group-hover:border-blue-500/60 transition-colors relative z-10 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)] group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.15)]">
                  <Search className="w-10 h-10 text-blue-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 tracking-wider uppercase">OUR FOCUS AREAS</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 w-full text-left lg:pr-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Smart Textile Automation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Advanced Materials & Finishing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Data Intelligence & Analytics</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Sustainability & Circularity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <LeadershipTeam />
    </section>
  )
}
