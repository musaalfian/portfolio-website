'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

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
}

const stack = ['React', 'Next.js', 'TypeScript', 'Laravel', 'MySQL']

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const floatAnimation = reduceMotion ? undefined : { y: [0, -12, 0] }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050b18]">
      {/* Layered premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(99,102,241,0.16),transparent_38%),radial-gradient(circle_at_70%_75%,rgba(16,185,129,0.12),transparent_32%),linear-gradient(145deg,#020617_0%,#0a1225_42%,#0e1a35_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-size-[72px_72px] opacity-25" />
        <div className="absolute -top-24 left-[18%] h-72 w-72 rounded-full bg-[#38bdf8]/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-[10%] h-96 w-96 rounded-full bg-[#6366f1]/20 blur-[140px]" />

        {/* Fine grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
          style={{ backgroundImage: noiseTexture }}
        />

        {/* Decorative engineering marks */}
        <svg
          aria-hidden
          className="absolute right-[6%] top-[16%] hidden h-40 w-40 text-white/10 lg:block"
          viewBox="0 0 160 160"
          fill="none"
        >
          <circle
            cx="80"
            cy="80"
            r="78"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="80"
            cy="80"
            r="46"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <PlusMark className="absolute left-[8%] top-[22%] hidden text-white/15 lg:block" />
        <PlusMark className="absolute left-[46%] bottom-[14%] hidden text-white/10 lg:block" />
        <PlusMark className="absolute right-[40%] top-[12%] text-white/10" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-[#050d1d]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
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
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7dd3fc] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7dd3fc]" />
            </span>
            Fullstack Engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl leading-tight tracking-tight text-[#f8fafc] md:text-6xl lg:text-7xl"
          >
            Membangun
            <span className="bg-linear-to-r from-[#67e8f9] via-[#a5b4fc] to-[#34d399] bg-clip-text text-transparent">
              {' '}
              elegan produk digital
            </span>{' '}
            untuk dampak operasional nyata.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-[#cbd5e1] md:text-xl"
          >
            Saya membangun platform web yang andal dengan React, Next.js, dan
            Laravel, dengan fokus kuat pada keandalan sistem, arsitektur yang
            mudah dirawat, dan pengiriman yang siap produksi.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#work"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-[#bfdbfe]/25 bg-linear-to-r from-[#1e3a8a]/85 to-[#0f766e]/75 px-6 py-3 font-medium text-white shadow-[0_12px_36px_rgba(15,23,42,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:shadow-[0_16px_44px_rgba(30,58,138,0.45)]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.26)_0%,rgba(255,255,255,0.08)_42%,transparent_72%)] opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Lihat Karya Saya
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>

            <Link
              href="#notes"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-[#f8fafc] backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
            >
              Baca Studi Kasus
            </Link>
          </motion.div>

          {/* Stack strip */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#64748b]">
              Stack
            </span>
            <span className="h-px w-6 bg-white/15" />
            {stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-[#94a3b8] backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            animate={floatAnimation}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Rotating conic aura */}
            <motion.div
              aria-hidden
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
              className="pointer-events-none absolute -inset-10 rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.18),rgba(99,102,241,0.16),rgba(34,197,94,0.16),rgba(56,189,248,0.18))] opacity-70 blur-3xl"
            />

            {/* Orbit ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-5 rounded-[2.75rem] border border-white/10"
            />

            {/* Framed showcase */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.05] p-2 shadow-[0_40px_120px_-25px_rgba(2,6,23,0.9)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-linear-to-br from-white/15 via-transparent to-white/[0.04]" />

              <div className="relative overflow-hidden rounded-[1.55rem]">
                <Image
                  src="/img/hero.png"
                  alt="Ilustrasi Musa Alfian membangun aplikasi web fullstack dengan Next.js, Laravel, TypeScript, dan MySQL"
                  width={1254}
                  height={1254}
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="h-auto w-full object-cover"
                />

                {/* Color grade + top light */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#050b18]/60 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.16),transparent_55%)]" />

                {/* Hover sheen sweep */}
                <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 skew-x-12 bg-linear-to-r from-transparent via-white/12 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100" />
              </div>

              {/* Corner brackets */}
              {[
                'left-3 top-3 border-l-2 border-t-2',
                'right-3 top-3 border-r-2 border-t-2',
                'left-3 bottom-3 border-l-2 border-b-2',
                'right-3 bottom-3 border-r-2 border-b-2',
              ].map((pos) => (
                <span
                  key={pos}
                  className={`pointer-events-none absolute h-5 w-5 rounded-[2px] border-[#7dd3fc]/40 ${pos}`}
                />
              ))}
            </div>

            {/* Floating status pill */}
            <div className="absolute left-3 top-6 flex items-center gap-2 rounded-full border border-emerald-300/30 bg-[#04121a]/85 px-3.5 py-2 text-xs text-emerald-100 shadow-[0_16px_40px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:-left-6">
              <motion.span
                animate={reduceMotion ? undefined : { scale: [1, 1.35, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-flex h-2 w-2 rounded-full bg-emerald-400"
              />
              Terbuka untuk Proyek
            </div>

            {/* Floating focus card */}
            <div className="absolute -bottom-6 right-3 w-48 rounded-2xl border border-white/15 bg-[#04121a]/85 p-4 shadow-[0_20px_50px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:-right-6 sm:w-52">
              <p className="mb-1 text-[0.65rem] uppercase tracking-[0.18em] text-[#94a3b8]">
                Fokus Saat Ini
              </p>
              <p className="mb-3 text-sm font-medium text-[#f8fafc]">
                Keandalan &amp; Skalabilitas Sistem
              </p>
              <div className="flex gap-1.5">
                {[
                  'from-[#38bdf8] to-[#6366f1]',
                  'from-[#6366f1] to-[#22c55e]',
                  'from-[#22c55e] to-[#38bdf8]',
                ].map((accent) => (
                  <span
                    key={accent}
                    className={`h-1.5 flex-1 rounded-full bg-linear-to-r ${accent}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

function PlusMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`h-4 w-4 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 1v14M1 8h14" />
    </svg>
  )
}
