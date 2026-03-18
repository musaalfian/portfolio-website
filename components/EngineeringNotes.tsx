'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Note } from '@/lib/data';

interface EngineeringNotesProps {
  notes: Note[];
  showAll?: boolean;
}

export default function EngineeringNotes({ notes, showAll = false }: EngineeringNotesProps) {
  const displayNotes = showAll ? notes : notes.slice(0, 3);

  return (
    <section id="notes" className="py-20 md:py-28 bg-[#111827]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-4 tracking-tight">
              Engineering Notes
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl">
              Technical insights and lessons from building real systems.
            </p>
          </div>
          {!showAll && (
            <Link
              href="/notes"
              className="inline-flex items-center gap-2 text-[#6366f1] hover:text-[#818cf8] transition-colors"
            >
              View all notes
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          )}
        </motion.div>

        <div className="space-y-4">
          {displayNotes.map((note, index) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/notes/${note.slug}`}>
                <article className="group bg-[#0f172a] rounded-xl p-6 border border-[#334155]/50 hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 text-xs font-medium bg-[#6366f1]/20 text-[#6366f1] rounded">
                          {note.category}
                        </span>
                        <span className="text-xs text-[#64748b]">{note.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#f8fafc] group-hover:text-[#6366f1] transition-colors mb-2">
                        {note.title}
                      </h3>
                      <p className="text-sm text-[#94a3b8]">
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
                      className="text-[#64748b] group-hover:text-[#6366f1] flex-shrink-0"
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
  );
}
