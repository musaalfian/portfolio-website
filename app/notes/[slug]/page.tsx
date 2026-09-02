'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { motion, useScroll, useSpring } from 'framer-motion'
import { notes } from '@/lib/data'
import NoteContent from '@/components/NoteContent'

const CATEGORY_STYLES: Record<string, string> = {
  Pengujian: 'border-sky-300/40 bg-sky-300/10 text-sky-200',
  Performa: 'border-amber-300/40 bg-amber-300/10 text-amber-200',
  Arsitektur: 'border-violet-300/40 bg-violet-300/10 text-violet-200',
  Keandalan: 'border-emerald-300/40 bg-emerald-300/10 text-emerald-200',
}

const MONTHS = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

function formatDate(iso: string): string {
  const parsed = new Date(iso)
  if (Number.isNaN(parsed.getTime())) return iso
  return `${parsed.getDate()} ${MONTHS[parsed.getMonth()]} ${parsed.getFullYear()}`
}

export default function NotePage() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const index = notes.findIndex((note) => note.slug === slug)
  const note = notes[index]

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  })

  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 720)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!note) {
    notFound()
  }

  const previousNote = index > 0 ? notes[index - 1] : null
  const nextNote = index < notes.length - 1 ? notes[index + 1] : null
  const categoryStyle =
    CATEGORY_STYLES[note.category] ??
    'border-white/25 bg-white/10 text-[#93c5fd]'

  return (
    <div className="relative min-h-screen bg-[#050b18]">
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-linear-to-r from-[#38bdf8] via-[#6366f1] to-[#34d399] shadow-[0_1px_8px_rgba(99,102,241,0.6)]"
      />

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(56,189,248,0.1),transparent_40%),radial-gradient(circle_at_88%_4%,rgba(99,102,241,0.12),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-size-[56px_56px] opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-linear-to-b from-transparent to-[#050b18]" />
      </div>

      <article className="relative mx-auto max-w-3xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
            href="/notes"
            className="group inline-flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#93c5fd]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            >
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            Kembali ke Catatan
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-medium ${categoryStyle}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {note.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#64748b]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="8" cy="8" r="6.5" />
                <path d="M8 4.5V8l2.5 1.5" />
              </svg>
              {note.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#64748b]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="3" width="12" height="11" rx="1.5" />
                <path d="M2 6.5h12M5.5 2v3M10.5 2v3" />
              </svg>
              {formatDate(note.date)}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#f8fafc] md:text-[2.75rem] md:leading-[1.15]">
            {note.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[#94a3b8] md:text-xl">
            {note.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-3 border-y border-white/10 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/4 font-mono text-xs font-bold">
              <span className="bg-linear-to-r from-[#e2e8f0] via-[#93c5fd] to-[#86efac] bg-clip-text text-transparent">
                MA
              </span>
            </span>
            <div className="text-sm leading-tight">
              <p className="font-medium text-[#e2e8f0]">Musa Alfian</p>
              <p className="mt-0.5 text-xs text-[#64748b]">
                Fullstack Engineer
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10"
        >
          <NoteContent content={note.content} />
        </motion.div>

        <div className="mt-16 border-t border-white/10 pt-10">
          {(previousNote || nextNote) && (
            <div className="grid gap-4 sm:grid-cols-2">
              {previousNote ? (
                <Link
                  href={`/notes/${previousNote.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/3 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/6"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#64748b]">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 8H3M7 4l-4 4 4 4" />
                    </svg>
                    Sebelumnya
                  </span>
                  <p className="mt-2 text-sm font-medium text-[#e2e8f0] transition-colors group-hover:text-[#93c5fd]">
                    {previousNote.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {nextNote ? (
                <Link
                  href={`/notes/${nextNote.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] sm:col-start-2"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#64748b]">
                    Berikutnya
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                  <p className="mt-2 text-sm font-medium text-[#e2e8f0] transition-colors group-hover:text-[#93c5fd]">
                    {nextNote.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
            </div>
          )}
        </div>
      </article>

      {/* Back to top */}
      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={false}
        animate={{ opacity: showTopButton ? 1 : 0, y: showTopButton ? 0 : 12 }}
        transition={{ duration: 0.25 }}
        style={{ pointerEvents: showTopButton ? 'auto' : 'none' }}
        aria-label="Kembali ke atas"
        className="fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0b1120]/90 text-[#cbd5e1] shadow-[0_12px_30px_rgba(2,6,23,0.6)] backdrop-blur-xl transition-colors hover:border-white/30 hover:text-white"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  )
}
