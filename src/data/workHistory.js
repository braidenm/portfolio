export const workHistory = [
  {
    id: 'pax8',
    company: 'Pax8',
    position: 'Senior Software Engineer II',
    duration: '2022 - Present',
    description: [
      'Partner with product managers, architects, and dependent teams to turn ambiguous platform goals into ADRs, phased plans, and services that meet aggressive launch dates.',
      'Migrated millions of records from a monolith while both systems remained synchronized, using observability and rollback paths to complete the cutover without customer disruption.',
      'Replaced a search path that exceeded 60 seconds with Elasticsearch in one two-week sprint, restoring sub-second results and enabling a safe relaunch.',
      'Designed and load-tested a webhook platform with DDD, CQRS, and backpressure; dispatched 10,000 outbound calls in under 30 seconds while protecting downstream services.',
      'Removed redundant encryption work that was rate-limiting requests, reducing daily KMS calls from more than 10,000 to fewer than 100.',
      'Created API-first standards, shared libraries, testing patterns, and practical coaching that helped frontend, backend, analytics, and partner teams deliver against clearer contracts.',
    ],
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'Kafka', 'Elasticsearch', 'Axon Framework', 'CQRS/DDD', 'PostgreSQL', 'MongoDB', 'AI Tooling'],
  },
  {
    id: 'zenplanner',
    company: 'Zenplanner',
    position: 'Software Engineer',
    duration: '2020 - 2022',
    description: [
      'Collaborated on a greenfield microservices platform supported by CI/CD, contract tests, and unit, service, integration, and end-to-end test suites.',
      'Built complex Stripe-backed subscription and billing flows covering prorates, split funding, multiple locations, partial payments, refunds, and varied billing schedules.',
      'Used Kafka, API gateways, webhooks, and documented public APIs to deliver reliable financial workflows across team and vendor boundaries.',
    ],
    technologies: ['Java', 'Spring', 'Kafka', 'Stripe API', 'MySQL', 'AWS', 'Microservices', 'Contract Testing'],
  },
  {
    id: 'nexgen',
    company: 'NexGen Technologies',
    position: 'Software Developer II',
    duration: '2019 - 2020',
    description: [
      'Developed and optimized microservices in a large production application while collaborating through design reviews and pair programming.',
      'Reduced monolith coupling by extracting reusable components and added tests, services, and APIs for incremental delivery.',
    ],
    technologies: ['Java', 'Spring', 'Microservices', 'SQL', 'Testing', 'Agile'],
  },
  {
    id: 'management',
    company: 'Retail Management',
    position: 'Store Manager / Management Roles',
    duration: 'Pre-2020 (6 years)',
    description: [
      'Managed profit and loss statements for high-volume stores, overseeing payroll budgets and inventory for up to 70 employees.',
      'Built a leadership foundation in coaching, conflict resolution, stakeholder communication, and continuous process improvement.',
    ],
    technologies: ['Leadership', 'Project Management', 'Team Development', 'Process Improvement', 'LEAN Practices'],
  },
];
