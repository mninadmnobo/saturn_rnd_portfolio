'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { href: '/', sectionId: 'home', label: 'Home' },
    { href: '/#about', sectionId: 'about', label: 'About' },
    { href: '/#leadership', sectionId: 'leadership', label: 'Team' },
    { href: '/#projects', sectionId: 'projects', label: 'Projects' },
    { href: '/#news', sectionId: 'news', label: 'News' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      let current = ''
      for (const link of navLinks) {
        if (link.sectionId) {
          const element = document.getElementById(link.sectionId)
          if (element && element.getBoundingClientRect().top <= 200) {
            current = link.sectionId
          }
        }
      }
      // Also check contact section
      const contactElement = document.getElementById('contact')
      if (contactElement && contactElement.getBoundingClientRect().top <= 200) {
        current = 'contact'
      }

      if (window.scrollY < 100) {
        current = 'home'
      }

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 border-b border-orange-950/40 transition-all duration-300 ${scrolled
      ? 'bg-background/95 shadow-lg shadow-black/30 backdrop-blur'
      : 'bg-background/85 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[5.5rem] items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-all duration-200 group-hover:scale-105">
            <img
              src="/saturn-logo.png"
              alt="Saturn Textiles Limited — Research and Development Department"
              className="h-24 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-base font-semibold tracking-wide rounded-lg transition-all duration-300 ${activeSection === link.sectionId
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-slate-200 hover:text-orange-400 hover:bg-orange-500/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="ml-auto flex items-center space-x-3">
            <Link
              href="/#contact"
              className={`hidden rounded-xl border px-5 py-2.5 text-sm font-semibold transition lg:inline-flex ${activeSection === 'contact'
                ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20'
                : 'border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white'
                }`}
            >
              Let's Connect
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-slate-100 transition-colors hover:bg-slate-800 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${activeSection === link.sectionId
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-100 hover:bg-orange-950/40 hover:text-orange-300'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
