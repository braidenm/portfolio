import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Link,
  Card,
  CardContent,
} from '@mui/material';
import { Email, Phone, GitHub, LinkedIn } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  return (
    <SectionContainer 
      id="contact" 
      bgImage="/images/call-to-action-bg.jpg" 
      bgOpacity={0.7}
      bgSize="100% auto"
      sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}
    >
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>
                  <GitHub sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Social Media
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                  >
                    <GitHub />
                    <Typography variant="body2">GitHub</Typography>
                  </Link>
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                  >
                    <LinkedIn />
                    <Typography variant="body2">LinkedIn</Typography>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>
                  <Phone sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Phone Number
                </Typography>
                <Link href={`tel:${personalInfo.phone}`} sx={{ textDecoration: 'none' }}>
                  <Typography variant="body1" color="primary">
                    {personalInfo.phone}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>
                  <Email sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  sx={{ textDecoration: 'none' }}
                >
                  <Typography variant="body1" color="primary">
                    {personalInfo.email}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Contact;
