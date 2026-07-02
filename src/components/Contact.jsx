// src/components/Contact.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, GitBranch, Link2, Send } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">Let's connect</p>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm open to internships, full-time opportunities, and exciting collaborations.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: 'from-cyan-500 to-blue-500' },
              { icon: MapPin, label: 'Location', value: personal.location, color: 'from-orange-500 to-amber-500' },
              { icon: GitBranch, label: 'GitHub', value: 'github.com/Shubhi498', href: personal.github, color: 'from-slate-500 to-slate-600' },
              { icon: Link2, label: 'LinkedIn', value: 'Shubhi Pandey', href: personal.linkedin, color: 'from-blue-500 to-indigo-500' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="glass glow-border glass-hover p-4 rounded-xl flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{label}</p>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer"
                         className="text-slate-200 text-sm font-medium hover:text-cyan-400 transition-colors">
                        {value}
                      </a>
                    : <p className="text-slate-200 text-sm font-medium">{value}</p>
                  }
                </div>
              </motion.div>
            ))}

          </motion.div>

          {/* Contact Form (UI) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass glow-border p-6 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-white mb-5">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-1.5">Your Name</label>
                <input type="text" placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10
                             text-slate-200 placeholder-slate-500 text-sm
                             focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800 transition-all" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-1.5">Email</label>
                <input type="email" placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10
                             text-slate-200 placeholder-slate-500 text-sm
                             focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800 transition-all" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-1.5">Message</label>
                <textarea rows={5} placeholder="Hi Shubhi, I'd love to connect..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10
                             text-slate-200 placeholder-slate-500 text-sm resize-none
                             focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800 transition-all" />
              </div>
              <a
                href={`mailto:${personal.email}?subject=Hello Shubhi!`}
                className="btn-primary w-full justify-center"
              >
                <Send className="w-4 h-4" />
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
