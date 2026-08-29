import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import SkillCard from '../common/SkillCard';
import TechCarousel from '../common/TechCarousel';
import { skills } from '../../data/skills';

const Skills = () => (
  <>
    <SectionContainer id="skills" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography component="p" align="center" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          How I work
        </Typography>
        <Typography variant="h3" component="h2" align="center" sx={{ mt: 1.5, mb: 2 }}>
          Make the next change easier.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 780, mx: 'auto', color: 'text.secondary' }}>
          Senior engineering is more than choosing technology. I connect product intent, system design,
          implementation, rollout, and feedback so teams can make faster decisions with less risk.
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} key={skill.name}>
              <SkillCard skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
    <TechCarousel />
  </>
);

export default Skills;
