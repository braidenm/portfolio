# Portfolio positioning

Current reading review: 2026-11-27. This is presentation work, not a new architecture decision or runtime migration.

## Audience and reading order

Lead with Braiden Miller, Senior Software Engineer, and Java/Kotlin/Spring Boot. Follow with concrete delivery outcomes, employer experience, separately labelled personal projects, engineering approach, and contact. Keep detailed implementation references available without making them the first reading path.

The original personal mountain photograph and descriptive alt text remain. The portfolio highlights planned releases delivered, monolith extraction, and query improvements. The complete webhook load-test example remains in optional experience detail.

## Confirmed facts

The owner refined the published wording on 2026-10-20:

- Multiple domains extracted with millions of records migrated, synchronized systems, parity checks, and a tested rollback/cutback path.
- A 60+ second search path replaced with sub-second Elasticsearch results, with no invented cutover timeframe.
- Redundant KMS calls reduced by 90% through more efficient data use and just-in-time access.
- Webhook dispatch of 10,000 calls in under 30 seconds in load testing, with backpressure. This is not remote delivery completion time or personal-project traffic.
- Zen Planner display spelling corrected without changing tenure or role.

The owner also confirmed on-schedule delivery and repeatable delivery patterns that support same-day production fixes. No new revenue, percentages, after-timings, employers, dates, tenure, or certifications are inferred.

## Project boundaries

Platform App Lab and Media Transfer are personal engineering work. Partial ports/adapters adoption and cross-module boundary debt remain documented. Integration status belongs to the current Developer guides; the earlier blanket disabled-integration list is superseded. In particular, private OpenFGA availability is distinct from selected route/mode enforcement.

Public project actions lead to the working demo, Developer guides, and the media-removal walkthrough. Anonymous GitHub access to the implementation repository returned 404 during this review, so the portfolio no longer presents it as a public source-code destination. Repository visibility is unchanged.

Native iPhone sharing and native PDF viewer behavior need their own device acceptance. The portfolio does not turn browser automation into those claims.

## Verification and follow-up

See [the current review](reading-review-20261127.md) for evidence and limits. The [2026-10-20 record](https://github.com/braidenm/portfolio/blob/bae440de6bf696f25b43d42a27da648df959cd46/docs/backend-positioning.md) retains the earlier validation history.

Resume source/PDF changes must follow [resume maintenance](resume-maintenance.md), including the Platform Demo mirror. Backend/security admission, runtime upgrades, and release operations remain separate from this presentation slice.
