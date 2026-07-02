// src/components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Mail, GitBranch, Link2, Globe } from 'lucide-react'
import { personal } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">Get to know me</p>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Bio */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate Developer & <span className="text-cyan-400">AI Enthusiast</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">{personal.summary}</p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: MapPin, label: personal.location },
                { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                { icon: GitBranch, label: 'GitHub', href: personal.github },
                { icon: Link2, label: 'LinkedIn Profile', href: personal.linkedin },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">{label}</a>
                    : <span>{label}</span>
                  }
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
            className="grid grid-cols-2 gap-4"
          >
            {personal.stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="glass glow-border glass-hover p-6 text-center rounded-2xl"
              >
                <p className="text-4xl font-display font-bold gradient-text mb-2">{value}</p>
                <p className="text-slate-400 text-sm font-medium">{label}</p>
              </motion.div>
            ))}

            {/* B.Tech card */}
            <motion.div
              custom={4} variants={fadeUp}
              className="glass glow-border col-span-2 p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <p className="font-bold text-white">B.Tech — CSE</p>
                  <p className="text-slate-400 text-sm">Shri Ramswaroop College</p>
                  <p className="text-cyan-400 text-sm font-mono">2023 – Present</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
