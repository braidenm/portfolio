import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UnderConstruction = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <ConstructionIcon sx={{ fontSize: 100, mb: 4, color: 'primary.main' }} />
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Under Construction
        </Typography>
        <Typography variant="h5" sx={{ mb: 6, color: 'rgba(255, 255, 255, 0.8)' }}>
          I am currently rebuilding this demo with a modern architecture to better showcase my updated development standards.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            borderRadius: '30px',
          }}
        >
          Back to Portfolio
        </Button>
      </Container>
    </Box>
  );
};

export default UnderConstruction;
