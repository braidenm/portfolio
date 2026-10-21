import React, { useState } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ArrowForward, Description } from '@mui/icons-material';
import ResumeViewer from '../Resume/ResumeViewer';
import { personalInfo } from '../../data/personalInfo';
import { professionalOutcomes } from '../../data/workHistory';

const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <Box component="section" id="home" aria-labelledby="portfolio-name" sx={{ position: 'relative', bgcolor: '#182721', color: 'white' }}>
        <Box
          component="img"
          src="/images/mountain.jpg"
          alt="Braiden Miller on a winter mountain summit in Colorado"
          fetchpriority="high"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '30% 45%' }}
        />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.55)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', minHeight: 'min(620px, calc(100svh - 64px))', display: 'flex', alignItems: 'center', pt: 14, pb: 7 }}>
          <Box sx={{ width: { xs: '100%', md: '52%' }, ml: { md: 'auto' } }}>
            <Typography component="h1" id="portfolio-name" sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', fontWeight: 700, lineHeight: 1.15, mb: 2 }}>
              {personalInfo.name}
            </Typography>
            <Typography component="p" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 1 }}>
              {personalInfo.role}
            </Typography>
            <Typography component="p" sx={{ fontWeight: 700, color: '#C2E8DC', mb: 3 }}>
              {personalInfo.focus}
            </Typography>
            <Typography sx={{ maxWidth: 520, lineHeight: 1.75 }}>
              {personalInfo.heroDescription}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button variant="contained" color="secondary" size="large" href="#work-history" endIcon={<ArrowForward />}>
                View experience
              </Button>
              <Button variant="outlined" size="large" onClick={() => setResumeOpen(true)} startIcon={<Description />} sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.8)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(0,0,0,0.15)' } }}>
                Preview resume
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box component="section" aria-labelledby="outcomes-heading" sx={{ bgcolor: 'background.default', py: 5, borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography component="h2" id="outcomes-heading" variant="subtitle1" sx={{ fontWeight: 700, mb: 3 }}>
            Selected professional outcomes
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 4 }}>
            {professionalOutcomes.map((outcome) => (
              <Box key={outcome.value}>
                <Typography component="p" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'secondary.dark' }}>{outcome.value}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{outcome.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};

export default Hero;
