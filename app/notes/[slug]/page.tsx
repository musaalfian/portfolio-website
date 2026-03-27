'use client'

import { notes } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'

export default function NotePage() {
  const params = useParams()
  const note = notes.find((n) => n.slug === params.slug)

  if (!note) {
    notFound()
  }

  return (
    <article className="relative min-h-screen pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-size-[56px_56px] opacity-25" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-b from-transparent via-[#081327]/70 to-[#050b18]/80" />
      </div>
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#6366f1] transition-colors mb-8"
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
            Back to Notes
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 text-sm font-medium bg-[#6366f1]/20 text-[#6366f1] rounded-full">
              {note.category}
            </span>
            <span className="text-sm text-[#64748b]">{note.readTime}</span>
            <span className="text-sm text-[#64748b]">{note.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-6 tracking-tight">
            {note.title}
          </h1>

          <p className="text-xl text-[#94a3b8] mb-12 leading-relaxed">
            {note.excerpt}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {note.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-[#f8fafc] mt-12 mb-4"
                >
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold text-[#f8fafc] mt-8 mb-3"
                >
                  {paragraph.replace('### ', '')}
                </h3>
              )
            }
            if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="text-[#94a3b8] ml-4 mb-2">
                  {paragraph.replace('- ', '')}
                </li>
              )
            }
            if (
              paragraph.startsWith('1. ') ||
              paragraph.startsWith('2. ') ||
              paragraph.startsWith('3. ')
            ) {
              return (
                <li key={index} className="text-[#94a3b8] ml-4 mb-2">
                  {paragraph.replace(/^\d\. /, '')}
                </li>
              )
            }
            if (paragraph.trim() === '') {
              return <br key={index} />
            }
            if (paragraph.startsWith('```')) {
              return null
            }
            if (paragraph.includes('```')) {
              const codeContent = paragraph
                .replace(/```php|```javascript|```/g, '')
                .trim()
              if (codeContent) {
                return (
                  <pre
                    key={index}
                    className="bg-[#1e293b] p-4 rounded-lg overflow-x-auto mb-4 border border-[#334155]"
                  >
                    <code className="text-sm text-[#94a3b8] font-mono">
                      {codeContent}
                    </code>
                  </pre>
                )
              }
              return null
            }
            return (
              <p key={index} className="text-[#94a3b8] leading-relaxed mb-4">
                {paragraph}
              </p>
            )
          })}
        </motion.div>
      </div>
    </article>
  )
}
