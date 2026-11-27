import React from 'react';
import { Box, Button, Chip, Grid, Link, Stack, Typography } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const EvidenceList = ({ title, items }) => (
  <Box>
    <Typography variant="subtitle1" component="h4" sx={{ mb: 1.5, fontWeight: 700 }}>{title}</Typography>
    <Box component="ul" sx={{ pl: 2 }}>
      {items.map((item) => <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ mb: 1.25 }}>{item}</Typography>)}
    </Box>
  </Box>
);

const ProjectCard = ({ project }) => (
  <Box component="article" aria-labelledby={project.id + '-title'} sx={{ pt: 4, borderTop: 2, borderColor: project.accent + '.main' }}>
    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, mb: 1 }}>{project.badge}</Typography>
    <Typography variant="h5" component="h3" id={project.id + '-title'} sx={{ fontWeight: 700, mb: 2 }}>{project.title}</Typography>
    <Typography sx={{ maxWidth: 800, mb: 3 }}>{project.description}</Typography>
    <EvidenceList title={project.capabilitiesTitle} items={project.capabilities} />
    <Stack direction="row" useFlexGap flexWrap="wrap" spacing={2} sx={{ mt: 3 }}>
      <Button variant="contained" startIcon={<Launch />} href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={(project.liveLabel ?? 'Open') + ' ' + project.title}>{project.liveLabel ?? 'Live app'}</Button>
      {project.githubUrl && <Button variant="outlined" startIcon={<GitHub />} href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={'View ' + project.title + ' on GitHub'}>Source code</Button>}
      {project.guideLink && <Button variant="outlined" href={project.guideLink.href} target="_blank" rel="noopener noreferrer">{project.guideLink.label}</Button>}
    </Stack>
    {project.exampleLink && <Link href={project.exampleLink.href} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block', py: 1.5, mt: 1 }}>{project.exampleLink.label}</Link>}
    <Box component="details" className="portfolio-details" sx={{ mt: 3 }}>
      <summary>Implementation and tests</summary>
      <Grid container spacing={3} sx={{ pt: 1 }}>
        <Grid item xs={12}><EvidenceList title={project.deliveryEvidenceTitle} items={project.deliveryEvidence} /></Grid>
      </Grid>
      <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mt: 2 }}>
        {project.technologies.map((tech) => <Chip key={tech} label={tech} size="small" variant="outlined" />)}
      </Stack>
      {project.evidenceLinks.length > 0 && (
        <Stack component="nav" aria-label={project.title + ' technical evidence'} direction="row" useFlexGap flexWrap="wrap" spacing={3} sx={{ mt: 2 }}>
          {project.evidenceLinks.map((link) => <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" sx={{ py: 1 }}>{link.label}</Link>)}
        </Stack>
      )}
    </Box>
  </Box>
);

export default ProjectCard;
