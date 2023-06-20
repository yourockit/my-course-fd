import {
  AppBar,
  Toolbar,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { NavigationMenu } from 'components/NavigationMenu/NavigationMenu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export const AppBarCourse = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed">
        <Container maxWidth="xl" sx={{ p: 0 }}>
          <Toolbar disableGutters>
            <NavigationMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
