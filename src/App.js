import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme/theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Resume from './components/sections/Resume';
import WorkHistory from './components/sections/WorkHistory';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <AboutMe />
          <Resume />
          <WorkHistory />
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <Footer />
        <ScrollToTop />
      </Box>
    </ThemeProvider>
  );
}

export default App;
