import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import { personalInfo } from '../../data/personalInfo';

const Hero = () => {
  return (
    <SectionContainer
      id="home"
      bgImage="/images/mountain.jpg"
      bgOpacity={0.7}
      bgSize="120% auto"
      darkOverlay={true}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 3,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
          }}
        >
          {personalInfo.heroText}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            fontSize: { xs: '1rem', sm: '1.25rem' },
          }}
        >
          {personalInfo.heroDescription}
        </Typography>
      </Container>
    </SectionContainer>
  );
};

export default Hero;
