import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import WorkHistory from './components/sections/WorkHistory';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import UnderConstruction from './components/common/UnderConstruction';
import './App.css';

const MainLayout = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Hero />
      <AboutMe />
      <WorkHistory />
      <Skills />
      <Projects />
      <Contact />
    </Box>
    <Footer />
    <ScrollToTop />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
