import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavigationMenu = () => {
  return (
    <>
      <Container sx={{ width: 304 }}>
        <Button color="inherit" component={NavLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/projects">
          Projects
        </Button>
        <Button color="inherit" component={NavLink} to="/contacts">
          Contacts
        </Button>
      </Container>
    </>
  );
};
