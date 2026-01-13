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
          {techStack.map((tech, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                component="img"
                src={tech.image}
                alt={tech.name}
                sx={{
                  height: { xs: 40, sm: 50, md: 60 },
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  opacity: 0.7,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    opacity: 1,
                    transform: 'scale(1.1)',
                  },
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block'; // Show text if image fails
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  display: 'none', // Hidden by default, shown if image fails
                  fontWeight: 'bold',
                  color: 'text.secondary',
                }}
              >
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
