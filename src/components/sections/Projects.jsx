import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => (
  <SectionContainer id="projects" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 3, md: 8 }} alignItems="end" sx={{ mb: 6 }}>
        <Grid item xs={12} md={7}>
          <Typography component="p" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Live engineering system
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>
            See the architecture, delivery system, and controls working together.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Platform App Lab turns domain models and reviewed specifications into a working product,
            proportional CI, governed deployments, operational evidence, and real user feedback.
          </Typography>
        </Grid>
      </Grid>

      <Box role="list" aria-label="Selected projects">
        {projects.map((project) => (
          <Box key={project.id} role="listitem" sx={{ maxWidth: 960, mx: 'auto' }}>
            <ProjectCard project={project} />
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Button
          variant="text"
          href="https://github.com/braidenm"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHub />}
        >
          Browse earlier work on GitHub
        </Button>
      </Box>
    </Container>
  </SectionContainer>
);

export default Projects;
