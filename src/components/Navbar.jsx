// src/components/Navbar.jsx — with dark/light toggle, no Digital Heroes
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../App'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 shadow-sm dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')} id="nav-logo" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 overflow-hidden flex-shrink-0">
            <img src="/profile.jpg" alt="Shubhi" className="w-full h-full object-cover"
              onError={e => { e.target.style.display='none'; e.target.parentElement.innerHTML='<span class="text-white text-sm font-bold flex items-center justify-center w-full h-full">SP</span>' }} />
          </div>
          <span className="font-bold text-slate-800 dark:text-white tracking-tight">
            Shubhi <span className="text-cyan-500">Pandey</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <button
              key={link.label}
              id={`nav-${link.label.toLowerCase()}`}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-500 dark:text-slate-400
                         hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-400/5
                         transition-all duration-200"
            >
              {link.label}
            </button>
          ))}

          {/* Dark / Light toggle */}
          <button
            id="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-3 w-10 h-10 rounded-xl flex items-center justify-center
                       bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                       text-slate-500 dark:text-slate-400
                       hover:text-cyan-600 dark:hover:text-cyan-400
                       hover:border-cyan-300 dark:hover:border-cyan-600
                       transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              {dark ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile: toggle + menu btn */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="theme-toggle-mobile"
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center
                       bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                       text-slate-500 dark:text-slate-400 transition-all"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            id="menu-toggle"
            onClick={() => setMenuOpen(m => !m)}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl
                             text-slate-600 dark:text-slate-300
                             hover:text-cyan-600 dark:hover:text-cyan-400
                             hover:bg-cyan-50 dark:hover:bg-cyan-400/5
                             transition-all font-medium text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
