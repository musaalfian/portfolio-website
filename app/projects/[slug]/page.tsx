'use client'

import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const project = projects.find((p) => p.slug === slug)
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false)

  useEffect(() => {
    if (!isImagePreviewOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsImagePreviewOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isImagePreviewOpen])

  if (!project) {
    notFound()
  }

  return (
    <article className="relative min-h-screen overflow-hidden pt-24 pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#6366f1]/20 blur-3xl" />
        <div className="absolute right-0 top-112 h-96 w-96 rounded-full bg-[#22c55e]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-size-[56px_56px] opacity-25" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-b from-transparent via-[#081327]/70 to-[#050b18]/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-[#94a3b8] transition-colors hover:text-[#93c5fd]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            Back to Projects
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/20 bg-[#0f172a]/70 px-4 py-1 text-xs uppercase tracking-[0.14em] text-[#93c5fd]">
                Case Study
              </p>

              <h1 className="mb-5 text-3xl font-bold tracking-tight text-[#f8fafc] md:text-5xl">
                {project.title}
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#cbd5e1] md:text-xl">
                {project.subtitle}
              </p>

              <div className="mb-8 flex flex-wrap gap-4">
                <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                  <span className="mb-1 block text-xs uppercase tracking-wider text-[#94a3b8]">
                    Role
                  </span>
                  <span className="font-medium text-[#f8fafc]">
                    {project.role}
                  </span>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                  <span className="mb-1 block text-xs uppercase tracking-wider text-[#94a3b8]">
                    Duration
                  </span>
                  <span className="font-medium text-[#f8fafc]">
                    {project.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#38bdf8]/30 bg-[#0f172a]/80 px-3 py-1 text-xs font-medium text-[#bae6fd]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-br from-[#6366f1]/25 via-[#38bdf8]/10 to-[#22c55e]/20 blur-2xl" />

              <button
                type="button"
                onClick={() => setIsImagePreviewOpen(true)}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-white/20 bg-[#0b1325]/80 p-2 text-left shadow-[0_30px_80px_rgba(2,8,23,0.55)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#93c5fd]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93c5fd]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
                aria-label={`Open ${project.title} image preview`}
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#020617]/85 via-[#020617]/20 to-transparent" />
                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#020617]/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#dbeafe] backdrop-blur-xl">
                    Click to Preview
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#93c5fd]">
                      System Snapshot
                    </p>
                    <p className="mt-1 text-sm text-[#e2e8f0]">
                      Production-oriented architecture with measurable
                      operational outcomes.
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-12 lg:space-y-14">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
          >
            <h2 className="mb-4 text-2xl font-bold text-[#f8fafc]">Overview</h2>
            <p className="leading-relaxed text-[#cbd5e1]">{project.overview}</p>
          </motion.section>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-[#f8fafc]">
                Problem
              </h2>
              <p className="leading-relaxed text-[#cbd5e1]">
                {project.problem}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-[#f8fafc]">
                Solution
              </h2>
              <p className="leading-relaxed text-[#cbd5e1]">
                {project.solution}
              </p>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
          >
            <h2 className="mb-5 text-2xl font-bold text-[#f8fafc]">
              Constraints & Requirements
            </h2>
            <ul className="space-y-3">
              {project.constraints.map((constraint, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#cbd5e1]"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#38bdf8]" />
                  {constraint}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
          >
            <h2 className="mb-4 text-2xl font-bold text-[#f8fafc]">
              System Architecture
            </h2>
            <p className="mb-6 leading-relaxed text-[#cbd5e1]">
              {project.architecture}
            </p>
            <div className="rounded-xl border border-white/15 bg-[#0f172a]/75 p-5">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-[#cbd5e1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-[#f8fafc]">
              Implementation Highlights
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {project.implementationHighlights.map((highlight, index) => (
                <li
                  key={index}
                  className="rounded-xl border border-white/15 bg-[#0f172a]/75 px-4 py-3 text-sm leading-relaxed text-[#cbd5e1]"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-[#f8fafc]">
              Key Technical Decisions
            </h2>
            <div className="space-y-4">
              {project.technicalDecisions.map((decision, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/15 bg-[#0f172a]/75 p-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#f8fafc]">
                    {decision.title}
                  </h3>
                  <p className="leading-relaxed text-[#cbd5e1]">
                    {decision.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-[#f8fafc]">
              Challenges & Solutions
            </h2>
            <div className="space-y-5">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/15 bg-[#0f172a]/75 p-5"
                >
                  <div className="mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#fca5a5]">
                      Challenge
                    </span>
                    <p className="mt-1 text-[#f8fafc]">{challenge.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#86efac]">
                      Solution
                    </span>
                    <p className="mt-1 text-[#cbd5e1]">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
          >
            <h2 className="mb-4 text-2xl font-bold text-[#f8fafc]">
              Results & Impact
            </h2>
            <p className="text-lg font-medium text-[#86efac]">
              {project.impact}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-[#f8fafc]">
              Lessons Learned
            </h2>
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#cbd5e1]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    className="mt-0.5 shrink-0"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-9l-4 4m0 0l-4-4m4 4V5" />
                  </svg>
                  {lesson}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>

      <AnimatePresence>
        {isImagePreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-90 flex items-center justify-center bg-[#020617]/88 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setIsImagePreviewOpen(false)}
          >
            <motion.div
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} full image preview`}
              className="relative w-full max-w-7xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsImagePreviewOpen(false)}
                className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#020617]/80 text-[#e2e8f0] transition-colors hover:bg-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93c5fd]/80"
                aria-label="Close image preview"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>

              <div className="relative h-[84vh] w-full overflow-hidden rounded-2xl border border-white/20 bg-[#020617]/95 shadow-[0_45px_120px_rgba(2,6,23,0.75)]">
                <Image
                  src={project.image}
                  alt={`${project.title} interface preview enlarged`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/15 bg-[#0f172a]/70 px-4 py-3 text-sm text-[#cbd5e1] backdrop-blur-xl">
                <p>{project.title} - interface preview</p>
                <p className="text-xs uppercase tracking-[0.12em] text-[#93c5fd]">
                  Click outside or press Esc to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
