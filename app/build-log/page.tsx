'use client';

import { motion } from 'framer-motion';

const buildLogSections = [
  {
    title: 'Architecture Decisions',
    content: [
      'Used Next.js App Router for modern routing and server components',
      'Static generation (SSG) for all pages to ensure optimal performance',
      'Component-based architecture with clear separation of concerns',
      'TypeScript for type safety across the entire codebase',
    ],
  },
  {
    title: 'Component Structure',
    content: [
      'Reusable components in /components directory',
      'Data layer separated in /lib/data.ts for easy content management',
      'Client components used only where interactivity is needed',
      'Server components by default for better performance',
    ],
  },
  {
    title: 'Performance Optimizations',
    content: [
      'Static site generation for all pages - no server-side rendering needed',
      'Next.js Image component for optimized image loading',
      'Font optimization with next/font for minimal layout shift',
      'Code splitting per route for minimal JavaScript bundle size',
      'Framer Motion used with optimized settings (useMotionValue, useTransform)',
    ],
  },
  {
    title: 'Styling Approach',
    content: [
      'Tailwind CSS for utility-first styling',
      'Custom CSS variables for consistent theming',
      'Dark theme as default with careful color contrast',
      'Responsive design with mobile-first approach',
    ],
  },
  {
    title: 'Deployment Pipeline',
    content: [
      'Ready for Vercel deployment with zero configuration',
      'Environment variables configured for production',
      'Automatic CI/CD through Vercel Git integration',
      'Edge caching enabled for global performance',
    ],
  },
];

export default function BuildLogPage() {
  return (
    <article className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-[#6366f1] uppercase tracking-wider">Behind the Scenes</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mt-4 mb-6 tracking-tight">
            Build Log
          </h1>
          <p className="text-xl text-[#94a3b8] leading-relaxed">
            How this portfolio was built, demonstrating engineering transparency and technical depth.
          </p>
        </motion.div>

        <div className="space-y-12">
          {buildLogSections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[#f8fafc] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center text-[#6366f1] text-sm font-mono">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-[#94a3b8]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#22c55e" strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-6 bg-[#1e293b] rounded-xl border border-[#334155]"
        >
          <h3 className="text-lg font-semibold text-[#f8fafc] mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-[#0f172a] text-[#94a3b8] rounded-full border border-[#334155]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </article>
  );
}
