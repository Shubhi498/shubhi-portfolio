// src/components/Hero.jsx — Animated hero with typing effect
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GitBranch, Link2, Mail, ArrowDown, MapPin } from 'lucide-react'
import { personal } from '../data/portfolio'

// Custom typing hook
function useTyping(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(w => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function Hero() {
  const typedText = useTyping(personal.roles)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-cyan-500 top-20 -left-32" />
      <div className="blob w-80 h-80 bg-purple-600 bottom-20 -right-20" />
      <div className="blob w-64 h-64 bg-blue-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text block">Shubhi Pandey</span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-mono text-slate-400 mb-2 h-9"
            >
              <span className="text-cyan-400">&gt;</span>{' '}
              <span className="text-white">{typedText}</span>
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 animate-pulse" />
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-1.5 text-slate-500 text-sm mb-6 justify-center lg:justify-start"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-500" />
              Lucknow, Uttar Pradesh, India
            </motion.p>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-base leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0"
            >
              {personal.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <Mail className="w-4 h-4" /> Get In Touch
              </button>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <GitBranch className="w-4 h-4" /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Link2 className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>


          </motion.div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-2xl animate-pulse-slow" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-0.5">
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-slate-900 overflow-hidden">
                  <img
                    src={personal.photo}
                    alt="Shubhi Pandey"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 15%' }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center text-7xl bg-gradient-to-br from-cyan-900 to-slate-900">
                    👩‍💻
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass glow-border px-3 py-2 rounded-xl text-xs font-bold text-cyan-400"
              >
                🤖 AI/ML
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass glow-border px-3 py-2 rounded-xl text-xs font-bold text-purple-400"
              >
                🌐 Full Stack
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4 text-cyan-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
