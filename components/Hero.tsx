'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0f172a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#22c55e]/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm text-[#6366f1] mb-6 tracking-wider uppercase"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f8fafc] leading-tight mb-6 tracking-tight"
          >
            Building reliable systems and solving{' '}
            <span className="text-[#6366f1]">real operational problems</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#94a3b8] mb-10 max-w-2xl leading-relaxed"
          >
            Fullstack Engineer focused on Laravel ecosystem, system reliability, and scalable web platforms. 
            I build software that actually works in production.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6366f1] hover:bg-[#5558e3] text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

            <Link
              href="#notes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#334155] text-[#f8fafc] hover:bg-[#1e293b] font-medium rounded-lg transition-all duration-200"
            >
              Read Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-[#334155] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#64748b] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
