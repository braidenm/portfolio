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
      'Designed and load-tested a webhook platform with DDD, CQRS, Kafka, and backpressure; dispatched 10,000 outbound calls in under 30 seconds while protecting downstream services.',
      'Created API-first standards, shared libraries, and testing patterns that helped frontend, backend, analytics, and partner teams deliver against clearer contracts.',
      'Delivered Azure AI Foundry provisioning and LLM gateway foundations on an aggressive timeline, coordinating across vendor and internal ownership boundaries.',
    ],
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'Kafka', 'Elasticsearch', 'Axon', 'PostgreSQL', 'MongoDB', 'Azure AI'],
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
];
