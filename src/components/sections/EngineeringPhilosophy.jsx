import React from 'react';
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';

const principles = [
  { title: 'Understand the domain', description: 'Agree on business rules with product partners and the teams that own the data.' },
  { title: 'Choose practical boundaries', description: 'Start with cohesive modules. Split services when ownership, scaling, or deployment needs justify the extra work.' },
  { title: 'Plan for failure', description: 'Define timeouts, safe retries, recovery, and a phased release before implementation.' },
  { title: 'Keep feedback close', description: 'Use tests and production signals to check behavior, then adjust with the people using the software.' },
];

const standards = [
  { title: 'DDD and SOLID', description: 'Use shared domain language, clear ownership, cohesive modules, and dependencies directed toward business rules.' },
  { title: 'OpenAPI', description: 'Document API behavior, examples, errors, and compatibility expectations.' },
  { title: 'OWASP guidance', description: 'Apply least privilege, safe session and upload handling, secret redaction, and useful errors.' },
  { title: 'Architecture Decision Records', description: 'Record important choices, alternatives, tradeoffs, and conditions for revisiting them.' },
  { title: 'Testing diamond', description: 'Combine fast unit tests, strong integration coverage, boundary contracts, and focused end-to-end checks.' },
  { title: 'SRE practice', description: 'Track latency, failures, and capacity, with alerts tied to a clear operator response.' },
];

const aiWorkflow = [
  { title: 'Agree on requirements', description: 'People define the goal, rules, and acceptance examples.' },
  { title: 'Keep context in the repo', description: 'Specs, decisions, API contracts, and diagrams guide the work.' },
  { title: 'Build a small slice', description: 'AI implements within the agreed architecture; changes stay reviewable.' },
  { title: 'Verify with people', description: 'Run risk-based tests, review the result, and check it with stakeholders.' },
];

const EngineeringPhilosophy = () => (
  <SectionContainer id="philosophy" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Typography component="p" sx={{ color: 'secondary.main', fontWeight: 700, textTransform: 'uppercase' }}>Engineering approach</Typography>
      <Typography variant="h3" component="h2" sx={{ mt: 1.5, mb: 3 }}>How I build software</Typography>
      <Grid container spacing={3}>
        {principles.map((item) => (
          <Grid item xs={12} sm={6} key={item.title}>
            <Box sx={{ borderTop: 2, borderColor: 'primary.main', pt: 2 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>{item.title}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 540 }}>{item.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, p: { xs: 2.5, sm: 3 }, bgcolor: 'background.paper', borderLeft: 3, borderColor: 'secondary.main' }}>
        <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700 }}>Example: removing a photo</Typography>
        <Typography sx={{ mt: 1, mb: 1, maxWidth: 850 }} color="text.secondary">
          Agree who can remove it, how the gallery changes, and when storage cleanup is safe.
          Then model the change and verify the API and screen.
        </Typography>
        <Link href="https://app.braidenmiller.com/about/developer/walkthroughs/media-removal" target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block', py: 1 }}>
          Follow the feature from requirements to the app
        </Link>
      </Box>
      <Box component="details" className="portfolio-details" sx={{ mt: 4 }}>
        <summary>Standards and practices: DDD, OpenAPI, OWASP, and testing</summary>
        <Grid container spacing={3} sx={{ pt: 2, pb: 1 }}>
          {standards.map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{item.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: { xs: 5, md: 6 } }}>
        <Typography variant="h4" component="h3" sx={{ fontWeight: 700 }}>How I work with AI</Typography>
        <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 850 }}>
          AI helps with implementation, documentation, and testing. People retain product, architecture,
          security, and release decisions.
        </Typography>
        <Stack component="ol" spacing={2} sx={{ mt: 3, pl: 3 }}>
          {aiWorkflow.map((step) => (
            <Box component="li" key={step.title} sx={{ pl: 0.5 }}>
              <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 700 }}>{step.title}</Typography>
              <Typography variant="body2" color="text.secondary">{step.description}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  </SectionContainer>
);

export default EngineeringPhilosophy;
