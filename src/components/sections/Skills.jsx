import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import SkillCard from '../common/SkillCard';
import TechCarousel from '../common/TechCarousel';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <>
      <SectionContainer 
        id="skills" 
        bgImage="/images/call-to-action-bg.jpg" 
        bgOpacity={0.7} 
        bgSize="100% auto" 
        darkOverlay={true}
        whiteText={true}
        sx={{ bgcolor: 'background.default' }}
      >
        <Container>
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 2 }}>
            Skills
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
            A comprehensive technical foundation built through rigorous full-stack education and years of architecting scalable, high-performance systems in enterprise environments.
          </Typography>
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionContainer>
      <TechCarousel />
    </>
  );
};

export default Skills;
