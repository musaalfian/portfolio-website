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
    <section id="stack" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-4 tracking-tight">
            Technology Stack
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl">
            Tools I use to build reliable, scalable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]/50 hover:border-[#6366f1]/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[#f8fafc] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                {tech.name}
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
