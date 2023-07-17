import LeagueGothic from '../fonts/league-gothic.woff2';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5AFF3D',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#fff',
      secondary: '#5AFF3D',
    },
  },
  typography: {
    fontFamily: 'Arial, League-gothic',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 900,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-display: swap;
          font-family: 'League-gothic';
          font-style: normal;
          font-weight: 400;
          src: url(${LeagueGothic}) format('woff2');
        }
        `,
    },
  },
});
theme.typography.h1 = {
  fontSize: '56px',
  '@media (min-width:600px)': {
    fontSize: '96px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '156px',
  },
};

theme.typography.h6 = {
  fontSize: '16px',
  '@media (min-width:600px)': {
    fontSize: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
  },
};
