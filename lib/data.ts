export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  duration: string;
  role: string;
  overview: string;
  constraints: string[];
  architecture: string;
  technicalDecisions: { title: string; description: string }[];
  implementationHighlights: string[];
  challenges: { challenge: string; solution: string }[];
  lessonsLearned: string[];
}

export interface Note {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    subtitle: 'Integrated digital platform for healthcare operations',
    problem: 'Manual patient data handling causing significant delays, frequent errors in medical records, and inefficient communication between departments leading to compromised patient care.',
    solution: 'Built a comprehensive digital platform with real-time patient tracking, electronic medical records, appointment scheduling, and inter-department communication system.',
    impact: '60% reduction in patient processing time, 95% reduction in record errors, improved department coordination',
    tech: ['Laravel', 'PostgreSQL', 'React', 'Docker', 'Redis'],
    duration: '8 months',
    role: 'Lead Fullstack Engineer',
    overview: 'A comprehensive hospital management system designed to digitize and streamline all healthcare operations. The system handles patient registration, appointment scheduling, medical records, billing, and real-time department communication.',
    constraints: [
      'Must comply with healthcare data privacy regulations',
      'System must handle 500+ concurrent users during peak hours',
      'Zero tolerance for data loss - critical medical information',
      'Must work reliably on slow network connections'
    ],
    architecture: 'The system uses a microservices architecture with Laravel-based backend services. The frontend is built with React and communicates via RESTful APIs. PostgreSQL serves as the primary database with Redis for caching and session management. Docker containerization ensures consistent deployment across environments.',
    technicalDecisions: [
      { title: 'Event-driven architecture', description: 'Implemented event sourcing for medical records to maintain complete audit trail and enable complex reporting without impacting primary write operations.' },
      { title: 'Optimistic locking', description: 'Used optimistic locking with version fields to prevent concurrent edit conflicts in medical records, ensuring data integrity without sacrificing performance.' },
      { title: 'Read replicas', description: 'Separated read and write operations using database replicas to handle high read-load from multiple departments without blocking writes.' }
    ],
    implementationHighlights: [
      'Built custom RBAC system with role-specific permissions for doctors, nurses, admins, and front desk staff',
      'Implemented real-time notifications using WebSocket for urgent lab results and emergency alerts',
      'Created automated backup system with point-in-time recovery capability',
      'Designed offline-first mobile responsive interface for staff working in low-connectivity areas'
    ],
    challenges: [
      { challenge: 'Complex permission requirements', solution: 'Designed a hierarchical permission system that supports role inheritance and contextual access control based on department and patient assignment.' },
      { challenge: 'Data migration from legacy systems', solution: 'Built a custom ETL pipeline with validation rules and fuzzy matching to handle inconsistent legacy data formats while maintaining data integrity.' },
      { challenge: 'Performance under load', solution: 'Implemented aggressive caching strategy with cache invalidation on write, reducing database load by 70% during peak hours.' }
    ],
    lessonsLearned: [
      'Healthcare systems require defensive programming - always validate and sanitize all inputs',
      'Audit trails are not optional in medical software - they are a legal requirement',
      'User training is as important as code quality - invested heavily in onboarding documentation',
      'Performance testing must simulate real-world usage patterns, not just theoretical load'
    ]
  },
  {
    slug: 'elearning-platform',
    title: 'E-Learning Platform',
    subtitle: 'Scalable education platform with progress analytics',
    problem: 'Inefficient course delivery, lack of student progress visibility, and manual assessment handling limiting the scalability of educational programs.',
    solution: 'Developed a full-featured learning management system with video streaming, automated assessments, progress tracking, and real-time analytics dashboard.',
    impact: '500+ active users, real-time sync across devices, 40% reduction in assessment grading time',
    tech: ['Laravel', 'MySQL', 'Vue.js', 'AWS S3', 'CloudFront'],
    duration: '6 months',
    role: 'Fullstack Engineer',
    overview: 'A modern e-learning platform enabling educators to create and deliver courses while providing students with an engaging learning experience. The platform supports video lessons, quizzes, assignments, and comprehensive progress tracking.',
    constraints: [
      'Must support video streaming for 1000+ simultaneous viewers',
      'Offline access required for students in areas with poor connectivity',
      'Assessment results must be secure and tamper-proof',
      'Accessibility compliance required (WCAG 2.1 AA)'
    ],
    architecture: 'Monolithic Laravel application with Vue.js SPA frontend. Video content served through AWS CloudFront CDN with S3 storage. MySQL database with Redis for session management. Background jobs handled by Laravel Queue with Redis.',
    technicalDecisions: [
      { title: 'Video transcoding pipeline', description: 'Implemented automated video transcoding to multiple qualities using FFmpeg, ensuring optimal playback across different bandwidths and devices.' },
      { title: 'Progressive Web App', description: 'Built PWA features including service workers for offline course access, push notifications for course updates, and install prompt.' },
      { title: 'Quiz anti-cheat system', description: 'Designed randomized question pools, time limits, and browser focus detection to maintain assessment integrity.' }
    ],
    implementationHighlights: [
      'Created drag-and-drop course builder for instructors',
      'Built real-time progress dashboard with WebSocket updates',
      'Implemented certificate generation with QR verification',
      'Designed adaptive quiz difficulty based on student performance'
    ],
    challenges: [
      { challenge: 'Video buffering issues', solution: 'Implemented HLS streaming with quality adaptation based on network conditions, reducing buffer time by 80%.' },
      { challenge: 'Database performance with analytics', solution: 'Created materialized views for common analytics queries, improving dashboard load time from 5s to under 500ms.' },
      { challenge: 'Offline functionality', solution: 'Built service worker with IndexedDB to cache course content for offline viewing with automatic sync when online.' }
    ],
    lessonsLearned: [
      'PWA technology is mature enough for production educational apps',
      'Analytics queries can kill database performance - pre-compute what you can',
      'Video is deceptively complex - invest in proper infrastructure early',
      'User feedback loops are essential for educational platform success'
    ]
  },
  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    subtitle: 'Real-time inventory tracking with predictive analytics',
    problem: 'Stock visibility issues causing frequent overstock situations and product shortages, leading to wasted capital and lost sales.',
    solution: 'Created a comprehensive inventory system with real-time tracking, automated reorder alerts, barcode scanning, and demand forecasting.',
    impact: '40% reduction in stock discrepancies, 30% decrease in carrying costs, 25% improvement in order fulfillment',
    tech: ['Laravel', 'PostgreSQL', 'React Native', 'REST API', 'Docker'],
    duration: '5 months',
    role: 'Lead Backend Engineer',
    overview: 'A warehouse and inventory management system designed to provide real-time stock visibility across multiple locations. The system integrates with POS systems, handles barcode/QR scanning, and provides predictive analytics for demand forecasting.',
    constraints: [
      'Must work in offline mode for warehouse staff without network access',
      'Real-time sync required across 5 warehouse locations',
      'Integration with existing ERP system via REST API',
      'Sub-second response time for barcode scans'
    ],
    architecture: 'Laravel REST API backend with PostgreSQL. React Native mobile apps for warehouse staff. WebSocket for real-time updates. PostgreSQL logical replication for multi-warehouse data sync. Redis for caching and rate limiting.',
    technicalDecisions: [
      { title: 'CQRS pattern', description: 'Implemented Command Query Responsibility Segregation to optimize both write operations (stock updates) and read operations (inventory queries) independently.' },
      { title: 'Optimistic sync', description: 'Built offline-first mobile app with eventual consistency - local changes sync when online with conflict resolution.' },
      { title: 'Event sourcing', description: 'Used event sourcing to maintain complete inventory history, enabling audit trails and analytical insights.' }
    ],
    implementationHighlights: [
      'Built custom barcode/QR scanning module with camera integration',
      'Implemented real-time dashboard with live inventory updates',
      'Created automated reorder point calculation based on lead times and demand variance',
      'Designed integration layer for ERP synchronization'
    ],
    challenges: [
      { challenge: 'Offline-first requirements', solution: 'Implemented local SQLite database on mobile devices with CRDT-like conflict resolution for simultaneous edits.' },
      { challenge: 'Real-time multi-location sync', solution: 'Used PostgreSQL logical replication with conflict resolution at application layer, achieving sub-second sync across locations.' },
      { challenge: 'Performance with large datasets', solution: 'Implemented database partitioning by warehouse and time-based partitioning for transaction history.' }
    ],
    lessonsLearned: [
      'Offline-first architecture requires different thinking - design for network failures',
      'Real-time sync across geographic locations is harder than it looks',
      'Inventory math is deceptively complex - safety stock, reorder points, lead times all interact',
      'User adoption depends on performance - slow apps get abandoned'
    ]
  }
];

export const notes: Note[] = [
  {
    slug: 'automated-testing-laravel',
    title: 'Lessons from implementing automated testing in Laravel',
    excerpt: 'How I built a comprehensive testing pipeline from scratch, including unit tests, feature tests, and browser tests.',
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
    `
  },
  {
    slug: 'debugging-production-performance',
    title: 'Debugging production performance issues: A case study',
    excerpt: 'A deep dive into diagnosing and fixing a severe performance degradation in a Laravel application.',
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
    `
  },
  {
    slug: 'maintainable-crud-architectures',
    title: 'Designing maintainable CRUD architectures',
    excerpt: 'Patterns and practices for building Laravel applications that remain maintainable as they grow.',
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
    `
  },
  {
    slug: 'reliable-backend-systems',
    title: 'Building reliable backend systems: Best practices',
    excerpt: 'Essential practices for building backend systems that can handle failure gracefully.',
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
    `
  }
];
