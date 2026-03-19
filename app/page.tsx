'use client';

import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import EngineeringMindset from '@/components/EngineeringMindset';
import TechStack from '@/components/TechStack';
import Achievements from '@/components/Achievements';
import LearningProgress from '@/components/LearningProgress';
import EngineeringNotes from '@/components/EngineeringNotes';
import ContactCTA from '@/components/ContactCTA';
import { projects, notes } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />

      <EngineeringMindset />

      <section id="work" className="relative overflow-hidden bg-[#060d1d] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(99,102,241,0.14),transparent_32%),linear-gradient(180deg,#060d1d_0%,#0b1730_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-size-[72px_72px] opacity-30" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[#93c5fd] backdrop-blur-xl">
              Featured Projects
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#f8fafc] md:text-4xl">
              Selected Work
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-[#cbd5e1]">
              Project portfolio with measurable impact, strong architecture decisions,
              and production-focused execution.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <EngineeringNotes notes={notes} />

      <LearningProgress />

      <Achievements />

      <TechStack />

      <ContactCTA />
    </>
  );
}
