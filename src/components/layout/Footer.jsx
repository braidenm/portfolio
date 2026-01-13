import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { personalInfo } from '../../data/personalInfo';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <GitHub fontSize="small" />
              <Typography variant="body2">GitHub</Typography>
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <LinkedIn fontSize="small" />
              <Typography variant="body2">LinkedIn</Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
