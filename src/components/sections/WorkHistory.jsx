import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Description, Download } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import WorkHistoryCard from '../common/WorkHistoryCard';
import ResumeViewer from '../Resume/ResumeViewer';
import { workHistory } from '../../data/workHistory';

const WorkHistory = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SectionContainer id="work-history" sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 8 }} alignItems="end" sx={{ mb: 6 }}>
            <Grid item xs={12} md={7}>
              <Typography component="p" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Experience
              </Typography>
              <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>
                Evidence over adjectives.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Hands-on delivery paired with the planning, communication, and enablement that help
                product managers and engineering teams move through complex work together.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} justifyContent="center">
            {workHistory.map((work) => (
              <Grid item xs={12} key={work.id}>
                <WorkHistoryCard work={work} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 5 }}>
            <Button variant="outlined" size="large" startIcon={<Description />} onClick={() => setOpen(true)}>
              Preview resume
            </Button>
            <Button variant="contained" size="large" startIcon={<Download />} href="/resume/Braiden_Miller.pdf" download>
              Download resume
            </Button>
          </Box>
        </Container>
      </SectionContainer>
      <ResumeViewer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default WorkHistory;
