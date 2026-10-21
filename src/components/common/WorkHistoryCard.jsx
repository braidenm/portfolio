import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { Work, CalendarToday } from '@mui/icons-material';

const WorkHistoryCard = ({ work }) => {
  return (
    <Card
      component="article"
      aria-labelledby={`${work.id}-role`}
      sx={{
        height: '100%',
        borderRadius: 2,
        boxShadow: 'none',
        border: 1,
        borderColor: 'divider',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1, sm: 0 }, flexGrow: 1 }}>
            <Work sx={{ mr: 1, color: 'primary.main' }} />
            <Box>
              <Typography variant="h6" component="h3" id={`${work.id}-role`} sx={{ fontSize: '1.125rem', fontWeight: 700 }}>
                {work.position}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {work.company}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: { xs: 4, sm: 0 } }}>
            <CalendarToday sx={{ mr: 0.5, fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {work.duration}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box component="ul" sx={{ mb: 2, pl: 2.5 }}>
          {work.description.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              component="li"
              color="text.secondary"
              sx={{ mb: 1.5 }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        {work.technologies && work.technologies.length > 0 && (
          <Stack direction="row" useFlexGap spacing={1} flexWrap="wrap">
            {work.technologies.map((tech, index) => (
              <Chip key={index} label={tech} size="small" variant="outlined" />
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkHistoryCard;
