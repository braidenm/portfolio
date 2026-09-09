import React from 'react';
import {
  AccountTree,
  Api,
  AssignmentTurnedIn,
  AutoAwesome,
  FactCheck,
  PublishedWithChanges,
  Security,
  Speed,
} from '@mui/icons-material';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';

const engineeringPrinciples = [
  {
    title: 'Model the domain first',
    description:
      'I work with product partners to define business capabilities, rules, failure cases, and ownership before choosing the implementation. This produces shared terminology and clearer boundaries.',
    icon: AccountTree,
  },
  {
    title: 'Choose boundaries deliberately',
    description:
      'I prefer cohesive modules with enforceable contracts until ownership, scaling, or deployment needs justify a separate service. This limits network and operational complexity.',
    icon: Api,
  },
  {
    title: 'Design for failure and rollback',
    description:
      'Timeouts, retries, idempotency, backpressure, and partial failure are part of the design. Migrations use phased cutovers, observable checkpoints, and a tested rollback path.',
    icon: PublishedWithChanges,
  },
  {
    title: 'Build for production operation',
    description:
      'Correlation IDs, structured logs, metrics, traces, health checks, and actionable alerts are included with the feature. They make failures easier to find and correct safely.',
    icon: Speed,
  },
];

const standards = [
  {
    title: 'DDD + SOLID',
    description: 'Bounded contexts, shared domain language, high cohesion, and dependencies directed toward business rules.',
  },
  {
    title: 'OpenAPI 3.1',
    description: 'Contract-first APIs with documented behavior, stable errors, examples, and compatibility expectations.',
  },
  {
    title: 'OWASP guidance',
    description: 'Least privilege, secure session and upload handling, secret redaction, and safe error responses.',
  },
  {
    title: 'Architecture Decision Records',
    description: 'Important decisions record their context, options, tradeoffs, consequences, and future review conditions.',
  },
  {
    title: 'Testing diamond',
    description: 'Fast unit tests, strong integration coverage, boundary contracts, and focused end-to-end checks.',
  },
  {
    title: 'SRE signals',
    description: 'SLIs, SLOs, latency, error rates, saturation, and alerts connected to a specific operator response.',
  },
];

const aiWorkflow = [
  {
    title: 'Define the work',
    description:
      'A reviewed specification records the outcome, non-goals, acceptance scenarios, domain terms, contracts, security, failure behavior, and rollout plan.',
    icon: AssignmentTurnedIn,
  },
  {
    title: 'Keep documentation current',
    description:
      'Specifications, plans, tasks, ADRs, OpenAPI, diagrams, and runbooks change with the code. The repository remains the source of context for people and AI.',
    icon: AutoAwesome,
  },
  {
    title: 'Implement in small slices',
    description:
      'AI helps implement small changes within the documented architecture. Assumptions and conflicts are raised for review before the scope changes.',
    icon: FactCheck,
  },
  {
    title: 'Verify and review',
    description:
      'Unit, integration, contract, browser, and load tests are selected according to risk. Engineers and stakeholders retain architecture and release approval.',
    icon: Security,
  },
];

const EngineeringPhilosophy = () => (
  <SectionContainer id="philosophy" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 3, md: 8 }} alignItems="end" sx={{ mb: 6 }}>
        <Grid item xs={12} md={7}>
          <Typography
            component="p"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Engineering approach
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>
            How I build complex software
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
            I use clear domain models, explicit contracts, reversible delivery, and production
            feedback to keep systems understandable as they grow.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {engineeringPrinciples.map((principle) => {
          const Icon = principle.icon;
          return (
            <Grid item xs={12} md={6} key={principle.title}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: 2.5,
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      bgcolor: 'rgba(47, 111, 175, 0.1)',
                      color: 'primary.main',
                    }}
                  >
                    <Icon />
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, lineHeight: 1.35 }}>
                      {principle.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.75 }}>
                      {principle.description}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: { xs: 6, md: 8 } }}>
        <Typography component="p" sx={{ color: 'secondary.main', fontWeight: 700 }}>
          Standards and practices
        </Typography>
        <Typography variant="h4" component="h3" sx={{ mt: 1, mb: 1.5, fontWeight: 700 }}>
          Standards I apply
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 780, lineHeight: 1.75, mb: 3.5 }}>
          I use standards when they clarify behavior, protect a boundary, or make quality reviewable.
          The implementation still depends on the needs and constraints of the system.
        </Typography>

        <Grid container spacing={2}>
          {standards.map((standard) => (
            <Grid item xs={12} sm={6} md={4} key={standard.title}>
              <Box
                sx={{
                  height: '100%',
                  p: 2.5,
                  borderTop: 3,
                  borderColor: 'secondary.main',
                  bgcolor: 'background.paper',
                }}
              >
                <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 700 }}>
                  {standard.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.65 }}>
                  {standard.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mt: 3 }}>
          {['Compatible contracts', 'Idempotent retries', 'Versioned events', 'Reversible migrations'].map(
            (practice) => <Chip key={practice} label={practice} variant="outlined" color="primary" />,
          )}
        </Stack>
      </Box>

      <Box
        sx={{
          mt: { xs: 6, md: 8 },
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          bgcolor: 'primary.dark',
          color: 'common.white',
          backgroundImage:
            'linear-gradient(135deg, rgba(15,118,110,0.38) 0%, rgba(23,63,104,0) 58%)',
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography
              component="p"
              sx={{ color: 'secondary.light', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              AI-assisted development
            </Typography>
            <Typography variant="h4" component="h3" sx={{ mt: 1.5, fontWeight: 700 }}>
              How I use AI in development
            </Typography>
            <Typography sx={{ mt: 2, lineHeight: 1.75, opacity: 0.86 }}>
              AI helps with implementation, review, documentation, and testing. It works from reviewed
              requirements and repository documentation; people retain product, architecture, security,
              and release decisions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {aiWorkflow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Grid item xs={12} sm={6} key={step.title}>
                    <Box
                      sx={{
                        height: '100%',
                        p: 2.5,
                        border: '1px solid rgba(255,255,255,0.16)',
                        borderRadius: 3,
                        bgcolor: 'rgba(255,255,255,0.06)',
                      }}
                    >
                      <Stack direction="row" spacing={1.25} alignItems="center">
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'secondary.main',
                            fontWeight: 700,
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Icon sx={{ color: 'secondary.light' }} />
                      </Stack>
                      <Typography variant="subtitle1" component="h4" sx={{ mt: 1.5, fontWeight: 700 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 0.75, lineHeight: 1.7, opacity: 0.82 }}>
                        {step.description}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </SectionContainer>
);

export default EngineeringPhilosophy;
