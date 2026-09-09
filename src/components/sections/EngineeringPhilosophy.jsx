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
    title: 'Start with domain language',
    description:
      'I work with product partners to name the business capabilities, invariants, failure modes, and ownership boundaries before choosing the implementation shape. The model should explain the business—not mirror the database.',
    icon: AccountTree,
  },
  {
    title: 'Earn every distributed boundary',
    description:
      'I prefer cohesive modules with enforceable contracts until independent ownership, scaling, or deployment makes a service boundary worthwhile. A distributed system should solve a real constraint, not decorate the architecture diagram.',
    icon: Api,
  },
  {
    title: 'Design failure and recovery together',
    description:
      'Timeouts, retries, idempotency, backpressure, compatibility, and partial failure are part of the design. Risky migrations use phased cutovers, observable checkpoints, and a tested rollback path before traffic moves.',
    icon: PublishedWithChanges,
  },
  {
    title: 'Operate what you ship',
    description:
      'Correlation IDs, structured logs, bounded metrics, traces, health checks, and useful alerts are product behavior. They shorten the path from a customer report to the failing boundary and a safe production fix.',
    icon: Speed,
  },
];

const standards = [
  {
    title: 'DDD + SOLID',
    description: 'Bounded contexts, ubiquitous language, high cohesion, and dependencies that point toward the domain.',
  },
  {
    title: 'OpenAPI 3.1',
    description: 'Contract-first APIs with stable error shapes, explicit examples, compatibility, and consumer-visible behavior.',
  },
  {
    title: 'OWASP guidance',
    description: 'Least privilege, safe session and upload handling, secret redaction, and abuse-aware failure behavior.',
  },
  {
    title: 'Architecture Decision Records',
    description: 'Durable decisions capture context, options, tradeoffs, consequences, ownership, and removal conditions.',
  },
  {
    title: 'Testing diamond',
    description: 'Fast domain tests, strong integration coverage, boundary contracts, and a small set of critical browser flows.',
  },
  {
    title: 'SRE signals',
    description: 'SLIs, SLOs, latency distributions, error rates, saturation, and alerts tied to an operator action.',
  },
];

const aiWorkflow = [
  {
    title: 'Specify before prompting',
    description:
      'A reviewed spec defines the outcome, non-goals, acceptance scenarios, domain terms, contracts, security constraints, failure behavior, observability, and rollout expectations.',
    icon: AssignmentTurnedIn,
  },
  {
    title: 'Keep the repository self-explaining',
    description:
      'Specs, plans, task slices, ADRs, OpenAPI, diagrams, service guides, and runbooks change with the code. AI works from current repository context instead of undocumented conversation history.',
    icon: AutoAwesome,
  },
  {
    title: 'Ask for evidence, not confidence',
    description:
      'AI runs the test layers justified by the change, reports exact commands and failures, and verifies contracts, migrations, security, and user-visible behavior before the work is considered complete.',
    icon: FactCheck,
  },
  {
    title: 'Keep judgment and acceptance human',
    description:
      'People own the product outcome, architecture tradeoffs, security posture, and release decision. AI accelerates implementation, review, documentation, and verification inside those agreed boundaries.',
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
            Engineering philosophy
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>
            Make complexity legible—and change safe.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
            I optimize for software a team can understand, test, operate, and evolve without heroics.
            The goal is not maximum abstraction; it is clear decisions, reliable boundaries, and a
            safer next change.
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
                <Stack direction="row" spacing={2} alignItems="flex-start">
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
          Named standards, applied pragmatically
        </Typography>
        <Typography variant="h4" component="h3" sx={{ mt: 1, mb: 1.5, fontWeight: 700 }}>
          Standards are decision aids, not résumé badges.
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 780, lineHeight: 1.75, mb: 3.5 }}>
          I use established standards where they reduce ambiguity, protect a boundary, or make
          quality reviewable. I adapt the implementation to the system rather than applying a pattern
          mechanically.
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
          {[
            'Backward-compatible contracts',
            'Idempotent retries',
            'Versioned events',
            'Expand / contract migrations',
            'Privacy-safe telemetry',
            'Feature flags and rollback',
          ].map((practice) => (
            <Chip key={practice} label={practice} variant="outlined" color="primary" />
          ))}
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
              Working with AI
            </Typography>
            <Typography variant="h4" component="h3" sx={{ mt: 1.5, fontWeight: 700 }}>
              AI-assisted. Spec-driven. Engineer-owned.
            </Typography>
            <Typography sx={{ mt: 2, lineHeight: 1.75, opacity: 0.86 }}>
              I treat AI as a fast implementation and verification partner—not as the source of
              requirements or architectural authority. Its work is only as trustworthy as the
              context, constraints, and evidence around it.
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
