// src/components/Projects.jsx — Project cards grid
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitBranch, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'
import { useTheme } from '../App'

const categories = ['All', ...new Set(projects.map(p => p.category))]

export default function Projects() {
  const { dark } = useTheme()
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" style={{ backgroundColor: dark ? 'rgba(15,23,42,0.5)' : '#f8fafc' }} className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">What I've built</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8" />

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'glass text-slate-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass glow-border glass-hover p-6 rounded-2xl flex flex-col group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl w-14 h-14 rounded-2xl bg-gradient-to-br ${proj.color} flex items-center justify-center shadow-lg`}>
                    {proj.icon}
                  </div>
                  <div className="flex gap-2">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all">
                      <GitBranch className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <span className={`text-xs font-bold bg-gradient-to-r ${proj.color} bg-clip-text text-transparent uppercase tracking-widest`}>
                    {proj.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{proj.name}</h3>
                  <p className="text-slate-500 text-sm">{proj.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="tag text-[11px]">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
