import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
        boxShadow: scrolled ? 2 : 0,
        transition: 'all 0.3s ease-in-out',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        py: scrolled ? 0.5 : 1.5,
      }}
    >
        <Toolbar>
          <Box
            component={Link}
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 4 },
            }}
          >
            <Typography
              variant="h4"
              component="span"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                mr: 0.5,
                lineHeight: 1,
                fontSize: { xs: '1.5rem', md: '2.125rem' },
              }}
            >
              |
            </Typography>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontWeight: 700,
                color: 'white',
                transition: 'all 0.3s ease-in-out',
                fontSize: { xs: '1.2rem', md: scrolled ? '1.5rem' : '1.8rem' },
              }}
            >
              Braiden's Portfolio
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Navigation scrolled={scrolled} />
        </Toolbar>
      </AppBar>
  );
};

export default Header;
