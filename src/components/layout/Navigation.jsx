import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_ITEMS } from '../../utils/constants';

const Navigation = ({ scrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user has scrolled to the bottom of the page
      if (window.scrollY + windowHeight >= documentHeight - 10) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].section);
        return;
      }

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileOpen(false);
  };

  const navItems = (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {NAV_ITEMS.map((item) => (
        <Button
          key={item.section}
          onClick={() => handleNavClick(item.section)}
          sx={{
            color: activeSection === item.section ? 'primary.main' : 'white',
            fontWeight: activeSection === item.section ? 700 : 400,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              color: 'primary.light',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.section} disablePadding>
            <ListItemButton 
              onClick={() => handleNavClick(item.section)}
              sx={{
                textAlign: 'center',
                color: activeSection === item.section ? 'primary.main' : 'inherit',
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{
                  fontWeight: activeSection === item.section ? 700 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            aria-expanded={mobileOpen}
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </>
      ) : (
        navItems
      )}
    </>
  );
};

export default Navigation;
