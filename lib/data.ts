export interface Project {
  gallery: { src: string; alt: string; caption: string }[]
  image: string
  slug: string
  title: string
  subtitle: string
  problem: string
  solution: string
  impact: string
  tech: string[]
  duration: string
  role: string
  overview: string
  constraints: string[]
  architecture: string
  technicalDecisions: { title: string; description: string }[]
  implementationHighlights: string[]
  challenges: { challenge: string; solution: string }[]
  lessonsLearned: string[]
}

export interface Note {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  content: string
}

export const projects: Project[] = [
  {
    gallery: [
      {
        src: '/img/simas-1.png',
        alt: 'SIMAS dashboard overview',
        caption: 'Dashboard monitoring surat dengan status proses real-time',
      },
      {
        src: '/img/simas-2.png',
        alt: 'SIMAS incoming letter management',
        caption: 'Manajemen surat masuk internal dan eksternal per unit',
      },
      {
        src: '/img/simas-3.png',
        alt: 'SIMAS approval workflow',
        caption: 'Workflow approval berjenjang untuk validasi dokumen',
      },
      {
        src: '/img/simas-4.png',
        alt: 'SIMAS disposition interface',
        caption: 'Disposisi dan tembusan lintas jabatan dalam satu alur',
      },
      {
        src: '/img/simas-5.png',
        alt: 'SIMAS reporting snapshot',
        caption: 'Ringkasan SLA dan audit trail untuk evaluasi operasional',
      },
    ],
    image: '/img/simas.png',
    slug: 'simas-v2',
    title: 'SIMAS v2.0',
    subtitle: 'Sistem Informasi Manajemen Administrasi Surat Lintas Unit',
    problem:
      'Proses persuratan sebelumnya tersebar di banyak alur manual: registrasi surat masuk, pengajuan surat keluar, disposisi, dan approval berjenjang belum terintegrasi. Dampaknya adalah keterlambatan tindak lanjut, minimnya visibilitas status, serta tingginya risiko inkonsistensi data antar unit.',
    solution:
      'Membangun platform persuratan terintegrasi berbasis web yang mengelola siklus surat end-to-end: registrasi surat masuk internal/eksternal, pengajuan surat keluar, approval multi-level, disposisi berantai, tembusan, notifikasi, tracking status, hingga pengarsipan dokumen final.',
    impact:
      'Alur kerja persuratan menjadi terstandar di seluruh unit, transparansi proses meningkat melalui pelacakan status real-time, serta kepatuhan operasional diperkuat dengan audit trail dan monitoring SLA disposisi/dokumen.',
    tech: ['Laravel 11', 'PHP 8.2', 'MySQL', 'Tailwind CSS', 'jQuery'],
    duration: 'Transformasi v2.0 (2025-2026)',
    role: 'Lead Fullstack Engineer',
    overview:
      'SIMAS v2.0 adalah platform manajemen persuratan institusi yang dirancang untuk mendukung kebutuhan fakultas dan unit kerja (departemen, program studi, bagian, laboratorium, dan unit lainnya). Sistem menekankan kecepatan proses, akuntabilitas, serta konsistensi administrasi pada skala organisasi multi-unit.',
    constraints: [
      'Harus mendukung multi-role dan multi-unit dalam satu akun pengguna',
      'Migrasi dari skema legacy ke arsitektur baru wajib aman tanpa gangguan layanan signifikan',
      'Otorisasi harus ketat berbasis konteks peran, jabatan, dan unit aktif',
      'Sistem harus tetap responsif pada kondisi jaringan yang tidak selalu stabil',
    ],
    architecture:
      'Arsitektur menggunakan pendekatan modular monolith di Laravel dengan pemisahan Service Layer, Repository, Event, dan Notification. Model data transisional menggabungkan tabel legacy dan model canonical baru (surat_generals + pivot unit) untuk mendukung migrasi bertahap. Caching dan indexing digunakan untuk akselerasi dashboard, sementara notifikasi dan workflow status dijalankan berbasis event domain.',
    technicalDecisions: [
      {
        title: 'Canonical letter model for multi-unit flow',
        description:
          'Mengadopsi model surat canonical dengan relasi pivot per unit penerima agar distribusi surat, status baca, dan status tindak lanjut dapat dilacak secara granular.',
      },
      {
        title: 'Safe staged migration strategy',
        description:
          'Menerapkan tahapan additive schema, backfill terukur, dan cutover bertahap agar kompatibilitas data lama tetap terjaga selama transisi v1 ke v2.',
      },
      {
        title: 'Context-aware RBAC and workflow',
        description:
          'Merancang otorisasi berbasis peran + unit aktif untuk memastikan hak akses, approval chain, dan disposisi hanya berjalan pada konteks organisasi yang benar.',
      },
    ],
    implementationHighlights: [
      'Mengimplementasikan alur surat masuk dan surat keluar terintegrasi dengan status tracking end-to-end',
      'Membangun approval berjenjang (setuju/revisi/tolak) dan tugas upload dokumen final untuk sekretaris/pihak terkait',
      'Menerapkan disposisi polymorphic dengan dukungan teruskan, tanggapan, lampiran output, dan penyelesaian proses',
      'Menghadirkan sistem notifikasi terpusat (dropdown, halaman notifikasi, read state, dan SLA monitoring) untuk mendorong ketepatan tindak lanjut',
    ],
    challenges: [
      {
        challenge: 'Kompleksitas struktur organisasi multi-level',
        solution:
          'Menormalkan entitas unit dan relasi user-unit agar alur persuratan tetap konsisten lintas fakultas, departemen, prodi, bagian, dan laboratorium.',
      },
      {
        challenge: 'Koeksistensi data lama dan model baru',
        solution:
          'Menyusun mekanisme bridge dan backfill idempoten untuk menjaga parity data sekaligus meminimalkan risiko regresi selama migrasi.',
      },
      {
        challenge: 'Risiko notifikasi duplikat dan status tidak sinkron',
        solution:
          'Menambahkan kunci deduplikasi, event handling terstruktur, serta pembaruan status berbasis trigger proses untuk menjaga konsistensi pengalaman pengguna.',
      },
    ],
    lessonsLearned: [
      'Migrasi sistem operasional harus diperlakukan sebagai product change, bukan sekadar perubahan skema database',
      'Dual-path compatibility (legacy + canonical) penting untuk menjaga stabilitas saat transisi skala besar',
      'RBAC di domain persuratan wajib mempertimbangkan konteks unit aktif, bukan hanya role global',
      'Dokumentasi pengguna dan dokumentasi teknis yang kuat mempercepat adopsi serta menurunkan friksi operasional',
    ],
  },
  {
    gallery: [
      {
        src: '/img/barbershop-1.png',
        alt: 'POS barbershop dashboard',
        caption: 'Ringkasan operasional harian dan performa bisnis',
      },
      {
        src: '/img/barbershop-2.png',
        alt: 'POS checkout flow',
        caption: 'Checkout multi-metode pembayaran dengan alur cepat',
      },
      {
        src: '/img/barbershop-3.png',
        alt: 'POS loyalty and voucher',
        caption: 'Manajemen loyalty points, voucher, dan customer rewards',
      },
      {
        src: '/img/barbershop-4.png',
        alt: 'POS financial control',
        caption: 'Kontrol kas, expense tracking, dan variance monitoring',
      },
      {
        src: '/img/barbershop-5.png',
        alt: 'POS business reports',
        caption: 'Laporan profit-loss dan cash-flow untuk owner',
      },
    ],
    image: '/img/barbershop.png',
    slug: 'pos-loyalty-barbershop',
    title: 'POS Loyalty Barbershop Platform',
    subtitle:
      'Platform operasional barbershop berbasis web/PWA untuk POS, loyalty customer, dan kontrol keuangan harian',
    problem:
      'Operasional barbershop sebelumnya berjalan terpisah antara transaksi kasir, pencatatan poin pelanggan, voucher promo, dan kontrol kas harian. Akibatnya, owner kesulitan memantau performa bisnis secara real-time, tim kasir rentan salah input metode pembayaran, dan proses rekonsiliasi kas serta pelaporan keuangan memerlukan effort manual yang tinggi.',
    solution:
      'Membangun platform terintegrasi end-to-end dengan pendekatan modular monolith: POS transaksi cepat, loyalty points dan voucher redemption, promo management, push notification, expense tracking, cash withdrawal variance analysis, serta financial reporting (profit-loss, cash-flow, dan period comparison) dalam satu ekosistem API terpusat.',
    impact:
      'Proses operasional menjadi jauh lebih terstandar lintas peran (owner, kasir, customer), transparansi data meningkat melalui dashboard dan tracking real-time, serta kontrol keuangan harian lebih akurat lewat mekanisme cash reconciliation dan recalculation flow untuk koreksi transaksi sensitif.',
    tech: [
      'Laravel 12',
      'PHP 8.2',
      'MySQL',
      'Next.js 16',
      'React 19',
      'Tailwind CSS 4',
      'Laravel Sanctum',
      'Web Push (VAPID)',
      'Recharts',
    ],
    duration: 'Product Build and Architecture Hardening (2025-2026)',
    role: 'Senior Software Architect and Lead Fullstack Engineer',
    overview:
      'Platform ini dirancang sebagai fondasi digital operasional barbershop modern dengan fokus pada kecepatan layanan kasir, retensi pelanggan berbasis loyalty, serta tata kelola finansial yang dapat diaudit. Sistem menggabungkan pengalaman customer mobile-friendly (PWA) dan kontrol owner yang data-driven dalam satu arsitektur yang scalable.',
    constraints: [
      'Wajib mendukung multi-role access control dengan batasan hak akses ketat per domain operasi',
      'Konsistensi data transaksi, poin, voucher, dan cash balance harus terjaga meski terjadi koreksi data historis',
      'Sistem harus tetap usable pada konteks mobile/PWA dan kondisi jaringan yang tidak selalu stabil',
      'Operasi sensitif memerlukan proteksi tambahan melalui rate limiting bertingkat dan validasi berlapis',
    ],
    architecture:
      'Arsitektur menggunakan modular monolith dengan Laravel sebagai API backend dan Next.js App Router sebagai frontend. Domain dipisah secara jelas melalui Service Layer (Point, Voucher, Cash Management, Financial Report, Notification), route segmentation per role, serta scheduler berbasis command untuk proses periodik. Data model menghubungkan core POS, loyalty engine, dan financial control agar alur bisnis tetap konsisten dari transaksi hingga reporting.',
    technicalDecisions: [
      {
        title: 'Role-segmented API and middleware strategy',
        description:
          'Memisahkan endpoint berdasarkan persona bisnis (admin/kasir, owner, customer) dengan kombinasi auth token Sanctum, role middleware, dan throttling bertingkat untuk menjaga keamanan sekaligus UX operasional.',
      },
      {
        title: 'Domain service orchestration for transactional consistency',
        description:
          'Menempatkan business rules pada service domain agar flow transaksi dapat mengorkestrasi perhitungan poin, pemakaian voucher, dan update cash balance secara konsisten dalam boundary transaksi database.',
      },
      {
        title: 'Financial reconciliation as first-class capability',
        description:
          'Mengimplementasikan cash balance harian, variance status, withdrawal history, serta command recalculation agar koreksi payment method historis tidak merusak akurasi laporan keuangan.',
      },
      {
        title: 'Dual-channel notification architecture',
        description:
          'Menggabungkan web push notification dan in-app notification persistence untuk memastikan pesan bisnis kritikal tetap tersampaikan sekaligus dapat dilacak kembali oleh pengguna.',
      },
    ],
    implementationHighlights: [
      'Membangun POS flow lengkap dari pemilihan layanan, validasi voucher, checkout multi-payment method, hingga histori transaksi',
      'Mengimplementasikan loyalty engine: kalkulasi poin, redeem voucher, validasi status voucher, dan customer-facing voucher management',
      'Menyediakan dashboard owner dengan metrik harian dan bulanan, customer insights, trend transaksi, dan statistik poin',
      'Mengembangkan modul financial control: expense management, cash withdrawal variance, reconciliation, profit-loss, cash-flow, dan period comparison',
      'Menerapkan push notification event-driven dan scheduled reminder untuk meningkatkan engagement customer',
      'Menyediakan mekanisme koreksi transaksi yang aman dengan auto-recalculation cash balance untuk menjaga integritas data',
    ],
    challenges: [
      {
        challenge:
          'Menjaga konsistensi domain lintas transaksi, loyalty, dan finansial',
        solution:
          'Mendesain orchestration berbasis service domain dan database transaction boundary agar mutasi data antar modul tetap atomic dan dapat ditelusuri.',
      },
      {
        challenge:
          'Mengelola akurasi kas saat terjadi koreksi metode pembayaran historis',
        solution:
          'Menambahkan endpoint koreksi terkontrol plus command cash recalculation dari tanggal terdampak hingga current date untuk memulihkan integritas ledger harian.',
      },
      {
        challenge:
          'Menyatukan pengalaman customer engagement dengan reliabilitas operasional',
        solution:
          'Mengadopsi arsitektur notifikasi dual-channel (push + in-app), scheduler periodik, dan model data notifikasi terstruktur untuk menjaga delivery serta auditability.',
      },
    ],
    lessonsLearned: [
      'Arsitektur POS modern tidak cukup fokus pada checkout, tetapi harus menyatukan loyalty dan financial governance sebagai satu domain bisnis utuh',
      'Koreksi data operasional perlu disiapkan sebagai kapabilitas sistem, bukan aktivitas ad-hoc manual',
      'Service Layer yang disiplin mempercepat scaling fitur dan menurunkan coupling antar modul',
      'Keselarasan antara kode, dokumentasi, dan kontrak API adalah kunci untuk maintainability jangka panjang',
    ],
  },
  {
    gallery: [
      {
        src: '/img/sipeipe-1.png',
        alt: 'SIPEIPE academic dashboard',
        caption: 'Dashboard evaluasi per periode akademik lintas peran',
      },
      {
        src: '/img/sipeipe-2.png',
        alt: 'SIPEIPE assessment form',
        caption: 'Template form penilaian self, peer, dan dosen',
      },
      {
        src: '/img/sipeipe-3.png',
        alt: 'SIPEIPE logbook module',
        caption: 'Logbook berbasis kompetensi dengan UX mobile-friendly',
      },
      {
        src: '/img/sipeipe-4.png',
        alt: 'SIPEIPE user import',
        caption: 'Import massal pengguna dengan progress dan validasi rinci',
      },
      {
        src: '/img/sipeipe-5.png',
        alt: 'SIPEIPE analytics',
        caption: 'Analitik performa pembelajaran untuk monitoring institusi',
      },
    ],
    image: '/img/sipeipe.png',
    slug: 'sipeipe',
    title: 'SIPEIPE',
    subtitle:
      'Sistem Informasi Penilaian Interprofessional Education Berbasis Web',
    problem:
      'Proses penilaian dan logbook sebelumnya tersebar di banyak alur terpisah: pencatatan aktivitas mahasiswa, self-assessment, peer assessment, penilaian dosen, serta evaluasi kelompok keluarga belum berada dalam satu sistem terintegrasi. Dampaknya adalah duplikasi input, sulitnya memantau progres lintas peran, validasi data yang memakan waktu, dan keterbatasan visibilitas performa per periode akademik.',
    solution:
      'Membangun platform SIPEIPE yang menyatukan siklus evaluasi pembelajaran secara end-to-end: manajemen periode akademik, pengelolaan pengguna massal via import Excel, generator akun keluarga, form penilaian berbasis template, form logbook berbasis kompetensi, workflow penilaian multi-role, dashboard analitik per peran, serta kontrol keamanan dan performa melalui rate limiting, caching, dan optimasi query.',
    impact:
      'Alur evaluasi menjadi terstandar untuk Admin, Dosen, Mahasiswa, dan Keluarga; transparansi meningkat melalui tracking status dan rekap terpusat; proses import ribuan pengguna menjadi lebih cepat dan terukur; serta performa dashboard meningkat signifikan melalui optimasi SQL, indeks komposit, dan asynchronous loading sehingga lebih stabil untuk skenario penggunaan tinggi.',
    tech: [
      'Laravel 12',
      'PHP 8.2',
      'MySQL',
      'Tailwind CSS 4',
      'Vite 7',
      'jQuery',
      'DataTables',
      'PhpSpreadsheet',
      'Laravel Queue',
      'Redis-ready Caching',
    ],
    duration: 'Pengembangan dan Optimalisasi Platform (2025-2026)',
    role: 'Lead Fullstack Engineer',
    overview:
      'SIPEIPE adalah platform evaluasi pendidikan interprofesional yang dirancang untuk mendukung operasional akademik berskala institusi. Sistem ini menekankan akurasi data penilaian, kemudahan operasional lintas peran, pengalaman pengguna yang responsif di desktop maupun mobile, serta kesiapan performa untuk beban pengguna tinggi.',
    constraints: [
      'Harus mendukung multi-role dengan hak akses berbeda (Admin, Dosen, Mahasiswa, Keluarga) dalam konteks periode akademik aktif',
      'Validitas data wajib konsisten untuk penilaian individu, kelompok, self, dan peer tanpa duplikasi entri',
      'Import pengguna skala besar harus aman, tervalidasi, dan memiliki progress tracking real-time',
      'UI logbook wajib tetap usable di perangkat mobile dengan struktur pertanyaan berbasis kompetensi',
      'Dashboard harus tetap responsif pada skenario ratusan pengguna concurrent',
      'Sistem harus memiliki perlindungan abuse melalui rate limiting dan kontrol akses yang ketat',
    ],
    architecture:
      'Arsitektur menggunakan modular monolith di Laravel dengan pemisahan domain berbasis route modules, service layer, observer, dan job queue. Strategi performa menerapkan SQL aggregation, composite indexing, multi-layer caching, serta asynchronous API loading untuk komponen dashboard. Proses impor data memanfaatkan chunk processing dan background jobs agar skalabel dan tahan timeout.',
    technicalDecisions: [
      {
        title: 'Template-driven assessment and logbook engine',
        description:
          'Menerapkan model template untuk form penilaian dan logbook agar instrumen evaluasi dapat dipakai ulang, di-versioning, dan di-deploy per periode tanpa mengganggu histori data.',
      },
      {
        title: 'Async import pipeline with chunk jobs',
        description:
          'Menggunakan pipeline import berbasis queue dan chunk processing untuk memproses data pengguna dalam volume besar dengan progress tracking, validasi berlapis, dan error reporting yang jelas.',
      },
      {
        title: 'Performance-first dashboard architecture',
        description:
          'Mengganti agregasi in-memory menjadi agregasi SQL, menambahkan indeks komposit, serta memisahkan initial render dan background loading untuk menjaga waktu respons tetap cepat.',
      },
      {
        title: 'Layered protection with named rate limiters',
        description:
          'Menerapkan limiter terpisah untuk login, form submission, upload, export, dan route umum sehingga sistem tetap aman tanpa mengorbankan kenyamanan penggunaan normal.',
      },
    ],
    implementationHighlights: [
      'Membangun alur penilaian lengkap untuk skenario individu, kelompok, self-assessment, dan peer assessment dengan kontrol satu entri per kombinasi penilai-subjek-form',
      'Mengembangkan modul logbook berbasis pertanyaan dan kompetensi, termasuk tampilan adaptif mobile berbasis kartu agar pengisian tetap nyaman di ponsel',
      'Mengimplementasikan manajemen periode akademik sebagai konteks utama seluruh data penilaian, logbook, dan kelompok',
      'Menyediakan import pengguna berbasis Excel dengan preview DataTables, validasi rinci, background processing, dan progress monitoring real-time',
      'Mengoptimalkan dashboard melalui caching, observer-based cache invalidation, endpoint async, dan skeleton loading untuk perceived performance lebih baik',
      'Menerapkan kebijakan rate limiting terstruktur untuk perlindungan brute force, spam, dan abuse pada endpoint kritikal',
    ],
    challenges: [
      {
        challenge: 'Kompleksitas rule evaluasi lintas peran dalam satu sistem',
        solution:
          'Merancang workflow berbasis tipe penilaian dan konteks role agar setiap pengguna hanya melihat serta mengisi instrumen yang relevan sesuai kewenangannya.',
      },
      {
        challenge: 'Kinerja dashboard menurun pada beban concurrent tinggi',
        solution:
          'Melakukan refactor query ke SQL aggregation, menambahkan indeks komposit, serta menerapkan caching dan async loading untuk menurunkan query count dan latensi.',
      },
      {
        challenge:
          'Import data pengguna volume besar rentan timeout dan error validasi',
        solution:
          'Menerapkan chunked queue jobs, validasi pre-import pada halaman preview, dan progress page dengan statistik sukses-gagal agar proses lebih andal dan mudah diawasi.',
      },
      {
        challenge:
          'Menjaga keamanan endpoint tanpa menghambat penggunaan harian',
        solution:
          'Mendefinisikan limiter per kategori operasi dengan ambang batas berbeda untuk authenticated dan guest, disertai pesan throttle yang informatif.',
      },
    ],
    lessonsLearned: [
      'Sistem evaluasi akademik harus dirancang sebagai workflow product, bukan sekadar CRUD data',
      'Template dan versioning instrumen adalah fondasi penting untuk menjaga fleksibilitas sekaligus konsistensi penilaian',
      'Optimasi performa paling efektif dimulai dari desain query, indeks, dan strategi cache, bukan hanya upgrade infrastruktur',
      'Background job dan progress observability sangat krusial untuk fitur import data skala besar',
      'Keamanan aplikasi terbaik dicapai dengan pendekatan berlapis: authorization, rate limiting, dan monitoring operasional',
      'Dokumentasi pengguna yang jelas mempercepat adopsi sistem lintas peran secara signifikan',
    ],
  },
]

export const notes: Note[] = [
  {
    slug: 'automated-testing-laravel',
    title: 'Lessons from implementing automated testing in Laravel',
    excerpt:
      'How I built a comprehensive testing pipeline from scratch, including unit tests, feature tests, and browser tests.',
    category: 'Testing',
    readTime: '8 min read',
    date: '2024-01-15',
    content: `
## Overview

Testing is often treated as an afterthought in Laravel projects, but implementing a robust testing strategy can dramatically improve code quality and reduce bugs in production.

## The Beginning

When I first started, our Laravel application had zero test coverage. Every deployment was a gamble, and hotfixes frequently introduced new bugs. I decided to change this.

## Strategy

I approached testing in layers:

1. **Unit Tests** - Test individual methods and business logic
2. **Feature Tests** - Test user workflows and API endpoints  
3. **Browser Tests** - Test critical user interactions

## Key Learnings

### 1. Test Behavior, Not Implementation

The biggest mistake I made was testing implementation details. When I refactored code, tests broke even though the behavior was correct. I learned to focus on what the code *does*, not *how* it does it.

### 2. Use Pest PHP

Pest PHP provides a beautiful fluent interface for PHPUnit. It reduces boilerplate and makes tests more readable:

\`\`\`php
it('can create a user')
    ->post('/api/users', ['name' => 'John'])
    ->assertStatus(201);
\`\`\`

### 3. Test Database Strategy

Use in-memory SQLite for unit tests, but test against PostgreSQL for feature tests to catch database-specific issues.

## Results

After 6 months:
- 80% test coverage
- 90% reduction in production bugs
- 50% faster feature development
    `,
  },
  {
    slug: 'debugging-production-performance',
    title: 'Debugging production performance issues: A case study',
    excerpt:
      'A deep dive into diagnosing and fixing a severe performance degradation in a Laravel application.',
    category: 'Performance',
    readTime: '12 min read',
    date: '2024-02-20',
    content: `
## The Problem

At 2 AM, I received an alert: our API response times had increased from 200ms to 15+ seconds. Users were experiencing timeouts and the system was barely functional.

## Initial Investigation

I started by checking the usual suspects:
- Server CPU/memory: Normal
- Database connections: Normal  
- External API calls: Normal

The issue wasn't obvious.

## Database Query Analysis

I enabled the query log and discovered the problem. A seemingly innocent dashboard query was executing 500+ queries due to the N+1 problem:

\`\`\`php
// This caused N+1 queries
$orders = Order::all();
foreach ($orders as $order) {
    echo $order->customer->name;
}
\`\`\`

The fix was simple with eager loading:

\`\`\`php
$orders = Order::with('customer')->get();
\`\`\`

## The Deeper Issue

But that wasn't all. Even with eager loading, queries were slow. I discovered:
- Missing indexes on frequently queried columns
- Full table scans on large tables
- Inefficient join queries

## Solutions Implemented

1. Added database indexes on foreign keys and frequently filtered columns
2. Implemented query caching with Redis
3. Added database connection pooling
4. Implemented read replicas for heavy read queries

## Results

Response time dropped from 15 seconds to 150ms - a 100x improvement.

## Key Takeaways

- Always profile database queries in production-like conditions
- N+1 problems hide until you have real data
- Monitoring and alerting are essential for quick problem detection
    `,
  },
  {
    slug: 'maintainable-crud-architectures',
    title: 'Designing maintainable CRUD architectures',
    excerpt:
      'Patterns and practices for building Laravel applications that remain maintainable as they grow.',
    category: 'Architecture',
    readTime: '10 min read',
    date: '2024-03-10',
    content: `
## The CRUD Trap

Laravel makes it incredibly easy to build CRUD applications. But as your application grows, naive CRUD code becomes unmaintainable.

## The Problem

Here's what typically happens:

\`\`\`php
// OrdersController.php
public function update(Request $request, $id)
{
    $order = Order::find($id);
    $order->status = $request->status;
    $order->save();
    
    // 200 lines later...
}
\`\`\`

Business logic scattered across controllers, models, and anywhere else it "fit".

## Better Approach: Service Classes

Extract business logic into dedicated service classes:

\`\`\`php
class OrderService
{
    public function updateStatus(Order $order, string $status): Order
    {
        // All business logic in one place
        
        if (!$this->canTransitionTo($order->status, $status)) {
            throw new InvalidStatusTransitionException(...);
        }
        
        $order->status = $status;
        $order->save();
        
        event(new OrderStatusChanged($order));
        
        return $order;
    }
}
\`\`\`

## Actions Pattern

For more complex operations, use the Action pattern:

\`\`\`php
class UpdateOrderStatus
{
    public function execute(Order $order, string $status): Order
    {
        // Single responsibility
    }
}
\`\`\`

## Results

- Controllers become thin and consistent
- Business logic is testable and reusable
- Onboarding new developers is easier
- Bugs are easier to find and fix
    `,
  },
  {
    slug: 'reliable-backend-systems',
    title: 'Building reliable backend systems: Best practices',
    excerpt:
      'Essential practices for building backend systems that can handle failure gracefully.',
    category: 'Reliability',
    readTime: '15 min read',
    date: '2024-04-05',
    content: `
## Beyond Happy Path

Building a backend that works 99% of the time is easy. Building one that degrades gracefully under failure is hard.

## Principle 1: Defensive Programming

Always validate inputs, even from internal services:

\`\`\`php
class PaymentService
{
    public function charge(Order $order, array $paymentData)
    {
        // Validate even though it came from our own code
        if (!isset($paymentData['token'])) {
            throw new InvalidPaymentDataException('Missing payment token');
        }
        
        // ...
    }
}
\`\`\`

## Principle 2: Circuit Breakers

External services will fail. Implement circuit breakers:

\`\`\`php
class PaymentGateway
{
    use CircuitBreaker;
    
    protected int $failureThreshold = 5;
    protected int $timeout = 60;
    
    public function charge(array $data)
    {
        if ($this->isOpen()) {
            throw new ServiceUnavailableException('Payment service degraded');
        }
        
        try {
            return $this->attemptCharge($data);
        } catch (ExternalServiceException $e) {
            $this->recordFailure();
            throw;
        }
    }
}
\`\`\`

## Principle 3: Idempotency

API calls will be retried. Design for idempotency:

\`\`\`php
public function createPayment(string $orderId, string $idempotencyKey)
{
    $existing = Payment::where('idempotency_key', $idempotencyKey)->first();
    
    if ($existing) {
        return $existing; // Return existing instead of creating duplicate
    }
    
    // Create new payment...
}
\`\`\`

## Monitoring

You can't fix what you can't see:
- Log everything meaningful
- Track error rates and latency
- Set up alerts for anomalies
- Use distributed tracing for microservices
    `,
  },
]
