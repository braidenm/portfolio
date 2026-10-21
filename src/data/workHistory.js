export const professionalOutcomes = [
  { value: 'Millions of records', label: 'Migrated with synchronized systems, parity checks, and a rollback path.' },
  { value: '60+ seconds to sub-second', label: 'Search response time improved with Elasticsearch.' },
  { value: '10,000 calls dispatched', label: 'In under 30 seconds during a webhook load test. Backpressure protected downstream services.' },
];

export const workHistory = [
  {
    id: 'pax8',
    company: 'Pax8',
    position: 'Senior Software Engineer II',
    duration: '2022 - Present',
    description: [
      'Extracted multiple domains from a monolith into services and migrated millions of records. Kept old and new systems synchronized during rollout, verified parity, and retained tested rollback paths through cutover.',
      'Replaced a search path that took more than 60 seconds with Elasticsearch, producing sub-second results.',
      'Introduced CI/CD, integration testing, and observability patterns that support same-day production fixes for customer-reported defects.',
      'Designed and load-tested a DDD/CQRS webhook platform that dispatched 10,000 calls in under 30 seconds while applying backpressure to protect downstream services.',
      'Created API-first standards, shared libraries, and testing patterns, with practical coaching to help frontend, backend, analytics, and partner teams deliver against clearer contracts.',
      'Delivered platform releases on schedule by aligning product, architecture, analytics, frontend, backend, and partner teams around phased plans and explicit dependencies.',
      'Delivered Azure AI Foundry provisioning and LLM gateway foundations while coordinating vendor and internal platform dependencies.',
    ],
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'Kafka', 'Elasticsearch', 'Axon', 'PostgreSQL', 'MongoDB', 'Azure AI'],
  },
  {
    id: 'zenplanner',
    company: 'Zen Planner',
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
