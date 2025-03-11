import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontFamily: 'Neue Kabel, sans-serif',
    },
    h2: {
      fontFamily: 'Neue Kabel, sans-serif',
    },
    h3: {
      fontFamily: 'Neue Kabel, sans-serif',
    },
    h4: {
      fontFamily: 'Neue Kabel, sans-serif',
    },
    h5: {
      fontFamily: 'Neue Kabel, sans-serif',
    },
    h6: {
      fontFamily: 'Neue Kabel, sans-serif',
    },
    subtitle1: {
      fontFamily: 'Neue Kabel, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Neue Kabel, sans-serif',
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, sans-serif',
        },
      },
    },
    // Styles spécifiques pour les composants avec titres
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: 'Neue Kabel, sans-serif',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontFamily: 'Neue Kabel, sans-serif',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          '& .MuiTypography-root': {
            fontFamily: 'Neue Kabel, sans-serif',
          },
        },
      },
    },
  },
});
