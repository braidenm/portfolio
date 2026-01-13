import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Description } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import ResumeViewer from '../Resume/ResumeViewer';

const Resume = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SectionContainer 
        id="resume" 
        bgImage="/images/education.jpg" 
        bgOpacity={0.7}
        bgSize="100% auto"
        darkOverlay={true}
        whiteText={true}
        sx={{ bgcolor: 'background.paper' }}
      >
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Resume
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                maxWidth: '600px', 
                mx: 'auto',
                color: { xs: 'text.secondary', md: 'rgba(255, 255, 255, 0.9)' }
              }}
            >
              View or download my resume to learn more about my professional background, skills, and experience.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Description />}
              onClick={() => setOpen(true)}
              sx={{ px: 4, py: 1.5 }}
            >
              View Resume
            </Button>
          </Box>
        </Container>
      </SectionContainer>
      <ResumeViewer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Resume;
