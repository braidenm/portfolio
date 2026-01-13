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

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6,
        },
      }}
    >
      {project.imageUrl ? (
        <CardMedia
          component="img"
          height="200"
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
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {project.description}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {project.technologies.map((tech, index) => (
              <Chip key={index} label={tech} size="small" variant="outlined" />
            ))}
          </Stack>
        </Box>
        <Stack direction="row" spacing={2}>
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
          {project.demoUrl && (
            <Button
              variant="contained"
              startIcon={<Launch />}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
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
