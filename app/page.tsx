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

      <section id="work" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-4 tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl">
              Real projects that solved real operational problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
