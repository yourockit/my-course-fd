import { Box, Container, Fab, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

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
            <Fab aria-label="gitHub" href="https://github.com/yourockit">
              <GitHubIcon fontSize="large" />
            </Fab>
            <Fab
              aria-label="linkedIn"
              href="https://www.linkedin.com/in/yurii-ostriianskyi-3b40ab256/"
            >
              <LinkedInIcon fontSize="large" />
            </Fab>
            <Fab aria-label="telegram" href="https://t.me/ostriianskyiyurii">
              <TelegramIcon fontSize="large" />
            </Fab>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
