// src/components/Footer.jsx — Clean personal footer, no external branding
import React from 'react'
import { GitBranch, Link2, Mail, Heart } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-5">

          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-cyan-400/30 flex-shrink-0">
              <img src="/profile.jpg" alt="Shubhi" className="w-full h-full object-cover"
                onError={e => { e.target.style.display='none'; e.target.parentElement.style.background='linear-gradient(135deg,#22d3ee,#3b82f6)' }} />
            </div>
            <span className="font-bold text-slate-800 dark:text-white tracking-tight">
              Shubhi <span className="text-cyan-500">Pandey</span>
            </span>
          </div>

          {/* Owner info */}
          <div className="text-center">
            <p className="text-slate-800 dark:text-white font-bold text-lg">{personal.name}</p>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {personal.email}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: GitBranch, href: personal.github, label: 'GitHub' },
              { icon: Link2, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                id={`footer-${label.toLowerCase()}`}
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10
                           flex items-center justify-center
                           text-slate-500 dark:text-slate-400
                           hover:text-cyan-600 dark:hover:text-cyan-400
                           hover:bg-cyan-50 dark:hover:bg-cyan-400/10
                           hover:border-cyan-300 dark:hover:border-cyan-500/30
                           transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => {
                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                window.history.replaceState(null, '', window.location.pathname)
              }}
                className="text-xs text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-400 dark:text-slate-600 text-xs text-center">
            © {year} {personal.name} · Made with{' '}
            <Heart className="w-3 h-3 text-red-400 inline mx-0.5" />
            in Lucknow, India
          </p>
        </div>
      </div>
    </footer>
  )
}
