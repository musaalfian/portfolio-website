'use client';

import { motion } from 'framer-motion';

const technologies = [
  {
    name: 'Laravel',
    description: 'Building reliable backend systems and business logic with elegant syntax and robust architecture.',
  },
  {
    name: 'Next.js',
    description: 'High-performance frontend and modern web architecture with Server Components.',
  },
  {
    name: 'PostgreSQL',
    description: 'Structured relational data modeling and complex queries with ACID compliance.',
  },
  {
    name: 'TypeScript',
    description: 'Type safety and maintainable code across the full stack.',
  },
  {
    name: 'Docker',
    description: 'Containerization and consistent environments across development and production.',
  },
  {
    name: 'Redis',
    description: 'Caching, session management, and real-time features.',
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden bg-[#050b18]/80 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(52,211,153,0.11),transparent_35%),radial-gradient(circle_at_78%_80%,rgba(56,189,248,0.1),transparent_35%),linear-gradient(180deg,rgba(6,78,59,0.08)_0%,rgba(5,11,24,0.65)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#050b18]/78 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-[#050b18]/78" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[#6ee7b7] backdrop-blur-xl">
            Technical Foundation
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#f8fafc] md:text-4xl">
            Technology Stack
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#cbd5e1]">
            Tools I use to build reliable, scalable systems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_55px_rgba(15,23,42,0.45)]"
            >
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#f8fafc]">
                <span className="h-2.5 w-2.5 rounded-full bg-linear-to-r from-[#38bdf8] to-[#22c55e]" />
                {tech.name}
              </h3>

              <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-[#0f172a]">
                <div className="h-full w-3/4 rounded-full bg-linear-to-r from-[#38bdf8] via-[#6366f1] to-[#22c55e]" />
              </div>

              <p className="text-sm leading-relaxed text-[#cbd5e1]">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
