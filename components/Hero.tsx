'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060c1a]">
      {/* Layered premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(99,102,241,0.18),transparent_38%),radial-gradient(circle_at_70%_75%,rgba(16,185,129,0.14),transparent_32%),linear-gradient(145deg,#020617_0%,#0b1226_42%,#101a34_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-size-[72px_72px] opacity-25" />
        <div className="absolute -top-24 left-[18%] h-72 w-72 rounded-full bg-[#38bdf8]/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-[10%] h-96 w-96 rounded-full bg-[#6366f1]/20 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs tracking-[0.16em] text-[#7dd3fc] backdrop-blur-xl uppercase"
          >
            Fullstack Engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl leading-tight tracking-tight text-[#f8fafc] md:text-6xl lg:text-7xl"
          >
            Building
            <span className="bg-linear-to-r from-[#67e8f9] via-[#a5b4fc] to-[#34d399] bg-clip-text text-transparent">
              {' '}elegant digital products
            </span>
            {' '}for real operational impact.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-[#cbd5e1] md:text-xl"
          >
            I craft reliable web platforms across React, Next.js, and Laravel with strong focus on
            system reliability, maintainable architecture, and production-ready delivery.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#38bdf8] via-[#6366f1] to-[#22c55e] px-6 py-3 font-medium text-white shadow-[0_10px_35px_rgba(56,189,248,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,0.35)]"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

            <Link
              href="#notes"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-[#f8fafc] backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
            >
              Read Case Studies
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 bg-linear-to-br from-[#38bdf8]/20 via-[#6366f1]/20 to-[#22c55e]/20 blur-3xl" />
          <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.5)] backdrop-blur-2xl md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-medium tracking-wide text-[#e2e8f0]">Current Focus</p>
              <span className="rounded-full border border-emerald-300/40 bg-emerald-300/20 px-3 py-1 text-xs text-emerald-100">
                Available for Projects
              </span>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Frontend Experience',
                  value: 'React + Next.js',
                  accent: 'from-[#38bdf8] to-[#6366f1]',
                },
                {
                  title: 'Backend Foundation',
                  value: 'Laravel + API Design',
                  accent: 'from-[#6366f1] to-[#22c55e]',
                },
                {
                  title: 'Engineering Direction',
                  value: 'Reliability + Scale',
                  accent: 'from-[#22c55e] to-[#38bdf8]',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-[#0f172a]/55 p-4"
                >
                  <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[#94a3b8]">{item.title}</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-medium text-[#f8fafc]">{item.value}</p>
                    <span
                      className={`h-2.5 w-20 rounded-full bg-linear-to-r ${item.accent}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-[#cbd5e1]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
