# Braiden Miller - Portfolio

Personal portfolio at [braidenmiller.com](https://braidenmiller.com/), presenting senior software engineering work with Java, Kotlin, and Spring Boot. The main reading path covers professional outcomes, experience, personal projects, engineering approach, and contact.

## Content owners

| Content | Source |
| --- | --- |
| Career facts, skills, and project summaries | [src/data](src/data) |
| Page sections and resume dialog | [src/components](src/components) |
| Resume PDF | [Canonical generator and maintenance guide](docs/resume-maintenance.md) |
| Current review and verification limits | [Reading review](docs/reading-review-20261127.md) |
| Confirmed career evidence | [Positioning record](docs/backend-positioning.md) |

Keep employer titles, dates, qualifications, and numerical outcomes source-backed. The webhook result describes dispatch in a load test, not production traffic or completed remote delivery. Personal projects stay separate from employer work. AI content remains excluded from the resume at the owner's request.

The personal platform's public Developer guides describe integration scope and activation limits. A private service's existence does not prove that every feature uses it. Public project actions lead to the demo and guides; inaccessible repository links are not primary actions.

## Develop and verify

The existing React 18 / MUI 5 / Create React App toolchain uses the committed npm lockfile:

    npm ci
    npm start

Before review:

    npm test -- --watchAll=false --runInBand
    npm run build

The PR workflow also verifies the generated resume with its pinned Python dependencies. Review phone, tablet, and desktop layouts, native disclosures, section links and Back navigation, keyboard focus, image loading, and resume open/download/close. Browser automation does not establish physical-device PDF viewer behavior.

The Docker builder currently pins Node 18; toolchain modernization is separate from this content change. The PR workflow pins Node 24.18.1.

## Contact

The site offers direct email, LinkedIn, and phone links. It does not offer a Send control whose underlying public API is not admitted by the platform security chain. Public-route admission for a future form remains a separate Platform Demo task; this UI change does not modify API security or email delivery.

## Release

1. Pass the current-head Portfolio CI checks.
2. Merge the reviewed PR; the main-branch workflow publishes a source-labelled image.
3. Update the immutable Portfolio image pin through Home Lab Infrastructure.
4. Verify the private preview, promote through Argo Rollouts, and check both public hostnames, assets, resume, and contact links.
5. Refresh the personal-site standby through its existing owner.

The deployable frontend comes from this repository. Platform Demo owns the separate contact backend and in-app profile. [Public engineering guides](https://app.braidenmiller.com/about/developer/overview)

See LICENSE for terms.
