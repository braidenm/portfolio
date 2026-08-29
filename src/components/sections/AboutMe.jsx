import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Code, Groups, School, WorkspacePremium } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import { education, certifications, experience, personalInfo } from '../../data/personalInfo';

const background = [
  { icon: Code, value: '7 years', label: 'professional software delivery' },
  { icon: Groups, value: '6 years', label: 'people leadership before engineering' },
  { icon: School, value: 'B.S. + Java', label: `${education.wgu.name} and ${education.skillDistillery.name}` },
  { icon: WorkspacePremium, value: 'Certified', label: `${certifications.javaOracle.name} and ${certifications.comptia.name}` },
];

const AboutMe = () => (
  <SectionContainer id="about" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
        <Grid item xs={12} md={5}>
          <Typography component="p" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            About
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mt: 1.5, mb: 3, maxWidth: 520 }}>
            Collaboration that ends in working software.
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" component="p" sx={{ color: 'text.primary', lineHeight: 1.65 }}>
            {personalInfo.aboutMe}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.75 }}>
            {experience.description}
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 2,
          mt: 7,
        }}
      >
        {background.map((item) => (
          <Box key={item.value} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3, border: '1px solid #E1E8F0' }}>
            <item.icon aria-hidden sx={{ color: 'primary.main', mb: 2 }} />
            <Typography component="strong" variant="h6" sx={{ display: 'block', fontWeight: 700 }}>
              {item.value}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </SectionContainer>
);

export default AboutMe;
