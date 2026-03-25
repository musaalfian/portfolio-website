'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Problem Understanding',
    description: 'I prioritize understanding operational problems before writing code. The best solution addresses the root cause, not symptoms.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'System Design',
    description: 'I design clear data structures and workflows before implementation. Good architecture prevents technical debt.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Implementation',
    description: 'I write clean, maintainable code with proper abstractions. Code is read more than it is written.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'Reliability',
    description: 'I emphasize reliability through testing, monitoring, and thoughtful error handling. Production issues teach the best lessons.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
];

const accentGradients = [
  'from-[#38bdf8] via-[#6366f1] to-[#22c55e]',
  'from-[#6366f1] via-[#0ea5e9] to-[#34d399]',
  'from-[#34d399] via-[#6366f1] to-[#38bdf8]',
  'from-[#0ea5e9] via-[#4f46e5] to-[#22c55e]',
];

export default function EngineeringMindset() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050b18]/80">
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_12%,rgba(99,102,241,0.13),transparent_36%),linear-gradient(180deg,rgba(8,47,73,0.08)_0%,rgba(15,23,42,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-size-[64px_64px] opacity-30" />
        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#050d1d]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-[#050d1d]/60" />
      </div> */}

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[#7dd3fc] backdrop-blur-xl">
            Engineering Philosophy
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#f8fafc] md:text-4xl">
            How I Build Software
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#cbd5e1]">
            A disciplined engineering process designed for reliable delivery, clean architecture,
            and systems that stay maintainable as products scale.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(8,47,73,0.35)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className={`absolute inset-0 bg-linear-to-br ${accentGradients[index]} opacity-10`} />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-[#0f172a]/70 transition-colors group-hover:border-[#7dd3fc]/45 group-hover:bg-[#172554]/70">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7dd3fc"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={principle.icon} />
                  </svg>
                </div>

                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-[#94a3b8]">
                    0{index + 1}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-[#f8fafc] md:text-xl">
                    {principle.title}
                  </h3>
                  <p className="leading-relaxed text-[#cbd5e1]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
