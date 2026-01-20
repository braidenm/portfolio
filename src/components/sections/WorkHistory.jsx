import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { Description } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import WorkHistoryCard from '../common/WorkHistoryCard';
import ResumeViewer from '../Resume/ResumeViewer';
import { workHistory } from '../../data/workHistory';

const WorkHistory = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SectionContainer 
        id="work-history" 
        bgImage="/images/experience.jpg" 
        bgOpacity={0.7}
        bgSize="100% auto"
        darkOverlay={true}
        whiteText={true}
        sx={{ bgcolor: 'background.paper' }}
      >
        <Container>
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 2 }}>
            Work History
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Description />}
              onClick={() => setOpen(true)}
              sx={{ 
                px: 4, 
                py: 1.5,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              }}
            >
              View Full Resume
            </Button>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {workHistory.map((work) => (
              <Grid item xs={12} md={8} key={work.id}>
                <WorkHistoryCard work={work} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionContainer>
      <ResumeViewer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default WorkHistory;
