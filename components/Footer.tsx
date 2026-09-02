'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const exploreLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/projects', label: 'Karya' },
  { href: '/notes', label: 'Catatan Rekayasa' },
  { href: '/build-log', label: 'Catatan Pembangunan' },
]

const connectLinks = [
  {
    href: 'https://github.com/musaalfian',
    label: 'GitHub',
    icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
  },
  {
    href: 'https://linkedin.com/in/musaalfian',
    label: 'LinkedIn',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z',
  },
  {
    href: 'mailto:musaganteng071@gmail.com',
    label: 'Email',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
]

const builtWith = ['Next.js', 'Tailwind CSS', 'Framer Motion']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#040a13]">
      {/* Hairline divider from the section above */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(56,189,248,0.07),transparent_40%),radial-gradient(circle_at_88%_8%,rgba(99,102,241,0.07),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[80px_80px] opacity-50" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
          <span className="block translate-y-[32%] bg-linear-to-t from-white/[0.06] to-white/[0.01] bg-clip-text text-[19vw] font-bold leading-none tracking-tighter text-transparent select-none whitespace-nowrap">
            Musa Alfian
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20 md:pb-12"
      >
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-8 lg:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] font-mono text-sm font-bold tracking-[0.08em]">
                <span className="bg-linear-to-r from-[#e2e8f0] via-[#93c5fd] to-[#86efac] bg-clip-text text-transparent">
                  MA
                </span>
              </span>
              <span className="text-base font-semibold tracking-tight text-[#f1f5f9]">
                Musa Alfian
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[#94a3b8]">
              Fullstack engineer yang fokus pada pengiriman yang andal,
              arsitektur yang matang, dan hasil produk nyata di ekosistem React,
              Next.js, dan Laravel.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-xs text-[#cbd5e1]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Terbuka untuk proyek dan kolaborasi
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Navigasi footer">
            <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[#475569]">
              Jelajah
            </p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-sm text-[#94a3b8] transition-colors duration-200 hover:text-[#f1f5f9]"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#93c5fd] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[#475569]">
              Terhubung
            </p>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm text-[#94a3b8] transition-colors duration-200 hover:text-[#f1f5f9]"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#64748b] transition-colors duration-200 group-hover:text-[#93c5fd]"
                    >
                      <path d={link.icon} />
                    </svg>
                    {link.label}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#475569] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    >
                      <path d="M5 11L11 5M11 5H5M11 5V11" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#64748b]">
            &copy; {year} Musa Alfian. Dibangun dengan pola pikir rekayasa.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#64748b]">
            {builtWith.map((tech, index) => (
              <span key={tech} className="inline-flex items-center gap-2">
                {index > 0 && <span className="text-[#334155]">&bull;</span>}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
