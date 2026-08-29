# Deprecated Standalone Portfolio

> This repository is retained as historical source and is intentionally not deployed. The canonical portfolio is maintained in [`braidenm/platform-demo`](https://github.com/braidenm/platform-demo) and published at [`app.braidenmiller.com/about/braiden`](https://app.braidenmiller.com/about/braiden).

This React application contains the former standalone portfolio. New portfolio content, resume updates, and deployment changes belong in Platform Demo.

## Technology Stack

- **React 18** - UI library
- **Material-UI (MUI) v5** - Component library and styling
- **Create React App** - Build tooling
- **React Router** - Navigation (for future expansion)

## Features

- **Responsive Design** - Mobile-first approach with Material-UI breakpoints
- **Modern UI** - Clean, card-based layouts with hover effects and transitions
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

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
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

### Contact Form

The historical contact form posts to `/v1/portfolio/contact` by default. It is available only when running this project locally with a compatible backend; there is no production route for this standalone application.

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

## Deployment

The standalone build and deployment workflow was removed when Platform Demo became the canonical portfolio. Do not publish or reintroduce a production deployment from this repository.

## Sections

- **Home/Hero** - Welcome section with introduction
- **About** - Collaboration style, engineering background, education, and certifications
- **Experience** - Professional roles and measurable outcomes
- **Approach** - How product, architecture, delivery, and feedback fit together
- **Work** - The live Platform App Lab case study
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

## Legacy Site

The original static HTML site is preserved in the `PersonalSite/` directory for reference.

## License

See LICENSE file for details.
