import { Box, Container, Typography } from '@mui/material';

export const HomeInfo = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        paddingTop: 10,
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, marginBottom: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
            About me
          </Typography>
          <Typography variant="h5">
            My name is Ostriianskyi Yurii.
            <br />
            I'm a frontend developer and this gives me pleasure.
            <br />
            I am a Computer Systems and Technology Engineer and also completed
            Frontend Developer courses.
            <br />
            I have experience with HTML/CSS, SASS, JavaScript, React, Redux.
            <br />I aspire to participate in commercial development and
            teamwork.
          </Typography>
        </Box>
        <Box sx={{ mazWidth: { xs: '100%', md: '30%' } }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
            My skills
          </Typography>
          <Typography align="center" variant="h5">
            HTML | CSS | SASS | JavaScript | React | Redux | Redux Toolkit |
            TypeScript | MUI | GIT | BEM | REST API
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
