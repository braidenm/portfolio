import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const SectionContainer = ({ id, children, sx = {}, bgImage, bgOpacity = 0.5, darkOverlay = false, bgSize = 'cover', whiteText = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (bgImage) {
      const img = new Image();
      img.src = bgImage;
      img.onload = () => setImageLoaded(true);
    }
  }, [bgImage]);

  const overlayColor = darkOverlay 
    ? 'rgba(0, 0, 0, 0.6)' // Darker overlay for better contrast
    : 'rgba(255, 255, 255, 0.6)'; // Slightly more opaque light overlay

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        ...(whiteText && {
          color: { xs: 'inherit', md: 'white' }, // Only white text on desktop with backgrounds
        }),
        ...(bgImage && {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: bgSize,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            opacity: imageLoaded ? bgOpacity : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 0,
            display: { xs: 'none', md: 'block' },
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: overlayColor,
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 0,
            display: { xs: 'none', md: 'block' },
          },
        }),
        ...sx,
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
      </Box>
    </Box>
  );
};

export default SectionContainer;
