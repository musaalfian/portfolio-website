'use client'

import { projects } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-[#6366f1]/10 blur-3xl" />
        <div className="absolute right-0 top-112 h-96 w-96 rounded-full bg-[#22c55e]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-size-[56px_56px] opacity-25" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-b from-transparent via-[#081327]/70 to-[#050b18]/80" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mb-4 tracking-tight">
            Selected Work
          </h1>
          <p className="text-lg text-[#94a3b8] max-w-2xl">
            A collection of projects that demonstrate engineering thinking,
            problem-solving, and real-world impact.
          </p>
        </motion.div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
