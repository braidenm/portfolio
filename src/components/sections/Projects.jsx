import React, { useState } from 'react';
import { Box, Button, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? projects : filter === 'platform' ? projects.filter((project) => project.category === 'platform') : projects.filter((project) => project.progressionDemo);

  return (
  <SectionContainer id="projects" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 3, md: 8 }} alignItems="end" sx={{ mb: 6 }}>
        <Grid item xs={12} md={7}>
          <Typography component="p" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Working portfolio
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>
            A running example of how I work.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
            The platform is the best place to inspect my work today: product framing, architecture,
            implementation, tests, delivery, observability, and feedback in one live system.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: 'grey.100', border: 1, borderColor: 'divider', borderRadius: 2, mb: 3, p: { xs: 2, sm: 3 } }}>
        <Typography variant="h6" component="h3" gutterBottom>Two eras, shown intentionally</Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
          Items marked “Learning progression demo” preserve applications I built while learning Java and full-stack development. Compare them with the Platform App Lab, which represents how I frame, build, test, deliver, and operate software today.
        </Typography>
      </Box>

      <Tabs value={filter} onChange={(event, value) => setFilter(value)} aria-label="Portfolio era picker" variant="scrollable" scrollButtons="auto" sx={{ mb: 4 }}>
        <Tab label="All" value="all" />
        <Tab label="Current Platform App Lab" value="platform" />
        <Tab label="Learning progression demos" value="progression" />
      </Tabs>

      <Box role="list" aria-label="Selected projects">
        {filteredProjects.map((project) => (
          <Box key={project.id} role="listitem" sx={{ maxWidth: 960, mx: 'auto', mb: 4 }}>
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
};

export default Projects;
