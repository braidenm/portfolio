import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import * as Icons from '@mui/icons-material';

const SkillCard = ({ skill }) => {
  const IconComponent = Icons[skill.icon] || Icons.Code;

  return (
    <Card
      sx={{
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            color: 'primary.main',
          }}
        >
          <IconComponent sx={{ fontSize: 48 }} />
        </Box>
        <Typography variant="h6" component="h3" gutterBottom>
          {skill.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {skill.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
