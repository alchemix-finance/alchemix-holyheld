import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Neue Kabel, Montserrat, sans-serif',
    button: {
      fontFamily: 'Neue Kabel, Montserrat, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Neue Kabel, Montserrat, sans-serif',
        },
      },
    },
  },
});
