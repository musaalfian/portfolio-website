'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionContainer({ children, id, className = '' }: SectionContainerProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#94a3b8] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
