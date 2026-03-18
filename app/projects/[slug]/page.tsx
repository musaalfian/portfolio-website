'use client';

import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

export default function CaseStudyPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#6366f1] transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            Back to Projects
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold text-[#f8fafc] mb-6 tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="bg-[#1e293b] px-4 py-2 rounded-lg border border-[#334155]">
              <span className="text-xs text-[#64748b] uppercase tracking-wider block mb-1">Role</span>
              <span className="text-[#f8fafc] font-medium">{project.role}</span>
            </div>
            <div className="bg-[#1e293b] px-4 py-2 rounded-lg border border-[#334155]">
              <span className="text-xs text-[#64748b] uppercase tracking-wider block mb-1">Duration</span>
              <span className="text-[#f8fafc] font-medium">{project.duration}</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-4">Overview</h2>
            <p className="text-[#94a3b8] leading-relaxed">{project.overview}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-4">Problem</h2>
            <p className="text-[#94a3b8] leading-relaxed">{project.problem}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-4">Solution</h2>
            <p className="text-[#94a3b8] leading-relaxed">{project.solution}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-4">Constraints & Requirements</h2>
            <ul className="space-y-3">
              {project.constraints.map((constraint, index) => (
                <li key={index} className="flex items-start gap-3 text-[#94a3b8]">
                  <span className="w-2 h-2 rounded-full bg-[#6366f1] mt-2 flex-shrink-0" />
                  {constraint}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-4">System Architecture</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-6">{project.architecture}</p>
            <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-[#0f172a] text-[#94a3b8] rounded-full border border-[#334155]"
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
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-6">Key Technical Decisions</h2>
            <div className="space-y-6">
              {project.technicalDecisions.map((decision, index) => (
                <div key={index} className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-lg font-semibold text-[#f8fafc] mb-2">{decision.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{decision.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-6">Challenges & Solutions</h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
                  <div className="mb-4">
                    <span className="text-xs font-mono text-[#ef4444] uppercase tracking-wider">Challenge</span>
                    <p className="text-[#f8fafc] mt-1">{challenge.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#22c55e] uppercase tracking-wider">Solution</span>
                    <p className="text-[#94a3b8] mt-1">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-4">Results & Impact</h2>
            <p className="text-lg text-[#22c55e] font-medium">{project.impact}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-[#f8fafc] mb-6">Lessons Learned</h2>
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson, index) => (
                <li key={index} className="flex items-start gap-3 text-[#94a3b8]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6366f1" strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-9l-4 4m0 0l-4-4m4 4V5" />
                  </svg>
                  {lesson}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </article>
  );
}
