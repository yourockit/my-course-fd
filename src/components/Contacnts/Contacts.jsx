import { Box, Container, Fab, Stack, Typography } from '@mui/material';
import { socials } from '../../data/socials';

export const Contacts = () => {
  return (
    <Container
      sx={{
        pt: 10,
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
        }}
      >
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
            Contacts
          </Typography>
          <Typography variant="h5">sts2ro@mail.com</Typography>
          <Typography variant="h5">+(420) 728 262 776</Typography>
          <Typography variant="h5">Praha, Czech Republic</Typography>
          <Stack mt={4} spacing={4} direction="row">
            {socials.map(({ name, url, icon }) => (
              <Fab key={name} aria-label={name} href={url} color="primary">
                {icon}
              </Fab>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
