import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import WorkHistoryCard from '../common/WorkHistoryCard';
import { workHistory } from '../../data/workHistory';

const WorkHistory = () => {
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
        </Container>
      </SectionContainer>
    </>
  );
};

export default WorkHistory;
