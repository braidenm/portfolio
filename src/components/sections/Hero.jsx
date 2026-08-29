import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { ArrowForward, Download } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import { personalInfo } from '../../data/personalInfo';

const outcomes = [
  { value: 'Millions', label: 'of records migrated with rollback protection' },
  { value: '< 1 sec', label: 'search latency, reduced from over a minute' },
  { value: '< 30 sec', label: 'to dispatch 10,000 webhook calls' },
];

const Hero = () => (
  <SectionContainer
    id="home"
    sx={{
      minHeight: { xs: 'auto', md: '100vh' },
      display: 'flex',
      alignItems: 'center',
      bgcolor: '#0B1F33',
      background: 'radial-gradient(circle at 15% 20%, rgba(47,111,175,0.34), transparent 38%), #0B1F33',
      color: 'white',
      pt: { xs: 14, md: 16 },
      pb: { xs: 8, md: 10 },
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography
            component="p"
            sx={{ mb: 2, color: '#9FC6E8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Braiden Miller · Senior Software Engineer
          </Typography>
          <Typography
            variant="h1"
            sx={{
              maxWidth: 760,
              mb: 3,
              fontSize: { xs: '2.6rem', sm: '3.65rem', md: '4.5rem' },
              letterSpacing: '-0.045em',
            }}
          >
            {personalInfo.heroText}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ maxWidth: 720, color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, fontSize: { xs: '1rem', sm: '1.2rem' } }}
          >
            {personalInfo.heroDescription}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
            <Button variant="contained" color="secondary" size="large" href="#projects" endIcon={<ArrowForward />}>
              See the work
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/resume/Braiden_Miller.pdf"
              download
              startIcon={<Download />}
              sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.6)', '&:hover': { borderColor: 'white' } }}
            >
              Download resume
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box component="figure" sx={{ m: 0, position: 'relative' }}>
            <Box
              component="img"
              src="/images/mountain.jpg"
              alt="Braiden Miller on a winter mountain summit"
              sx={{
                display: 'block',
                width: '100%',
                aspectRatio: { xs: '4 / 3', md: '3 / 4' },
                objectFit: 'cover',
                objectPosition: { xs: '32% 52%', md: '31% 50%' },
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 28px 70px rgba(0,0,0,0.38)',
              }}
            />
            <Typography component="figcaption" variant="body2" sx={{ mt: 1.5, color: 'rgba(255,255,255,0.66)' }}>
              Colorado-based. Comfortable with steep problems.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        aria-label="Selected engineering outcomes"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 2,
          mt: { xs: 6, md: 8 },
        }}
      >
        {outcomes.map((outcome) => (
          <Box key={outcome.label} sx={{ p: 2.5, borderTop: '1px solid rgba(255,255,255,0.28)' }}>
            <Typography component="strong" variant="h4" sx={{ display: 'block', color: '#83D3CB', fontWeight: 700 }}>
              {outcome.value}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.75, color: 'rgba(255,255,255,0.72)' }}>
              {outcome.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </SectionContainer>
);

export default Hero;
