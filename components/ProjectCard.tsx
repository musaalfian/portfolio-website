'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Project } from '@/lib/data'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
  index: number
}

const cardGradients = [
  'from-[#38bdf8]/75 via-[#0ea5e9]/45 to-[#6366f1]/35',
  'from-[#6366f1]/75 via-[#3b82f6]/45 to-[#14b8a6]/35',
  'from-[#22c55e]/65 via-[#14b8a6]/45 to-[#38bdf8]/35',
]

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gradientClass = cardGradients[index % cardGradients.length]
  const caseNumber = String(index + 1).padStart(2, '0')
  const visibleTech = project.tech.slice(0, 3)
  const hiddenTechCount = Math.max(project.tech.length - visibleTech.length, 0)
  const galleryCount = project.gallery.length

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block h-full rounded-[1.4rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7dd3fc]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b18]"
      >
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-white/15 bg-white/[0.07] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7dd3fc]/45 hover:shadow-[0_28px_80px_rgba(6,15,32,0.62)] md:p-5">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#38bdf8]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
          <div className="absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-[#6366f1]/12 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

          <div className="relative z-10 flex flex-1 flex-col">
            <div
              className={`relative mb-4 h-44 overflow-hidden rounded-xl border border-white/15 ${gradientClass}`}
            >
              <Image
                src={project.image}
                width={640}
                height={360}
                alt={project.title}
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#020617]/75 via-[#020617]/15 to-transparent" />
              <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/25 bg-[#020617]/65 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#bfdbfe] backdrop-blur-md">
                Case {caseNumber}
              </div>
              <div className="absolute right-3 top-3 inline-flex items-center rounded-full border border-[#7dd3fc]/35 bg-[#082f49]/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#dbeafe] backdrop-blur-md">
                {galleryCount} shots
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[#94a3b8]">
              <p
                className="truncate rounded-md border border-white/10 bg-[#0f172a]/55 px-2.5 py-1.5"
                title={project.role}
              >
                {project.role}
              </p>
              <p
                className="truncate rounded-md border border-white/10 bg-[#0f172a]/55 px-2.5 py-1.5 text-right"
                title={project.duration}
              >
                {project.duration}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-[#f8fafc] transition-colors duration-300 group-hover:text-[#bfdbfe]">
                {project.title}
              </h3>
              <p className="mt-2 min-h-13 line-clamp-2 text-sm leading-relaxed text-[#cbd5e1]">
                {project.subtitle}
              </p>
            </div>

            <dl className="mb-5 grid gap-3 rounded-xl border border-white/10 bg-[#0b1329]/65 p-3.5">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                  Problem
                </dt>
                <dd className="mt-1 min-h-[2.4rem] line-clamp-2 text-sm text-[#cbd5e1]">
                  {project.problem}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                  Impact
                </dt>
                <dd className="mt-1 min-h-[2.4rem] line-clamp-2 text-sm font-medium text-[#86efac]">
                  {project.impact}
                </dd>
              </div>
            </dl>

            <div className="mb-6 flex flex-wrap gap-2">
              {visibleTech.map((tech) => (
                <span
                  key={tech}
                  className="max-w-38 truncate rounded-full border border-white/20 bg-[#0f172a]/60 px-3 py-1 text-xs font-medium text-[#cbd5e1]"
                  title={tech}
                >
                  {tech}
                </span>
              ))}
              {hiddenTechCount > 0 && (
                <span className="rounded-full border border-[#7dd3fc]/35 bg-[#082f49]/55 px-3 py-1 text-xs font-semibold text-[#bae6fd]">
                  +{hiddenTechCount} tech
                </span>
              )}
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
              <p className="text-sm font-semibold text-[#dbeafe]">
                View case study
              </p>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#93c5fd] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-[#7dd3fc]/50">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M6 14l8-8m0 0H7m7 0v7" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
