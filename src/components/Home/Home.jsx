import { Box, Container, Grid, Stack, Typography, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as Scroll } from 'react-scroll';
import { projects } from 'data/projects';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';

export const Home = () => {
  const [checked, setChecked] = useState(false);
  const [selectedCard, setSelectedCard] = useState('null');
  useEffect(() => {
    setChecked(true);
  }, []);

  const handleMouseEnter = index => {
    setSelectedCard(index);
  };

  const handleMouseLeave = () => {
    setSelectedCard('null');
  };
  return (
    <Container id="home" sx={{ pt: 6 }}>
      <Zoom in={checked} {...(checked ? { timeout: 1000 } : {})}>
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
          <Grid item xs={4} sm={4} md={3} sx={{ mb: { xs: 1, sm: 10 } }}>
            <Typography
              variant="h6"
              component="p"
              color="#fff"
              fontWeight="bold"
            >
              MY <br />
              PROJECTS
            </Typography>
          </Grid>
          <Grid item xs={4} sm={8} md={9} sx={{ mb: { xs: 6, sm: 10 } }}>
            <Stack>
              {projects.map(({ title, imgUrl }, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: [null, 1.0, 1.1] }}
                    transition={{ type: 'spring' }}
                  >
                    <Typography
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      component="p"
                      variant="h1"
                      fontFamily="League-gothic"
                      color="secondary"
                      lineHeight={0.8}
                      sx={{ display: 'inline', cursor: 'pointer' }}
                    >
                      {title}
                    </Typography>
                  </motion.div>
                  <ProjectCard
                    selectedCard={selectedCard}
                    imgUrl={imgUrl}
                    index={index}
                  />
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Zoom>
    </Container>
  );
};
