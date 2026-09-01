import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { CheckCircleOutline, GitHub, Launch } from '@mui/icons-material';

const EvidenceList = ({ title, items, accent }) => (
  <Box>
    <Typography variant="subtitle2" component="h4" sx={{ mb: 1.25, fontWeight: 700 }}>
      {title}
    </Typography>
    <Stack spacing={1.1}>
      {items.map((item) => (
        <Stack direction="row" spacing={1} alignItems="flex-start" key={item}>
          <CheckCircleOutline sx={{ color: `${accent}.main`, fontSize: 18, mt: '2px', flexShrink: 0 }} />
          <Typography variant="body2" color="text.secondary">
            {item}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Box>
);

const ProjectCard = ({ project }) => {
  const hasLiveLink = Boolean(project.liveUrl);
  const accent = project.accent || 'primary';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: project.featured ? 2 : 0,
        borderColor: `${accent}.main`,
        boxShadow: project.featured ? 8 : 1,
        background: project.featured
          ? 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)'
          : 'background.paper',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: project.featured ? 12 : 6,
        },
      }}
    >
      {project.imageUrl ? (
        <CardMedia
          component="img"
          height={project.featured ? '400' : '200'}
          image={project.imageUrl}
          alt={project.imageAlt || project.title}
          sx={{
            objectFit: 'cover',
            objectPosition: project.imagePosition || 'center',
            bgcolor: 'grey.200',
            width: '100%',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      ) : (
        <Box
          sx={{
            height: 200,
            bgcolor: 'grey.200',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {project.title}
          </Typography>
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {project.badge && (
          <Chip
            label={project.badge}
            color={accent}
            size="small"
            sx={{ alignSelf: 'flex-start', mb: 1.5, fontWeight: 700 }}
          />
        )}
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        {(project.role || project.impact) && (
          <Stack spacing={1.25} sx={{ mb: 2 }}>
            {project.role && (
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  Role
                </Typography>
                <Typography variant="body2">{project.role}</Typography>
              </Box>
            )}
            {project.impact && (
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  Impact
                </Typography>
                <Typography variant="body2">{project.impact}</Typography>
              </Box>
            )}
          </Stack>
        )}
        {(project.capabilities || project.deliveryEvidence) && (
          <>
            <Divider sx={{ mb: 2.5 }} />
            <Stack spacing={2.5} sx={{ mb: 2.5 }}>
              {project.capabilities && (
                <EvidenceList
                  title={project.capabilitiesTitle || 'Capabilities'}
                  items={project.capabilities}
                  accent={accent}
                />
              )}
              {project.deliveryEvidence && (
                <EvidenceList
                  title={project.deliveryEvidenceTitle || 'Delivery evidence'}
                  items={project.deliveryEvidence}
                  accent={accent}
                />
              )}
            </Stack>
          </>
        )}
        <Box sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {project.technologies.map((tech, index) => (
              <Chip key={index} label={tech} size="small" variant="outlined" />
            ))}
          </Stack>
        </Box>
        <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            aria-label={`View ${project.title} on GitHub`}
          >
            GitHub
          </Button>
          {hasLiveLink && (
            <Button
              variant="contained"
              startIcon={<Launch />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              aria-label={`Open ${project.title}`}
            >
              Live App
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
