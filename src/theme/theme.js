import { createTheme } from '@mui/material/styles';
import { palette } from './palette';

const theme = createTheme({
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    background: palette.background,
    text: palette.text,
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    body1: {
      lineHeight: 1.6,
      letterSpacing: '0.00938em',
    },
    body2: {
      lineHeight: 1.6,
      letterSpacing: '0.01071em',
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme;
