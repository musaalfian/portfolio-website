'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardGradients = [
  'from-[#38bdf8]/40 via-[#6366f1]/35 to-[#22c55e]/35',
  'from-[#6366f1]/45 via-[#0ea5e9]/35 to-[#34d399]/30',
  'from-[#22c55e]/35 via-[#14b8a6]/30 to-[#6366f1]/35',
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gradientClass = cardGradients[index % cardGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <article className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_22px_60px_rgba(15,23,42,0.45)] md:p-6">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#6366f1]/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className="relative z-10">
            <div className={`mb-5 overflow-hidden rounded-xl border border-white/20 bg-linear-to-br ${gradientClass}`}>
              <div className="relative h-36 bg-[#0b1327]/60">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.13)_1px,transparent_1px)] bg-size-[24px_24px] opacity-30" />
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e2e8f0]">
                    Case Study
                  </span>
                  <span className="rounded-full border border-emerald-200/40 bg-emerald-200/20 px-2.5 py-1 text-[10px] text-emerald-50">
                    Production
                  </span>
                </div>

                <div className="absolute left-4 right-4 bottom-4 rounded-lg border border-white/20 bg-[#020617]/60 p-3 backdrop-blur-md">
                  <div className="mb-2 h-2 w-3/5 rounded-full bg-white/25" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 rounded-md bg-white/15" />
                    <div className="h-8 rounded-md bg-white/12" />
                    <div className="h-8 rounded-md bg-white/20" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#f8fafc] transition-colors group-hover:text-[#93c5fd]">
                {project.title}
              </h3>
              <motion.svg
                whileHover={{ x: 4, y: -4 }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[#94a3b8] group-hover:text-[#93c5fd]"
              >
                <path d="M6 14l8-8m0 0l-8-8m8 8H3" />
              </motion.svg>
            </div>

            <p className="mb-6 leading-relaxed text-[#cbd5e1]">
              {project.subtitle}
            </p>

            <div className="space-y-3 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#94a3b8]">Problem</span>
                <p className="line-clamp-2 text-sm text-[#cbd5e1]">{project.problem}</p>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#94a3b8]">Impact</span>
                <p className="text-sm font-medium text-[#86efac]">{project.impact}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 bg-[#0f172a]/60 px-3 py-1 text-xs font-medium text-[#cbd5e1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
