import React from 'react';
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => (
  <SectionContainer id="contact" sx={{ bgcolor: '#0B1F33', color: 'white' }}>
    <Container maxWidth="lg">
      <Typography variant="h3" component="h2" sx={{ mb: 2 }}>Get in touch</Typography>
      <Typography sx={{ maxWidth: 760, mb: 3, color: 'rgba(255,255,255,0.85)' }}>
        I&apos;m interested in senior software engineering roles involving product collaboration
        and reliable delivery.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5, alignItems: { sm: 'flex-start' } }}>
        <Button href={'mailto:' + personalInfo.email} variant="contained" color="secondary" size="large" startIcon={<Email />}>Email me</Button>
        <Button href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" variant="outlined" size="large" startIcon={<LinkedIn />} sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.7)' }}>Connect on LinkedIn</Button>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={5}>
          <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Email</Typography>
          <Link href={'mailto:' + personalInfo.email} color="inherit" sx={{ display: 'inline-block', py: 1, overflowWrap: 'anywhere' }}>{personalInfo.email}</Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Phone</Typography>
          <Link href={'tel:' + personalInfo.phone} color="inherit" sx={{ display: 'inline-block', py: 1 }}>{personalInfo.phone}</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Source and projects</Typography>
          <Box>
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" color="inherit" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, py: 1 }}><GitHub fontSize="small" />GitHub profile</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </SectionContainer>
);

export default Contact;
