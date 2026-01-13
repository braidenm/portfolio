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
      bgImage="/images/certificate.jpg" 
      bgOpacity={0.7}
      bgSize="100% auto"
      sx={{ bgcolor: 'background.paper' }}
    >
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 2 }}>
          Projects
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: '800px', mx: 'auto', fontSize: { xs: '0.9rem', sm: '1rem' } }}
        >
          Explore my portfolio of applications and web projects. Each project demonstrates different aspects of my development skills.
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
              },
            }}
          >
            <Tab label="All" value="all" aria-controls="projects-all" />
            <Tab label="Web" value="web" aria-controls="projects-web" />
            <Tab label="App" value="app" aria-controls="projects-app" />
          </Tabs>
        </Box>

        <Grid container spacing={4} role="list" aria-label="projects">
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id} role="listitem">
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Projects;
