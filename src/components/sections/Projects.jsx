import React, { useState } from 'react';
import { Container, Typography, Grid, Tabs, Tab, Box } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <SectionContainer
      id="projects"
      bgImage="/images/call-to-action-bg.jpg"
      bgOpacity={0.62}
      bgSize="cover"
      darkOverlay={true}
      whiteText={true}
      sx={{ bgcolor: 'background.paper' }}
    >
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 2 }}>
          Selected Engineering Work
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ 
            mb: 6, 
            maxWidth: '800px', 
            mx: 'auto', 
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: { xs: 'text.secondary', md: 'rgba(255, 255, 255, 0.9)' }
          }}
        >
          The platform app is the best place to inspect how I work today: product framing, architecture decisions,
          implementation, tests, delivery, observability, and real-device feedback in one running system. Earlier
          projects remain below as a record of the path that led here.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Tabs
            value={filter}
            onChange={(e, newValue) => setFilter(newValue)}
            aria-label="project category filter"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500,
                color: { xs: 'inherit', md: 'white' },
                '&.Mui-selected': {
                  color: 'primary.light',
                },
              },
              '& .MuiTabs-indicator': {
                bgcolor: 'primary.light',
              },
            }}
          >
            <Tab label="All" value="all" aria-controls="projects-all" />
            <Tab label="Platform" value="platform" aria-controls="projects-platform" />
            <Tab label="Web" value="web" aria-controls="projects-web" />
            <Tab label="App" value="app" aria-controls="projects-app" />
          </Tabs>
        </Box>

        <Grid container spacing={4} role="list" aria-label="projects">
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={project.featured ? 12 : 6} md={project.featured ? 8 : 4} key={project.id} role="listitem">
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Projects;
