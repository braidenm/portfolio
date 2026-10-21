import React from 'react';
import { Box, Button, Chip, Grid, Link, Stack, Typography } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const EvidenceList = ({ title, items }) => (
  <Box>
    <Typography variant="subtitle1" component="h4" sx={{ mb: 1.5, fontWeight: 700 }}>{title}</Typography>
    <Box component="ul" sx={{ pl: 2 }}>
      {items.map((item) => (
        <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ mb: 1.25 }}>{item}</Typography>
      ))}
    </Box>
  </Box>
);

const ProjectCard = ({ project }) => (
  <Box component="article" aria-labelledby={`${project.id}-title`} sx={{ pt: 4, borderTop: 2, borderColor: `${project.accent}.main` }}>
    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, mb: 1 }}>{project.badge}</Typography>
    <Typography variant="h5" component="h3" id={`${project.id}-title`} sx={{ fontWeight: 700, mb: 2 }}>{project.title}</Typography>
    <Typography sx={{ maxWidth: 800, mb: 4 }}>{project.description}</Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}><EvidenceList title={project.capabilitiesTitle} items={project.capabilities} /></Grid>
      <Grid item xs={12} md={6}><EvidenceList title={project.deliveryEvidenceTitle} items={project.deliveryEvidence} /></Grid>
    </Grid>
    <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mt: 3 }}>
      {project.technologies.map((tech) => <Chip key={tech} label={tech} size="small" variant="outlined" />)}
    </Stack>
    <Stack component="nav" aria-label={`${project.title} technical evidence`} direction="row" useFlexGap flexWrap="wrap" spacing={3} sx={{ my: 3 }}>
      {project.evidenceLinks.map((link) => (
        <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" sx={{ py: 0.5 }}>{link.label}</Link>
      ))}
    </Stack>
    <Stack direction="row" useFlexGap flexWrap="wrap" spacing={2}>
      <Button variant="outlined" startIcon={<GitHub />} href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>Source code</Button>
      <Button variant="contained" startIcon={<Launch />} href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>Live app</Button>
    </Stack>
  </Box>
);

export default ProjectCard;
