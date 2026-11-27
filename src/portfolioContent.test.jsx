import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { readFileSync } from 'fs';
import path from 'path';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import WorkHistory from './components/sections/WorkHistory';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import EngineeringPhilosophy from './components/sections/EngineeringPhilosophy';
import { personalInfo } from './data/personalInfo';
import { professionalOutcomes, workHistory } from './data/workHistory';
import { projects } from './data/projects';

global.IS_REACT_ACT_ENVIRONMENT = true;
const mounted = [];

afterEach(() => {
  mounted.splice(0).forEach(({ root, container }) => {
    act(() => root.unmount());
    container.remove();
  });
});

const renderSection = (component) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  mounted.push({ root, container });
  act(() => root.render(<ThemeProvider theme={theme}>{component}</ThemeProvider>));
  return container;
};

test('the first screen positions senior engineering without changing the career title', () => {
  const hero = renderSection(<Hero />);
  expect(hero.querySelector('h1').textContent).toBe('Braiden Miller');
  expect(hero.textContent).toContain('Senior Software Engineer');
  expect(hero.textContent).toContain('Java / Kotlin / Spring Boot');
  expect(personalInfo.title).toBe('Senior Software Engineer II');
  expect(hero.querySelector('a[href="#work-history"]').textContent).toContain('View experience');
  expect(hero.querySelector('img').getAttribute('src')).toBe('/images/mountain.jpg');
  expect(hero.querySelector('img').getAttribute('alt')).toContain('Braiden Miller');
});

test('professional highlights explain delivery, monolith extraction and query improvements', () => {
  const outcomes = renderSection(<Hero />).querySelector('[aria-labelledby="outcomes-heading"]');
  expect(professionalOutcomes).toHaveLength(3);
  expect(outcomes.textContent).toContain('Planned releases delivered');
  expect(outcomes.textContent).toContain('product and engineering teams');
  expect(outcomes.textContent).toContain('Domains moved out of a monolith');
  expect(outcomes.textContent).toContain('systems synchronized');
  expect(outcomes.textContent).toContain('60+ second search path with sub-second Elasticsearch results');
  expect(outcomes.textContent).not.toMatch(/10,000|two-week|one.click/i);
});

test('employer roles and chronology remain unchanged', () => {
  expect(workHistory.map(({ company, position, duration }) => ({ company, position, duration }))).toEqual([
    { company: 'Pax8', position: 'Senior Software Engineer II', duration: '2022 - Present' },
    { company: 'Zen Planner', position: 'Software Engineer', duration: '2020 - 2022' },
    { company: 'NexGen Technologies', position: 'Software Developer II', duration: '2019 - 2020' },
  ]);
  const experience = renderSection(<WorkHistory />);
  expect(experience.querySelectorAll('article')).toHaveLength(3);
  expect(experience.textContent).toContain('10,000 calls in under 30 seconds');
  expect(experience.textContent).toContain('load-tested');
  expect(experience.textContent).toContain('API-first standards');
  expect(experience.textContent).toContain('Extracted multiple domains');
  expect(experience.textContent).not.toContain('two-week');
});

test('personal projects stay separate from professional outcomes and explain adoption limits', () => {
  const work = renderSection(<Projects />);
  expect(work.textContent).toContain('Personal engineering work');
  expect(work.textContent).toContain('Separate from my professional work');
  expect(work.textContent).toContain('Ports/adapters adoption is partial');
  expect(work.textContent).toContain('The Developer guide records each integration’s scope and activation limits');
  expect(work.textContent).not.toContain('federated OIDC, and MCP are not enabled');
  expect(work.querySelectorAll('details')).toHaveLength(3);
  expect([...work.querySelectorAll('details')].every((detail) => !detail.open)).toBe(true);
  const walkthrough = work.querySelector('a[href$="/walkthroughs/media-removal"]');
  expect(walkthrough).not.toBeNull();
  expect(walkthrough.closest('details')).toBeNull();
  expect(work.textContent).toContain('physical-device acceptance');
  expect(work.textContent).not.toMatch(/millions|10,000|60\+|error.free|guarantee|Collectors|interview/i);
  expect(work.querySelectorAll('article')).toHaveLength(3);
  const demo = work.querySelector('article[aria-labelledby="joshs-forest-services-title"]');
  expect(demo.textContent).toContain('Portfolio demo');
  const demoLink = demo.querySelector('a[href="https://josh.braidenmiller.com/"]');
  expect(demoLink.textContent).toBe('View demo');
  expect(demoLink.getAttribute('rel')).toBe('noopener noreferrer');
  expect(demo.querySelector('a[href*="github.com"]')).toBeNull();
});

test('technical evidence uses real released developer topic URLs with safe external links', () => {
  const work = renderSection(<Projects />);
  const expectedTopics = ['axon-cqrs', 'api-contracts', 'ports-adapters', 'observability', 'media-lifecycle'];
  for (const topic of expectedTopics) {
    const link = work.querySelector(`a[href="https://app.braidenmiller.com/about/developer/${topic}"]`);
    expect(link).not.toBeNull();
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  }
  expect(projects.flatMap((project) => project.evidenceLinks).every(({ href }) => new URL(href).protocol === 'https:')).toBe(true);
  expect(work.querySelectorAll('nav[aria-label$="technical evidence"]')).toHaveLength(2);
});

test('backend skills and qualifications remain specific without new tenure claims', () => {
  const skills = renderSection(<Skills />);
  expect(skills.textContent).toContain('JVM backend and API design');
  expect(skills.textContent).toContain('Java');
  expect(skills.textContent).toContain('Kotlin');
  expect(skills.textContent).toContain('Spring Boot');
  const about = renderSection(<AboutMe />);
  expect(about.textContent).toContain('Business Management');
  expect(about.textContent).toContain('CompTIA Project+');
  expect(about.textContent).not.toMatch(/Collectors|interview|10\+ years/i);
});

test('public metadata matches backend positioning without private application context', () => {
  const html = readFileSync(path.join(process.cwd(), 'public/index.html'), 'utf8');
  const page = document.createElement('html');
  page.innerHTML = html;
  expect(page.querySelector('title').textContent).toBe('Braiden Miller | Senior Software Engineer');
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[property="twitter:description"]']) {
    expect(page.querySelector(selector).content).toContain('Java');
    expect(page.querySelector(selector).content).toContain('Kotlin');
    expect(page.querySelector(selector).content).toContain('Spring Boot');
  }
  expect(html).not.toMatch(/Collectors|interview/i);
});

test('the resume preview and download use the current versioned PDF URL', () => {
  const source = readFileSync(path.join(process.cwd(), 'src/components/Resume/ResumeViewer.jsx'), 'utf8');
  expect(source).toContain("const RESUME_URL = '/resume/Braiden_Miller.pdf?v=20261127-1'");
  expect(source).toContain('href={RESUME_URL}');
  expect(source).toContain('src={`${RESUME_URL}#zoom=page-width`}');
  const hero = renderSection(<Hero />);
  const preview = [...hero.querySelectorAll('button')].find((button) => button.textContent.includes('Preview resume'));
  act(() => preview.click());
  expect(document.querySelector('iframe').getAttribute('src')).toBe('/resume/Braiden_Miller.pdf?v=20261127-1#zoom=page-width');
  expect(document.querySelector('a[download]').getAttribute('href')).toBe('/resume/Braiden_Miller.pdf?v=20261127-1');
  act(() => document.querySelector('[aria-label="Close resume preview"]').click());
});

test('resume source retains confirmed backend facts and excludes AI content', () => {
  const source = readFileSync(path.join(process.cwd(), 'scripts/generate_resume.py'), 'utf8');
  for (const skill of ['Auth0', 'Terraform', 'Lucene', 'semantic search', 'tenant-level KMS', 'SLOs', 'Angular 2+']) {
    expect(source).toContain(skill);
  }
  expect(source).toContain('7+ years of prior multi-unit retail management');
  expect(source).toContain('Load testing dispatched');
  expect(source).not.toMatch(/\bAI\b|\bLLM\b|artificial intelligence|6 years of prior/i);
  expect(readFileSync(path.join(process.cwd(), 'public/resume/Braiden_Miller.pdf')).subarray(0, 5).toString()).toBe('%PDF-');
});

test('experience keeps the core delivery story visible and preserves deeper examples', () => {
  const section = renderSection(<WorkHistory />);
  const role = section.querySelector('article[aria-labelledby="pax8-role"]');
  const main = role.querySelector('ul');
  expect(main.textContent).toContain('on schedule');
  expect(main.textContent).toContain('both systems synchronized');
  expect(main.textContent).toContain('sub-second');
  expect(main.textContent).toContain('same-day production fixes');
  const more = role.querySelector('details');
  expect(more.open).toBe(false);
  expect(more.textContent).toMatch(/10,000 calls in under 30 seconds.*backpressure/);
  expect(role.querySelector('h6')).toBeNull();
});

test('the approach shows one example and keeps standards optional', () => {
  const section = renderSection(<EngineeringPhilosophy />);
  expect(section.textContent).toContain('Example: removing a photo');
  expect(section.querySelector('a[href$="/walkthroughs/media-removal"]')).not.toBeNull();
  expect(section.querySelector('details').open).toBe(false);
  expect(section.querySelector('summary').textContent).toContain('DDD, OpenAPI, OWASP');
  expect(section.querySelectorAll('ol > li')).toHaveLength(4);
  expect(section.textContent).toContain('People retain product, architecture,');
});

test('contact offers direct email without a send control for an unadmitted API', () => {
  const section = renderSection(<Contact />);
  expect(section.querySelector('a[href="mailto:' + personalInfo.email + '"]').textContent).toContain('Email me');
  expect(section.querySelector('form')).toBeNull();
  expect(section.querySelector('button[type="submit"]')).toBeNull();
  expect(section.querySelector('a[href="' + personalInfo.linkedin + '"]')).not.toBeNull();
});

test('resume preview always offers an independent PDF viewer and download', () => {
  const hero = renderSection(<Hero />);
  const preview = [...hero.querySelectorAll('button')].find((button) => button.textContent.includes('Preview resume'));
  act(() => preview.click());
  const open = document.querySelector('a[aria-label="Open resume PDF in a new tab"]');
  expect(open.getAttribute('href')).toBe('/resume/Braiden_Miller.pdf?v=20261127-1');
  expect(open.getAttribute('target')).toBe('_blank');
  expect(open.getAttribute('rel')).toBe('noopener noreferrer');
  expect(document.querySelector('[role="dialog"]').getAttribute('aria-labelledby')).toBe('resume-preview-title');
  expect(document.querySelector('a[download]')).not.toBeNull();
  act(() => document.querySelector('[aria-label="Close resume preview"]').click());
});

test('primary project guides are public app routes rather than inaccessible repository actions', () => {
  const work = renderSection(<Projects />);
  for (const id of ['platform-app-lab', 'media-transfer']) {
    const project = projects.find((item) => item.id === id);
    expect(project.githubUrl).toBeUndefined();
    expect(new URL(project.guideLink.href).origin).toBe('https://app.braidenmiller.com');
    const article = work.querySelector('article[aria-labelledby="' + id + '-title"]');
    const guide = article.querySelector('a[href="' + project.guideLink.href + '"]');
    expect(guide.closest('details')).toBeNull();
    expect(article.querySelector('a[href="https://github.com/braidenm/platform-demo"]')).toBeNull();
  }
});
