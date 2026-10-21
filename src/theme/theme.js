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
    allVariants: { letterSpacing: 0 },
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h2: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h3: {
      fontSize: '2rem',
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h4: {
      fontSize: '1.5rem',
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    h5: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: 0,
    },
    body1: {
      lineHeight: 1.6,
      letterSpacing: 0,
    },
    body2: {
      lineHeight: 1.6,
      letterSpacing: 0,
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
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 10px 30px rgba(20, 32, 51, 0.08)',
        },
      },
    },
  },
});

export default theme;
