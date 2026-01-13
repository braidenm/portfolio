import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import WorkHistoryCard from '../common/WorkHistoryCard';
import { workHistory } from '../../data/workHistory';

const WorkHistory = () => {
  return (
    <SectionContainer 
      id="work-history" 
      bgImage="/images/experience.jpg" 
      bgOpacity={0.7}
      bgSize="100% auto"
      sx={{ bgcolor: 'background.paper' }}
    >
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Work History
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {workHistory.map((work) => (
            <Grid item xs={12} md={8} key={work.id}>
              <WorkHistoryCard work={work} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default WorkHistory;
