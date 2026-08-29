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
          Technologies
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            alignItems: 'center',
          }}
        >
          {techStack.map((tech) => (
            <Box
              key={tech.name}
              sx={{
                minWidth: { xs: 120, sm: 150 },
                px: 2.5,
                py: 1.5,
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
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
