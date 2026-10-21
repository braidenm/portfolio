# Braiden Miller - Portfolio

A personal portfolio at [braidenmiller.com](https://braidenmiller.com/) focused on backend engineering with Java, Kotlin, and Spring Boot. Professional outcomes and the self-hosted Platform App Lab are presented separately; public technical evidence links lead to the app's API, Axon/CQRS, ports/adapters, and observability documentation.

## Content and Evidence

- Career facts come from `src/data/` and the existing `scripts/generate_resume.py`. Employer names, role dates, and numerical outcomes must not be invented or inferred from personal projects.
- The first screen highlights backend implementation and collaboration; the following band summarizes reversible migration, search performance, and webhook load-test outcomes.
- The personal app is a modular monolith with partial ports/adapters adoption, not a claim of universal architectural compliance. Production Kafka, OpenFGA, federated OIDC, and MCP are not enabled.
- Native iPhone share-sheet acceptance remains a physical-device check, not a guarantee from browser automation.
- [Positioning record](docs/backend-positioning.md) explains source boundaries and deferred work. The subsequent [resume refresh](docs/resume-maintenance.md) updates confirmed career evidence and public downloads without changing contact behavior, runtime or release permissions.

## Technology Stack

- **React 18** - UI library
- **Material-UI (MUI) v5** - Component library and styling
- **Create React App** - Build tooling
- **React Router** - Navigation (for future expansion)

## Features

- **Responsive Design** - Mobile-first approach with Material-UI breakpoints
- **Readable Layout** - Full-bleed personal photo, distinct section boundaries, and unframed technical case studies
- **Smooth Scrolling** - Native smooth scroll behavior for section navigation
- **Focused Project Showcase** - One current, inspectable platform case study instead of a wall of older tutorial projects
- **Resume Viewer** - PDF resume viewer with download option
- **Work History** - Outcome-oriented professional experience
- **Engineering Approach** - Product partnership, cross-team alignment, technical validation, and team enablement
- **Contact Information** - Easy access to email, phone, and social links

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Navigation, Footer
│   ├── sections/        # Main page sections
│   ├── common/          # Reusable components
│   └── Resume/          # Resume viewer component
├── data/                # Data files (projects, skills, etc.)
├── theme/               # Material-UI theme configuration
└── utils/               # Utility functions and constants
```

## Getting Started

### Prerequisites

- Node.js and npm compatible with the existing Create React App toolchain. The current Docker build pins Node 18; runtime modernization is separate from this content slice.

### Installation

1. Install dependencies:
```bash
npm ci
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Content Regression Tests

```bash
npm test -- --watchAll=false --runInBand
```

Tests protect role positioning, professional facts, personal-project limitations, evidence links, public metadata, and the versioned resume URL. They do not replace mobile/desktop layout review or prove native device sharing.

### Contact Form

The contact form posts to `/v1/portfolio/contact` by default. In production, Caddy routes that path to the platform backend so email delivery happens server-side through MailerSend.

For local or staging builds that need a different API origin, set:

```bash
REACT_APP_CONTACT_ENDPOINT=http://localhost:8080/v1/portfolio/contact
```

### Docker
1. Build the image:
```bash
docker build -t portfolio .
```

2. Run the container:
```bash
docker run -p 8080:80 portfolio
```
3. Access at [http://localhost:8080](http://localhost:8080)

## Deployment and CI/CD
`ci.yml` verifies pull requests with a locked dependency install, content tests, and a production build using read-only repository permissions. Run the same checks locally before review. The existing `deploy.yml` remains responsible for pushes to `main`. On every push to the `main` branch:
1. A Docker image is built and pushed to the GitHub Container Registry (GHCR).
2. The exact commit-tagged image is sent through Home Lab's governed generic service deployment workflow as the `portfolio` service in the `web` stack.

## Sections

- **Home/Hero** - Name, backend role, JVM focus, and source-backed professional outcomes
- **About** - Collaboration style, engineering background, education, and certifications
- **Experience** - Professional roles and measurable outcomes
- **Approach** - How product, architecture, delivery, and feedback fit together
- **Work** - Personal Platform App Lab and Media Transfer case studies, technical evidence, and implementation limits
- **Resume** - Preview and download of the generated PDF resume
- **Contact** - Contact information and social links

## Data Management

All content is managed through data files in `src/data/`:
- `personalInfo.js` - Personal information and contact details
- `projects.js` - Project portfolio data
- `skills.js` - Skills and technology stack
- `workHistory.js` - Work experience data

## Customization

### Theme

Edit `src/theme/theme.js` to customize:
- Colors (primary, secondary)
- Typography (fonts, sizes)
- Component styles
- Spacing and breakpoints

### Content

Update data files in `src/data/` to modify:
- Personal information
- Projects
- Skills
- Work history

## License

See LICENSE file for details.
