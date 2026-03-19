'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#notes', label: 'Notes' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-lg px-4 pt-4 sm:px-6 sm:pt-5">
        <div
          className={`relative flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
            isScrolled
              ? 'border-white/25 bg-[#050d1b]/85 shadow-[0_16px_45px_rgba(2,6,23,0.55)] backdrop-blur-2xl'
              : 'border-white/15 bg-[#050d1b]/45 backdrop-blur-xl'
          }`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-[#38bdf8]/6 via-[#6366f1]/7 to-[#22c55e]/6" />

          <Link href="/" className="relative font-mono text-lg font-bold tracking-[0.12em] sm:text-xl">
            <span className="bg-linear-to-r from-[#e2e8f0] via-[#93c5fd] to-[#86efac] bg-clip-text text-transparent">MA</span>
        </Link>

          <nav className="relative hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-[#cbd5e1] transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="relative rounded-lg border border-white/15 bg-white/5 p-2 text-[#f8fafc] transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden px-4 sm:px-6 md:hidden"
          >
            <nav className="rounded-2xl border border-white/20 bg-[#050d1b]/90 p-4 shadow-[0_18px_45px_rgba(2,6,23,0.55)] backdrop-blur-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm text-[#cbd5e1] transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
