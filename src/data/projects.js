const developerDocs = 'https://app.braidenmiller.com/about/developer';

export const projects = [
  {
    id: 'platform-app-lab',
    title: 'Platform App Lab',
    badge: 'Personal project / self-hosted platform',
    description: 'A Kotlin and Spring Boot modular monolith with domain-oriented modules, Axon command/event workflows, and a React client. I own its architecture, implementation, deployment, and operations.',
    githubUrl: 'https://github.com/braidenm/platform-demo',
    liveUrl: 'https://app.braidenmiller.com/',
    accent: 'primary',
    capabilitiesTitle: 'Backend design',
    capabilities: [
      'Separate command handling and query projections for event-sourced domain lifecycles.',
      'Documented API contracts and consumer-owned ports for selected authorization, email, and storage integrations.',
      'Structured diagnostics, correlation identifiers, metrics, and operational administration.',
    ],
    deliveryEvidenceTitle: 'Delivery and tradeoffs',
    deliveryEvidence: [
      'Specifications, ADRs, generated documentation, and scoped unit, integration, contract, and browser checks.',
      'Immutable images, exact-commit deployment, health checks, and rollback support.',
      'Ports/adapters adoption is partial; cross-module boundary debt is documented. Kafka, production OpenFGA, federated OIDC, and MCP are not enabled.',
    ],
    evidenceLinks: [
      { label: 'Axon and CQRS', href: `${developerDocs}/axon-cqrs` },
      { label: 'API contracts', href: `${developerDocs}/api-contracts` },
      { label: 'Ports and adapters', href: `${developerDocs}/ports-adapters` },
      { label: 'Observability', href: `${developerDocs}/observability` },
    ],
    technologies: ['Kotlin', 'Spring Boot', 'Axon', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'media-transfer',
    title: 'Media Transfer',
    badge: 'Application within Platform App Lab',
    description: 'Photo and video share spaces with guest contributions, original-file downloads, and resumable uploads. This is the product workflow I use to exercise the platform end to end.',
    githubUrl: 'https://github.com/braidenm/platform-demo',
    liveUrl: 'https://app.braidenmiller.com/media',
    accent: 'secondary',
    capabilitiesTitle: 'Application workflows',
    capabilities: [
      'Batch uploads with progress and retries, contributor controls, and original-file preservation.',
      'Media derivatives, playback, retention windows, and capacity safeguards.',
      'A storage port with local and S3-compatible adapters.',
    ],
    deliveryEvidenceTitle: 'Verification and limits',
    deliveryEvidence: [
      'API, integration, and browser regression tests cover upload and download workflows.',
      'Transfer telemetry distinguishes file-transfer time from backend request latency.',
      'Native iPhone Share / Save to Photos still requires physical-device acceptance; browser automation alone does not prove it.',
    ],
    evidenceLinks: [
      { label: 'Media lifecycle', href: `${developerDocs}/media-lifecycle` },
      { label: 'Storage boundaries', href: `${developerDocs}/ports-adapters` },
    ],
    technologies: ['Kotlin', 'Spring Boot', 'Axon', 'Uppy / TUS', 'ffmpeg', 'Local + S3 storage', 'Playwright'],
  },
];
