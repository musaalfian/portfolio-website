'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  { 
    href: 'mailto:hello@example.com', 
    label: 'Email', 
    description: 'hello@example.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  { 
    href: 'https://linkedin.com', 
    label: 'LinkedIn', 
    description: 'Connect with me',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z',
  },
  { 
    href: 'https://github.com', 
    label: 'GitHub', 
    description: 'View my code',
    icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-4 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Interested in collaborating or discussing engineering ideas? I&apos;m always open to talking about system design, problem solving, and building reliable software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#1e293b] rounded-xl p-6 border border-[#334155]/50 hover:border-[#6366f1]/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center group-hover:bg-[#6366f1]/20 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={link.icon} />
                  </svg>
                </div>
                <span className="font-semibold text-[#f8fafc]">{link.label}</span>
              </div>
              <p className="text-sm text-[#64748b] group-hover:text-[#94a3b8] transition-colors">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
