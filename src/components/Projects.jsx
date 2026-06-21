// src/components/Projects.jsx — Project cards grid with live links
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
          <p className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-3">What I've built</p>
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
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                    : 'glass text-slate-500 hover:text-cyan-600 border border-slate-200 hover:border-cyan-400/40'
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
                className={`glass glow-border p-6 rounded-2xl flex flex-col relative
                            ${proj.featured ? 'ring-2 ring-violet-400/40' : ''}`}
              >
                {/* Featured badge */}
                {proj.featured && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold
                                  bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-sm">
                    ✨ Live Project
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-3xl w-14 h-14 rounded-2xl bg-gradient-to-br ${proj.color}
                                   flex items-center justify-center shadow-lg flex-shrink-0`}>
                    {proj.icon}
                  </div>
                  {/* Action icons */}
                  <div className="flex gap-1 mt-1">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                         title="View Code"
                         className="p-2 rounded-lg text-slate-400 hover:text-cyan-500 hover:bg-cyan-50 transition-all">
                        <GitBranch className="w-4 h-4" />
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                         title="Open Live Demo"
                         className="p-2 rounded-lg text-slate-400 hover:text-violet-500 hover:bg-violet-50 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Category + Title */}
                <div className="mb-3">
                  <span className={`text-xs font-bold bg-gradient-to-r ${proj.color} bg-clip-text text-transparent uppercase tracking-widest`}>
                    {proj.category}
                  </span>
                  <h3 className="text-lg font-bold mt-0.5" style={{ color: dark ? '#fff' : '#0f172a' }}>
                    {proj.name}
                  </h3>
                  <p className="text-sm" style={{ color: dark ? '#94a3b8' : '#64748b' }}>{proj.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: dark ? '#94a3b8' : '#475569' }}>
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map(tag => (
                    <span key={tag} className="tag text-[11px]">{tag}</span>
                  ))}
                </div>

                {/* Live Demo CTA — only for projects with liveUrl */}
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm text-white
                               bg-gradient-to-r from-violet-500 to-purple-600
                               hover:from-violet-400 hover:to-purple-500
                               shadow-md hover:shadow-violet-400/30
                               transition-all duration-200 hover:-translate-y-0.5 transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Live Demo
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
