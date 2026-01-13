import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={show}>
      <Fab
        color="primary"
        size="small"
        aria-label="scroll back to top"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
