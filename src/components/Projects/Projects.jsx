import { Box, Grid, Stack, Typography } from '@mui/material';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import { projects } from 'data/projects';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const Projects = () => {
  const [selectedCard, setSelectedCard] = useState('null');

  const handleMouseEnter = index => {
    setSelectedCard(index);
  };

  const handleMouseLeave = () => {
    setSelectedCard('null');
  };

  return (
    <>
      <Grid item xs={4} sm={4} md={3} sx={{ mb: { xs: 1, sm: 10 } }}>
        <Typography
          variant="h6"
          component="p"
          color="#fff"
          fontWeight="bold"
          mb={2}
        >
          MY <br />
          PROJECTS
        </Typography>
      </Grid>
      <Grid item xs={4} sm={8} md={9} sx={{ mb: { xs: 6, sm: 10 } }}>
        <Stack>
          {projects.map(({ title, imgUrl, link }, index) => (
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
                  component={NavLink}
                  to={link}
                  variant="h1"
                  fontFamily="League-gothic"
                  color="secondary"
                  lineHeight={0.8}
                  sx={{
                    display: 'inline',
                    textDecoration: 'none',
                  }}
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
    </>
  );
};
