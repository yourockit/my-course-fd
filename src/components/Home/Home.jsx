import { Box, Container, Grid, Stack, Typography, Zoom } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Projects } from 'components/Projects/Projects';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Zoom in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Container id="home" sx={{ pt: 6 }}>
        <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>
          <Grid item xs={4} sm={12} md={12} sx={{ mb: { xs: 6, sm: 10 } }}>
            <Stack direction="row" spacing={1}>
              <Typography
                variant="h1"
                component="span"
                fontFamily="League-gothic"
                lineHeight={1}
              >
                HI, I'M
              </Typography>
              <motion.div
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ type: 'spring' }}
              >
                <Scroll to="footer" smooth={true}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'end',
                    }}
                  >
                    <Typography
                      variant="h1"
                      component="span"
                      color="secondary"
                      fontFamily="League-gothic"
                      lineHeight={1}
                      sx={{ cursor: 'pointer' }}
                    >
                      YOUROCK
                    </Typography>
                    <ExpandMoreIcon sx={{ color: '#fff' }} fontSize="large" />
                  </Box>
                </Scroll>
              </motion.div>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={4} md={3} sx={{ mb: { xs: 2, sm: 10 } }}>
            <Typography variant="h6" component="p" fontWeight="bold">
              FRONTEND <br />
              DEVELOPER
            </Typography>
          </Grid>
          <Grid item xs={4} sm={8} md={8} sx={{ mb: { xs: 6, sm: 10 } }}>
            <Typography variant="h6" component="p">
              I'm a frontend developer and this gives me pleasure. <br /> I have
              experience with HTML | CSS | SASS | JavaScript | React | Redux |
              Redux_Toolkit | TypeScript | MUI | GIT | BEM | REST_API |
              Adobe_Photoshop. I aspire to participate in commercial development
              and teamwork.
            </Typography>
          </Grid>
          <Projects />
        </Grid>
      </Container>
    </Zoom>
  );
};
