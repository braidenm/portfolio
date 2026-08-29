import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ArrowForward, Description } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import { personalInfo } from '../../data/personalInfo';

const Hero = () => {
  const outcomes = [
    { value: '<1 sec', label: 'search latency, down from over a minute' },
    { value: '10,000', label: 'webhook calls dispatched in under 30 seconds' },
    { value: '99%', label: 'reduction in daily KMS calls' },
  ];

  return (
    <SectionContainer
      id="home"
      bgImage="/images/mountain.jpg"
      bgOpacity={0.7}
      bgSize="cover"
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
          component="p"
          align="center"
          sx={{ mb: 2, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          Braiden Miller · Senior Software Engineer
        </Typography>
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
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            size="large"
            href="#work-history"
            endIcon={<ArrowForward />}
            sx={{ px: 3, py: 1.25 }}
          >
            See my impact
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/resume/Braiden_Miller.pdf"
            startIcon={<Description />}
            sx={{
              px: 3,
              py: 1.25,
              color: 'white',
              borderColor: 'rgba(255,255,255,0.75)',
              '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' },
            }}
          >
            Open resume
          </Button>
        </Stack>
        <Box
          aria-label="Selected engineering outcomes"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 2,
            maxWidth: 900,
            mx: 'auto',
            mt: 6,
          }}
        >
          {outcomes.map((outcome) => (
            <Box
              key={outcome.label}
              sx={{
                p: 2,
                border: '1px solid rgba(255,255,255,0.32)',
                borderRadius: 2,
                bgcolor: 'rgba(9,18,45,0.55)',
                backdropFilter: 'blur(8px)',
                textAlign: 'center',
              }}
            >
              <Typography component="strong" variant="h5" sx={{ display: 'block', fontWeight: 700 }}>
                {outcome.value}
              </Typography>
              <Typography variant="body2">{outcome.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default Hero;
