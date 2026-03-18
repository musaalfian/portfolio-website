'use client';

import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
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
            A collection of projects that demonstrate engineering thinking, problem-solving, and real-world impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
