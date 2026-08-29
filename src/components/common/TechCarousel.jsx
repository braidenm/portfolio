import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { techStack } from '../../data/skills';

const TechCarousel = () => {
  return (
    <Box
      sx={{
        py: 4,
        bgcolor: 'background.paper',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Core toolkit
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1.5,
            alignItems: 'center',
          }}
        >
          {techStack.map((tech) => (
            <Box
              key={tech.name}
              sx={{
                px: 2,
                py: 1,
                border: 1,
                borderColor: 'divider',
                borderRadius: 8,
                bgcolor: 'background.default',
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out, border-color 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {tech.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TechCarousel;
