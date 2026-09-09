export const workHistory = [
  {
    id: 'pax8',
    company: 'Pax8',
    position: 'Senior Software Engineer II',
    duration: '2022 - Present',
    description: [
      'Delivered platform releases on schedule by aligning product, architecture, analytics, frontend, backend, and partner teams around phased plans and explicit dependencies.',
      'Migrated millions of records from a monolith into a domain-aligned service. Kept both systems synchronized during cutover and provided one-click rollback.',
      'Replaced a search path that took more than 60 seconds with Elasticsearch, producing sub-second results within one two-week sprint.',
      'Introduced CI/CD, integration testing, and observability patterns that support same-day production fixes for customer-reported defects.',
      'Designed and load-tested a DDD/CQRS webhook platform that dispatched 10,000 calls in under 30 seconds while applying backpressure to protect downstream services.',
      'Delivered Azure AI Foundry provisioning and LLM gateway foundations while coordinating vendor and internal platform dependencies.',
    ],
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'Kafka', 'Elasticsearch', 'Axon', 'PostgreSQL', 'MongoDB', 'Azure AI'],
  },
  {
    id: 'zenplanner',
    company: 'Zenplanner',
    position: 'Software Engineer',
    duration: '2020 - 2022',
    description: [
      'Built a greenfield services platform supported by CI/CD, contract tests, and unit, integration, and end-to-end test suites.',
      'Implemented Stripe subscription and billing flows for prorates, split funding, multiple locations, partial payments, refunds, and varied schedules.',
      'Used Kafka, API gateways, webhooks, and documented APIs to deliver financial workflows across internal teams and external vendors.',
    ],
    technologies: ['Java', 'Spring', 'Kafka', 'Stripe API', 'MySQL', 'AWS', 'Microservices', 'Contract Testing'],
  },
  {
    id: 'nexgen',
    company: 'NexGen Technologies',
    position: 'Software Developer II',
    duration: '2019 - 2020',
    description: [
      'Developed and optimized services in a large production application through design reviews and pair programming.',
      'Reduced monolith coupling by extracting reusable components and adding tests and APIs for incremental delivery.',
    ],
    technologies: ['Java', 'Spring', 'Microservices', 'SQL', 'Testing', 'Agile'],
  },
];
