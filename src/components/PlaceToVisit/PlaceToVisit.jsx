import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import { projects } from 'data/projects';
import useWindowPosition from 'hooks/useWindowPosition';
import { Container, Grid } from '@mui/material';

export const PlaceToVisit = () => {
  const checked = useWindowPosition('place-to-visit');
  return (
    <Container
      id="place-to-visit"
      component="main"
      //   maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Grid
        component="ul"
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 4, md: 12 }}
      >
        <ProjectCard projects={projects} checked={checked} />
      </Grid>
    </Container>
  );
};
