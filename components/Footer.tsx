'use client';

import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: 'mailto:hello@example.com', label: 'Email', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 14c-2.667 0-4.333-1.667-5.306-3H7.5c-.276 0-.5-.224-.5-.5v-.306c.973-1.333 2.639-3 5.306-3 2.667 0 4.333 1.667 5.306 3h-.194c-.276 0-.5.224-.5.5v.306c-.973 1.333-2.639 3-5.306 3z' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#334155]/50 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748b] hover:text-[#f8fafc] transition-colors duration-200"
                aria-label={link.label}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={link.icon} />
                </svg>
              </a>
            ))}
          </div>

          <div className="text-sm text-[#64748b] text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Musa Alfian. Built with engineering thinking.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#334155]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link 
            href="/build-log" 
            className="text-sm text-[#64748b] hover:text-[#6366f1] transition-colors duration-200"
          >
            View Build Log
          </Link>
          <div className="flex items-center gap-2 text-sm text-[#64748b]">
            <span>Next.js</span>
            <span className="text-[#334155]">•</span>
            <span>Tailwind CSS</span>
            <span className="text-[#334155]">•</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
