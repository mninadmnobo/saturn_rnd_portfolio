import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-[5.5rem]">
        <div id="home">
          <Hero />
          <CapabilitiesSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <NewsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
