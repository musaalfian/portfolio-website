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
    <section className="relative overflow-hidden bg-[#050b18]/80 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.1),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.09),transparent_36%),linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(5,11,24,0.65)_100%)]" />
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
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[#86efac] backdrop-blur-xl">
            Growth Roadmap
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#f8fafc] md:text-4xl">
            Currently Learning
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#cbd5e1]">
            Intentional skill expansion to strengthen architecture decisions, performance tuning,
            and long-term software reliability.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {learningTopics.map((item, index) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_18px_50px_rgba(15,23,42,0.45)]"
            >
              <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#f8fafc]">{item.topic}</h3>
                  <p className="text-sm text-[#cbd5e1]">{item.focus}</p>
                </div>
                <div className="inline-flex w-fit rounded-xl border border-white/20 bg-[#0f172a]/70 px-3 py-1.5 text-xl font-bold text-[#93c5fd]">
                  {item.progress}%
                </div>
              </div>

              <div className="mb-2 h-2.5 overflow-hidden rounded-full bg-[#0f172a]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className="h-full rounded-full bg-linear-to-r from-[#38bdf8] via-[#6366f1] to-[#22c55e]"
                />
              </div>

              <p className="text-xs uppercase tracking-[0.12em] text-[#94a3b8]">
                Progress toward practical implementation
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
