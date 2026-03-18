'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <article className="group relative bg-[#1e293b] rounded-xl p-6 md:p-8 border border-[#334155]/50 hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#f8fafc] group-hover:text-[#6366f1] transition-colors">
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
                className="text-[#64748b] group-hover:text-[#6366f1]"
              >
                <path d="M6 14l8-8m0 0l-8-8m8 8H3" />
              </motion.svg>
            </div>

            <p className="text-[#94a3b8] mb-6 leading-relaxed">
              {project.subtitle}
            </p>

            <div className="space-y-3 mb-6">
              <div>
                <span className="text-xs font-mono text-[#64748b] uppercase tracking-wider">Problem</span>
                <p className="text-sm text-[#94a3b8] line-clamp-2">{project.problem}</p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#64748b] uppercase tracking-wider">Impact</span>
                <p className="text-sm text-[#22c55e] font-medium">{project.impact}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-[#0f172a] text-[#94a3b8] rounded-full border border-[#334155]"
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
