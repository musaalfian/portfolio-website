'use client';

import { motion } from 'framer-motion';

const learningTopics = [
  {
    topic: 'Advanced testing strategies',
    focus: 'Property-based testing, mutation testing with Infection, and TDD in Laravel',
    progress: 70,
  },
  {
    topic: 'System performance diagnosis',
    focus: 'Profiling, tracing, and optimizing database queries',
    progress: 60,
  },
  {
    topic: 'Security & penetration testing',
    focus: 'OWASP Top 10, secure coding practices, and vulnerability assessment',
    progress: 40,
  },
  {
    topic: 'Distributed system architecture',
    focus: 'Microservices patterns, event-driven architecture, and message queues',
    progress: 50,
  },
];

export default function LearningProgress() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-4 tracking-tight">
            Currently Learning
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl">
            Continuous improvement through intentional learning.
          </p>
        </motion.div>

        <div className="space-y-8">
          {learningTopics.map((item, index) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]/50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#f8fafc]">{item.topic}</h3>
                  <p className="text-sm text-[#64748b]">{item.focus}</p>
                </div>
                <div className="text-2xl font-bold text-[#6366f1]">{item.progress}%</div>
              </div>
              <div className="h-2 bg-[#0f172a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-[#6366f1] to-[#22c55e] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
