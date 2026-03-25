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

         <section id="work" className="relative overflow-hidden bg-[#050b18]/80 py-20 md:py-28">
            <div className="absolute inset-0">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(56,189,248,0.1),transparent_38%),radial-gradient(circle_at_84%_14%,rgba(99,102,241,0.1),transparent_36%),linear-gradient(180deg,rgba(15,23,42,0.2)_0%,rgba(5,11,24,0.68)_100%)]" />
               <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-size-[72px_72px] opacity-30" />
               <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#050b18]/78 to-transparent" />
               <div className="absolute inset-x-0 bottom-24 h-24 bg-linear-to-b from-transparent to-[#050b18]/42" />
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
