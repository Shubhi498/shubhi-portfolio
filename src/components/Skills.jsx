// src/components/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { useTheme } from '../App'

export default function Skills() {
  const { dark } = useTheme()
  return (
    <section id="skills" style={{ backgroundColor: dark ? 'rgba(15,23,42,0.5)' : '#f8fafc' }} className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">What I work with</p>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass glow-border glass-hover p-6 rounded-2xl"
            >
              <h3 className="text-sm font-bold text-slate-300 mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="tag cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
