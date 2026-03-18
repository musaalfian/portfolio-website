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
    <section className="py-20 md:py-28 bg-[#111827]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-4 tracking-tight">
            Impact & Results
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl">
            Measurable outcomes from solving real operational problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#6366f1] mb-2 tracking-tight">
                {achievement.metric}
              </div>
              <div className="text-lg font-semibold text-[#f8fafc] mb-2">
                {achievement.label}
              </div>
              <p className="text-sm text-[#64748b]">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
