'use client';

import { motion } from 'framer-motion';

const achievements = [
  {
    metric: '5+',
    label: 'Production web applications built',
    description: 'Deployed and maintained in production environments',
  },
  {
    metric: '60%',
    label: 'Reduction in processing time',
    description: 'Achieved through system optimization and automation',
  },
  {
    metric: '500+',
    label: 'Active users',
    description: 'Real users relying on systems I built daily',
  },
  {
    metric: '100%',
    label: 'Project delivery rate',
    description: 'Successfully delivered all projects on time',
  },
];

export default function Achievements() {
  return (
    <section className="relative overflow-hidden bg-[#070f1f] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_16%_88%,rgba(99,102,241,0.14),transparent_32%),linear-gradient(180deg,#070f1f_0%,#101d39_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[#a5b4fc] backdrop-blur-xl">
            Performance Snapshot
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#f8fafc] md:text-4xl">
            Impact & Results
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#cbd5e1]">
            Measurable outcomes from solving real operational problems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(15,23,42,0.4)]"
            >
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#94a3b8]">
                Metric 0{index + 1}
              </p>
              <div className="mb-2 text-4xl font-bold tracking-tight text-[#93c5fd] md:text-5xl">
                {achievement.metric}
              </div>
              <div className="mb-2 text-lg font-semibold text-[#f8fafc]">
                {achievement.label}
              </div>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
