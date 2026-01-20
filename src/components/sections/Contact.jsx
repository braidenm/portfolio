import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Link,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import { Email, Phone, GitHub, LinkedIn, Send } from '@mui/icons-material';
import SectionContainer from '../common/SectionContainer';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setStatus({
      type: 'success',
      message: 'Thank you! Your message has been sent successfully.',
    });
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <SectionContainer 
      id="contact" 
      bgImage="/images/call-to-action-bg.jpg" 
      bgOpacity={0.7}
      bgSize="100% auto"
      darkOverlay={true}
      whiteText={true}
      sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}
    >
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                    sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    required
                    sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    endIcon={<Send />}
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      <GitHub sx={{ fontSize: 48, color: 'primary.main' }} />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      Social Media
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mt: 1 }}>
                      <Link
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}
                      >
                        <GitHub fontSize="small" />
                        <Typography variant="body2">GitHub</Typography>
                      </Link>
                      <Link
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}
                      >
                        <LinkedIn fontSize="small" />
                        <Typography variant="body2">LinkedIn</Typography>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      <Phone sx={{ fontSize: 48, color: 'primary.main' }} />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      Phone Number
                    </Typography>
                    <Link href={`tel:${personalInfo.phone}`} sx={{ textDecoration: 'none' }} aria-label={`Call ${personalInfo.phone}`}>
                      <Typography variant="body1" color="primary">
                        {personalInfo.phone}
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
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
                      aria-label={`Email ${personalInfo.email}`}
                    >
                      <Typography variant="body1" color="primary">
                        {personalInfo.email}
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={status.type} sx={{ width: '100%' }}>
          {status.message}
        </Alert>
      </Snackbar>
    </SectionContainer>
  );
};

export default Contact;
