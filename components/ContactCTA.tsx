'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  { 
    href: 'mailto:hello@example.com', 
    label: 'Email', 
    description: 'hello@example.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  { 
    href: 'https://linkedin.com', 
    label: 'LinkedIn', 
    description: 'Connect with me',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z',
  },
  { 
    href: 'https://github.com', 
    label: 'GitHub', 
    description: 'View my code',
    icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#060d1d] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.14),transparent_36%),radial-gradient(circle_at_85%_85%,rgba(34,197,94,0.14),transparent_36%),linear-gradient(180deg,#060d1d_0%,#0d1b36_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-size-[80px_80px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-[0_20px_80px_rgba(8,47,73,0.35)] backdrop-blur-2xl md:p-12"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-[#0f172a]/40 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[#93c5fd]">
            Open for Collaboration
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#f8fafc] md:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-[#cbd5e1]">
            Available for product engineering, architecture consultation, and building
            reliable systems across React, Next.js, and Laravel ecosystems.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#38bdf8] via-[#6366f1] to-[#22c55e] px-6 py-3 font-medium text-white shadow-[0_10px_35px_rgba(56,189,248,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,0.38)]"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#0f172a]/70 transition-colors group-hover:border-[#93c5fd]/50 group-hover:bg-[#1e293b]/80">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={link.icon} />
                  </svg>
                </div>
                <span className="font-semibold text-[#f8fafc]">{link.label}</span>
              </div>

              <p className="text-sm leading-relaxed text-[#cbd5e1] transition-colors group-hover:text-[#e2e8f0]">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
