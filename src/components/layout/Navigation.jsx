import React, { useState, useEffect } from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils/constants';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;
    const handleScroll = () => {
      const position = window.scrollY + 100;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].section);
        return;
      }
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.section);
        if (element && position >= element.offsetTop && position < element.offsetTop + element.offsetHeight) setActiveSection(item.section);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: 'start' });
  }, [location.pathname, location.hash]);

  const hrefFor = (section) => location.pathname === '/' ? '#' + section : '/#' + section;
  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.section} disablePadding>
            <ListItemButton component="a" href={hrefFor(item.section)} onClick={() => setMobileOpen(false)}
              aria-current={activeSection === item.section ? 'location' : undefined}
              sx={{ textAlign: 'center', minHeight: 48, color: activeSection === item.section ? 'primary.main' : 'inherit' }}>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: activeSection === item.section ? 700 : 400 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return isMobile ? (
    <>
      <IconButton color="inherit" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)} sx={{ color: 'white', minWidth: 44, minHeight: 44 }}><MenuIcon /></IconButton>
      <Drawer variant="temporary" open={mobileOpen} onClose={() => setMobileOpen(false)} ModalProps={{ keepMounted: true }}
        sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}>{drawer}</Drawer>
    </>
  ) : (
    <Box component="nav" aria-label="Sections" sx={{ display: 'flex', gap: { md: 0.5, lg: 1 } }}>
      {NAV_ITEMS.map((item) => (
        <Button key={item.section} component="a" href={hrefFor(item.section)} aria-current={activeSection === item.section ? 'location' : undefined}
          sx={{ color: activeSection === item.section ? 'primary.light' : 'white', fontWeight: activeSection === item.section ? 700 : 400,
            minHeight: 44, px: { md: 1.25, lg: 3 }, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', color: 'primary.light' } }}>{item.label}</Button>
      ))}
    </Box>
  );
};

export default Navigation;
