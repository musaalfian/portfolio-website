'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Note } from '@/lib/data'

interface EngineeringNotesProps {
  notes: Note[]
  showAll?: boolean
}

export default function EngineeringNotes({
  notes,
  showAll = false,
}: EngineeringNotesProps) {
  const displayNotes = showAll ? notes : notes.slice(0, 3)

  return (
    <section
      id="notes"
      className="relative overflow-hidden bg-[#050b18]/80 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.1),transparent_36%),radial-gradient(circle_at_85%_12%,rgba(99,102,241,0.11),transparent_34%),linear-gradient(180deg,rgba(30,58,138,0.09)_0%,rgba(5,11,24,0.65)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-size-[72px_72px] opacity-30" />
        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#050b18]/78 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-[#050b18]/78" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[#93c5fd] backdrop-blur-xl">
              Engineering Journal
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#f8fafc] md:text-4xl">
              Engineering Notes
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-[#cbd5e1]">
              Practical field notes from shipping production software, debugging
              edge cases, and designing systems that stay reliable under
              pressure.
            </p>
          </div>
          {!showAll && (
            <Link
              href="/notes"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-[#e2e8f0] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              View all notes
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
            </Link>
          )}
        </motion.div>

        <div className="space-y-5">
          {displayNotes.map((note, index) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/notes/${note.slug}`}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_18px_50px_rgba(15,23,42,0.4)] md:p-7">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-linear-to-br from-[#38bdf8]/12 via-[#6366f1]/12 to-[#22c55e]/10" />
                  </div>

                  <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-md border border-sky-300/40 bg-sky-300/15 px-2.5 py-1 text-xs font-medium text-sky-100">
                          {note.category}
                        </span>
                        <span className="text-xs text-[#94a3b8]">
                          {note.readTime}
                        </span>
                        <span className="text-xs text-[#64748b]">
                          {note.date}
                        </span>
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-[#f8fafc] transition-colors group-hover:text-[#93c5fd] md:text-xl">
                        {note.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-[#cbd5e1]">
                        {note.excerpt}
                      </p>
                    </div>

                    <motion.svg
                      whileHover={{ x: 4, y: -4 }}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="shrink-0 text-[#94a3b8] group-hover:text-[#93c5fd]"
                    >
                      <path d="M6 14l8-8m0 0l-8-8m8 8H3" />
                    </motion.svg>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
