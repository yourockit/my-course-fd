import { AppBar, Toolbar, Container } from '@mui/material';
import { NavigationMenu } from 'components/NavigationMenu/NavigationMenu';

export const AppBarCourse = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Toolbar disableGutters>
          <NavigationMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
