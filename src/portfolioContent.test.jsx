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

test('the first screen names the engineer and backend focus without changing the career title', () => {
  const hero = renderSection(<Hero />);
  expect(hero.querySelector('h1').textContent).toBe('Braiden Miller');
  expect(hero.textContent).toContain('Backend Engineer');
  expect(hero.textContent).toContain('Java / Kotlin / Spring Boot');
  expect(personalInfo.title).toBe('Senior Software Engineer II');
  expect(hero.querySelector('a[href="#work-history"]').textContent).toContain('View experience');
  expect(hero.querySelector('img').getAttribute('src')).toBe('/images/mountain.jpg');
  expect(hero.querySelector('img').getAttribute('alt')).toContain('Braiden Miller');
});

test('professional outcomes retain migration, search and load-test context', () => {
  const outcomes = renderSection(<Hero />).querySelector('[aria-labelledby="outcomes-heading"]');
  expect(professionalOutcomes).toHaveLength(3);
  expect(outcomes.textContent).toContain('Selected professional outcomes');
  expect(outcomes.textContent).toMatch(/Millions of records.*synchronized systems, parity checks, and a rollback path/);
  expect(outcomes.textContent).toMatch(/60\+ seconds to sub-second.*two-week sprint/);
  expect(outcomes.textContent).toMatch(/10,000 calls dispatched.*under 30 seconds during a webhook load test/);
  expect(outcomes.textContent).toContain('Backpressure protected downstream services');
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
});

test('personal projects stay separate from professional outcomes and explain adoption limits', () => {
  const work = renderSection(<Projects />);
  expect(work.textContent).toContain('Personal engineering work');
  expect(work.textContent).toContain('Separate from my professional work');
  expect(work.textContent).toContain('Ports/adapters adoption is partial');
  expect(work.textContent).toContain('Kafka, production OpenFGA, federated OIDC, and MCP are not enabled');
  expect(work.textContent).toContain('physical-device acceptance');
  expect(work.textContent).not.toMatch(/millions|10,000|60\+|error.free|guarantee|Collectors|interview/i);
  expect(work.querySelectorAll('article')).toHaveLength(2);
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
  expect(page.querySelector('title').textContent).toBe('Braiden Miller | Backend Engineer');
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[property="twitter:description"]']) {
    expect(page.querySelector(selector).content).toContain('Java');
    expect(page.querySelector(selector).content).toContain('Kotlin');
    expect(page.querySelector(selector).content).toContain('Spring Boot');
  }
  expect(html).not.toMatch(/Collectors|interview/i);
});

test('the resume preview and download keep the existing versioned PDF URL', () => {
  const source = readFileSync(path.join(process.cwd(), 'src/components/Resume/ResumeViewer.jsx'), 'utf8');
  expect(source).toContain("const RESUME_URL = '/resume/Braiden_Miller.pdf?v=20260909-2'");
  expect(source).toContain('href={RESUME_URL}');
  expect(source).toContain('src={`${RESUME_URL}#zoom=page-width`}');
  const hero = renderSection(<Hero />);
  const preview = [...hero.querySelectorAll('button')].find((button) => button.textContent.includes('Preview resume'));
  act(() => preview.click());
  expect(document.querySelector('iframe').getAttribute('src')).toBe('/resume/Braiden_Miller.pdf?v=20260909-2#zoom=page-width');
  expect(document.querySelector('a[download]').getAttribute('href')).toBe('/resume/Braiden_Miller.pdf?v=20260909-2');
  act(() => document.querySelector('[aria-label="Close resume preview"]').click());
});
