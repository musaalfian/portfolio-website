'use client'

import { motion } from 'framer-motion'

const buildLogSections = [
  {
    title: 'Keputusan Arsitektur',
    content: [
      'Menggunakan Next.js App Router untuk routing modern dan server components',
      'Static generation (SSG) untuk seluruh halaman demi performa optimal',
      'Arsitektur berbasis komponen dengan pemisahan tanggung jawab yang jelas',
      'TypeScript untuk keamanan tipe di seluruh basis kode',
    ],
  },
  {
    title: 'Struktur Komponen',
    content: [
      'Komponen yang dapat digunakan ulang berada di direktori /components',
      'Lapisan data dipisah di /lib/data.ts agar pengelolaan konten lebih mudah',
      'Client component hanya dipakai di bagian yang membutuhkan interaktivitas',
      'Server component sebagai default untuk performa yang lebih baik',
    ],
  },
  {
    title: 'Optimalisasi Performa',
    content: [
      'Static site generation untuk semua halaman - tanpa server-side rendering',
      'Komponen Next.js Image untuk pemuatan gambar yang teroptimasi',
      'Optimalisasi font dengan next/font untuk meminimalkan layout shift',
      'Code splitting per rute untuk ukuran bundle JavaScript seminimal mungkin',
      'Framer Motion digunakan dengan pengaturan teroptimasi (useMotionValue, useTransform)',
    ],
  },
  {
    title: 'Pendekatan Styling',
    content: [
      'Tailwind CSS untuk styling berbasis utility',
      'Variabel CSS kustom untuk tema yang konsisten',
      'Tema gelap sebagai default dengan kontras warna yang diperhatikan',
      'Desain responsif dengan pendekatan mobile-first',
    ],
  },
  {
    title: 'Alur Deployment',
    content: [
      'Siap di-deploy ke Vercel tanpa konfigurasi tambahan',
      'Variabel environment dikonfigurasi untuk produksi',
      'CI/CD otomatis melalui integrasi Git Vercel',
      'Edge caching diaktifkan untuk performa global',
    ],
  },
]

export default function BuildLogPage() {
  return (
    <article className="relative min-h-screen pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-size-[56px_56px] opacity-25" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-b from-transparent via-[#081327]/70 to-[#050b18]/80" />
      </div>
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-[#6366f1] uppercase tracking-wider">
            Di Balik Layar
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mt-4 mb-6 tracking-tight">
            Catatan Pembangunan
          </h1>
          <p className="text-xl text-[#94a3b8] leading-relaxed">
            Bagaimana portofolio ini dibangun, sebagai bentuk transparansi
            rekayasa dan kedalaman teknis.
          </p>
        </motion.div>

        <div className="space-y-12">
          {buildLogSections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[#f8fafc] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center text-[#6366f1] text-sm font-mono">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-[#94a3b8]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-6 bg-[#1e293b] rounded-xl border border-[#334155]"
        >
          <h3 className="text-lg font-semibold text-[#f8fafc] mb-4">
            Teknologi yang Digunakan
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Next.js 16',
              'TypeScript',
              'Tailwind CSS',
              'Framer Motion',
              'Vercel',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-[#0f172a] text-[#94a3b8] rounded-full border border-[#334155]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </article>
  )
}
