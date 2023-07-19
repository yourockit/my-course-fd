import { Container, Fab, Grid, Stack, Typography } from '@mui/material';
import { socials } from '../../data/socials';

export const Footer = () => {
  return (
    <Container id="footer" sx={{ pt: 4, pb: 4 }}>
      <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>
        <Grid item xs={4} sm={4} md={3} sx={{ mb: { xs: 2, sm: 10 } }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            CONTACTS
          </Typography>
        </Grid>
        <Grid item xs={4} sm={8} md={8}>
          <Typography variant="h6">sts2ro@gmail.com</Typography>
          <Typography variant="h6">+(420) 728 262 776</Typography>
          <Typography variant="h6">Praha, Czech Republic</Typography>
          <Stack spacing={4} direction="row" pt={4}>
            {socials.map(({ name, url, icon }) => (
              <Fab key={name} aria-label={name} href={url} color="primary">
                {icon}
              </Fab>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
