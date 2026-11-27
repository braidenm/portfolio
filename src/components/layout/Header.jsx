import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => (
  <AppBar position="fixed" sx={{ bgcolor: '#0B1F33', boxShadow: 1, py: 0.5 }}>
    <Toolbar>
      <Box component={Link} to="/" aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
        sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexGrow: { xs: 1, md: 0 }, mr: { md: 4 } }}>
        <Typography variant="h4" component="span" sx={{ color: 'primary.light', fontWeight: 700, mr: 0.5, lineHeight: 1, fontSize: { xs: '1.5rem', md: '2rem' } }}>|</Typography>
        <Typography variant="h5" component="span" sx={{ fontWeight: 700, color: 'white', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>Braiden Miller</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Navigation />
    </Toolbar>
  </AppBar>
);

export default Header;
