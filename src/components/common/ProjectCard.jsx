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
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const hasLiveLink = Boolean(project.liveUrl);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: project.featured ? 2 : 0,
        borderColor: 'primary.main',
        boxShadow: project.featured ? 8 : 1,
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
          height={project.featured ? '260' : '200'}
          image={project.imageUrl}
          alt={project.title}
          sx={{ objectFit: 'cover', bgcolor: 'grey.200' }}
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
        {project.featured && (
          <Chip
            label="Featured platform build"
            color="primary"
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
          {project.demoUrl && (
            <Button
              variant="contained"
              startIcon={<Launch />}
              component={RouterLink}
              to="/under-construction"
              size="small"
              aria-label={`View ${project.title} demo`}
            >
              Demo
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
