import React from 'react';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import { skillGroups } from '../../data/skills';

const Skills = () => (
  <SectionContainer id="skills" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 3, md: 8 }} alignItems="end" sx={{ mb: 5 }}>
        <Grid item xs={12} md={7}>
          <Typography
            component="p"
            sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Technical skills
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>
            Primary tools and platforms
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
            My strongest experience is in JVM backend and distributed systems, supported by practical
            frontend, cloud, delivery, and production operations work.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        {skillGroups.map((group) => (
          <Grid item xs={12} sm={6} key={group.name}>
            <Box
              sx={{
                height: '100%',
                p: { xs: 2.5, md: 3 },
                border: 1,
                borderColor: 'divider',
                borderRadius: 3,
                bgcolor: 'background.default',
              }}
            >
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                {group.name}
              </Typography>
              <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1}>
                {group.skills.map((skill) => (
                  <Chip key={skill} label={skill} size="small" variant="outlined" />
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </SectionContainer>
);

export default Skills;
