import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { School, WorkspacePremium, Business } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import { personalInfo, education, certifications, experience } from '../../data/personalInfo';

const AboutMe = () => {
  return (
    <SectionContainer 
      id="about" 
      bgImage="/images/about-bg.jpg" 
      bgOpacity={0.7} 
      bgSize="100% auto" 
      darkOverlay={true}
      whiteText={true}
      sx={{ bgcolor: 'background.default' }}
    >
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ 
            mb: 6, 
            maxWidth: '900px', 
            mx: 'auto', 
            lineHeight: 1.6, 
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: { xs: 'text.secondary', md: 'white' } 
          }}
        >
          {personalInfo.aboutMe}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <School sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" component="h3">
                    Education
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <a
                      href={education.skillDistillery.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                      {education.skillDistillery.name}
                    </a>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {education.skillDistillery.description}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" gutterBottom>
                    <a
                      href={education.wgu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                      {education.wgu.name}
                    </a>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    {education.wgu.degree}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {education.wgu.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <WorkspacePremium sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" component="h3">
                    Certifications
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <a
                      href={certifications.javaOracle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                      {certifications.javaOracle.name}
                    </a>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="ul" sx={{ pl: 2 }}>
                    {certifications.javaOracle.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" gutterBottom>
                    <a
                      href={certifications.comptia.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                      {certifications.comptia.name}
                    </a>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="ul" sx={{ pl: 2 }}>
                    {certifications.comptia.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Business sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" component="h3">
                    Experience
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {experience.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default AboutMe;
