# Backend Portfolio Positioning

Reviewed 2026-10-20. This is a presentation/content change, not a new architecture decision or a runtime migration.

## Audience and Structure

Lead with Braiden Miller, Backend Engineer, and Java/Kotlin/Spring Boot. Follow with professional outcomes, employer experience, then separately labeled personal engineering work. Emphasize hands-on implementation, API contracts, event-driven workflows, reversible migrations, vendor integration, diagnostics, and cross-team delivery rather than broad reliability promises.

The existing personal mountain photograph is a full-bleed image rather than a split hero card. Professional outcomes have a separate, light section so the transition to experience is visible. Project details are unframed articles with links to implementation evidence.

## Fact Sources

- `src/data/personalInfo.js`, `skills.js`, and `workHistory.js`: career background, qualifications, technologies, employer names and dates.
- Existing `scripts/generate_resume.py`: API-first standards/shared libraries/coaching language corroborates the added experience bullet. The generator and published PDF are unchanged.
- The owner refined the published wording on 2026-10-20: multiple domains extracted with millions of records migrated, synchronized systems and rollback; 60+ second search to sub-second with no cutover timeframe; redundant KMS calls reduced by 90% through more efficient data use and just-in-time access. Webhook dispatch remains 10,000 calls in under 30 seconds **in load testing** with backpressure, not remote delivery completion time. These are not personal-project traffic claims. Zen Planner uses the corrected display spelling without changing employer tenure or role.
- No new employers, dates, tenure, certifications, or numerical results are introduced. No company-specific application or interview information is published.

## Personal Project Boundaries

The published app developer manifest at `/developer/manifest.json` supplies the canonical topic identifiers used by the evidence links: `axon-cqrs`, `api-contracts`, `ports-adapters`, `observability`, and `media-lifecycle`. These link to released, source-linked documentation rather than fabricated case studies.

Platform App Lab demonstrates Axon workflows and partial consumer-owned ports/adapters within a modular monolith. Cross-module boundary debt remains documented. Kafka, production OpenFGA, federated OIDC, and MCP are not enabled; listing Kafka as a professional skill must not imply otherwise. Media Transfer is an application within that same platform, not an independent employer engagement. Native iPhone Share / Save to Photos needs physical-device acceptance.

## Verification and Deferred Work

Use the existing locked dependency tree (`npm ci`), Jest through `react-scripts`, and the production build. Content regressions verify the public copy, structured evidence links, metadata, employer chronology, and versioned resume URL. Review desktop and mobile layouts, resume preview, navigation, and rendered assets before release. Tests make no contact submissions.

Keep runtime upgrades, the resume PDF/generator, contact API/security, backend implementation, and privileged deployment workflows out of this slice. The baseline had only a main-branch deployment workflow. A separate parent-owned `ci.yml` adds read-only PR test/build verification; this content work does not modify it or claim that hosted checks have passed before they run.

Local verification completed: locked `npm ci`, 8 Jest content/interaction tests, and a successful optimized production build (tests/build also checked on Node 24.18.1). A temporary Chromium/Playwright runner checked 1440x1000, 900x900, 390x844, 320x740, 1920x768, and 1440x600 layouts: image rendering, visible next-section boundary, no horizontal/text overflow, resume preview/download/close, mobile navigation, and no browser console/page errors. Screenshots are local review artifacts under ignored `tmp/`, not committed site content. The existing Browserslist database is old; refreshing dependencies is deferred rather than changing the lockfile in this slice.
