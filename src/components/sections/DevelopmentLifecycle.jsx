import React from 'react';
import {
  AccountTree,
  Architecture,
  FactCheck,
  Groups,
  SmartToy,
} from '@mui/icons-material';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';

const lifecycleSteps = [
  {
    title: 'Frame the outcome',
    description:
      'Product, engineering, and stakeholders agree on the user outcome, constraints, risks, and evidence that will define success.',
    icon: Groups,
  },
  {
    title: 'Specify the behavior',
    description:
      'Requirements become acceptance scenarios, domain language, contracts, diagrams, and architecture decisions that are easy to review.',
    icon: Architecture,
  },
  {
    title: 'Build and test with AI',
    description:
      'AI implements bounded slices inside those guardrails, runs the appropriate test layers, and reports evidence instead of declaring success.',
    icon: SmartToy,
  },
  {
    title: 'Verify and learn',
    description:
      'CI, observability, demos, and stakeholder acceptance validate each sprint. What the team learns updates the specs and the next decision.',
    icon: FactCheck,
  },
];

const DevelopmentLifecycle = () => (
  <SectionContainer id="lifecycle" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 3, md: 8 }} alignItems="end" sx={{ mb: 6 }}>
        <Grid item xs={12} md={7}>
          <Typography component="p" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Development lifecycle
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>
            Shared language first. Verified software every sprint.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Domain-driven design keeps the team focused on the business problem. Spec-driven delivery
            gives people and AI the same requirements, boundaries, and definition of done.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              p: { xs: 3, md: 4 },
              border: 1,
              borderColor: 'divider',
              borderRadius: 4,
              bgcolor: 'background.default',
            }}
          >
            <AccountTree color="primary" sx={{ fontSize: 38 }} />
            <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1.5, fontWeight: 700 }}>
              Model the business, not the database
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Domain-driven design gives product managers, engineers, and partner teams a shared
              vocabulary for business capabilities. Bounded contexts make ownership explicit, keep
              rules close to the model that owns them, and connect teams through deliberate contracts.
            </Typography>
            <Box sx={{ mt: 3, pl: 2.5, borderLeft: 3, borderColor: 'secondary.main' }}>
              <Typography variant="subtitle2" sx={{ mb: 0.75, fontWeight: 700 }}>
                Collaboration example
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                On a webhook delivery platform, I worked with product and consuming teams to define
                what subscription, delivery attempt, retry, and failure meant. Those conversations
                became clear ownership boundaries, commands, events, API contracts, and load scenarios
                before the expensive implementation choices were locked in.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              color: 'common.white',
              bgcolor: 'primary.main',
            }}
          >
            <SmartToy sx={{ fontSize: 38 }} />
            <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1.5, fontWeight: 700 }}>
              Use specifications as the AI contract
            </Typography>
            <Typography sx={{ lineHeight: 1.75, opacity: 0.88 }}>
              AI is most useful when it is given reviewed requirements, acceptance scenarios,
              architecture decisions, security constraints, and current documentation. I use that
              context to guide implementation and testing while keeping product judgment, system
              tradeoffs, and release acceptance with the people accountable for the outcome.
            </Typography>
            <Typography sx={{ mt: 3, lineHeight: 1.75, opacity: 0.88 }}>
              The result is a traceable loop: a requirement points to a design decision, code, tests,
              CI evidence, and production feedback. AI accelerates the loop; the team still owns it.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2.5} sx={{ mt: 2 }}>
        {lifecycleSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={step.title}>
              <Box sx={{ height: '100%', p: 2.5, borderTop: 3, borderColor: 'secondary.main' }}>
                <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Icon color="secondary" />
                </Stack>
                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700, mb: 0.75 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </SectionContainer>
);

export default DevelopmentLifecycle;
