# Portal - React Portfolio Site

A modern React portfolio website showcasing projects, skills, work history, and professional information.

## Technology Stack

- **React 18** - UI library
- **Material-UI (MUI) v5** - Component library and styling
- **Create React App** - Build tooling
- **React Router** - Navigation (for future expansion)

## Features

- **Responsive Design** - Mobile-first approach with Material-UI breakpoints
- **Modern UI** - Clean, card-based layouts with hover effects and transitions
- **Smooth Scrolling** - Native smooth scroll behavior for section navigation
- **Project Showcase** - Filterable project gallery with GitHub and demo links
- **Resume Viewer** - PDF resume viewer with download option
- **Work History** - Detailed work experience timeline
- **Skills Display** - Technology stack with icons and descriptions
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
This project uses GitHub Actions for automated deployment. On every push to the `main` branch:
1. A Docker image is built and pushed to the GitHub Container Registry (GHCR).
2. A `portfolio_updated` event is dispatched to the `braidenm/homelab-infrustructure` repository to trigger deployment.

## Sections

- **Home/Hero** - Welcome section with introduction
- **About Me** - Personal background, education, certifications, and experience
- **Resume** - PDF resume viewer
- **Work History** - Professional experience timeline
- **Skills** - Technology stack and programming languages
- **Projects** - Portfolio of applications and web projects
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
