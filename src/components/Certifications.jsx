// src/components/Certifications.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolio'
import { useTheme } from '../App'

export default function Certifications() {
  const { dark } = useTheme()
  return (
    <section id="certifications" style={{ backgroundColor: dark ? 'rgba(15,23,42,0.5)' : '#f8fafc' }} className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">Achievements</p>
          <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass glow-border glass-hover p-5 rounded-2xl flex items-center gap-5"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color}
                               flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                {cert.icon}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-sm leading-snug mb-1">{cert.name}</h3>
                <p className="text-slate-400 text-xs">{cert.issuer}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Award className="w-3 h-3 text-cyan-500" />
                  <span className="text-cyan-400 text-xs font-semibold">Certified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
