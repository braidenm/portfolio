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

          <Box
            sx={{
              mt: 6,
              p: { xs: 2.5, md: 4 },
              border: 1,
              borderColor: 'divider',
              borderRadius: 4,
              bgcolor: 'background.default',
            }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
              <Grid item xs={12} md={4}>
                <Typography component="p" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Resume preview
                </Typography>
                <Typography variant="h5" component="h3" sx={{ mt: 1.25, mb: 1.5, fontWeight: 700 }}>
                  The concise version.
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  Review my experience, technical scope, and recent impact here, then open the large
                  viewer or download a copy to keep.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'column' }, gap: 1.5 }}>
                  <Button variant="outlined" startIcon={<Description />} onClick={() => setOpen(true)}>
                    Open large preview
                  </Button>
                  <Button variant="contained" startIcon={<Download />} href="/resume/Braiden_Miller.pdf" download>
                    Download resume
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  component="iframe"
                  src="/resume/Braiden_Miller.pdf#view=FitH"
                  title="Braiden Miller resume preview"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: { xs: 520, sm: 680, md: 720 },
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    bgcolor: 'common.white',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </SectionContainer>
      <ResumeViewer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default WorkHistory;
