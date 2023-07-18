import { Box, Container, Link, Stack, Typography, Zoom } from '@mui/material';
import { BackLink } from 'components/BackLink/BackLink';
import { WorkCard } from 'components/WorkCard/WorkCard';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Works = ({ data }) => {
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setChecked(true);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { title, description, pageUrl, sourceUrl, imgs } = data;
  return (
    <Container id="work" sx={{ pt: 2, pb: 6 }}>
      <BackLink toBackLink={backLinkHref} />
      <Zoom in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Box pt={2}>
          <Typography variant="h1" component="span" fontFamily="League-gothic">
            {title}
          </Typography>
          <Typography variant="h6" component="p">
            {description}
          </Typography>
          {imgs.map((img, index) => (
            <WorkCard key={index} img={img} index={index} />
          ))}
          <Stack direction="row" pt={6}>
            <motion.div
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ type: 'spring' }}
            >
              <Link
                variant="h1"
                href={pageUrl}
                fontFamily="League-gothic"
                lineHeight={1}
                color="secondary"
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                PAGE
              </Link>
            </motion.div>
            <Typography
              variant="h1"
              fontFamily="League-gothic"
              lineHeight={1}
              color="text"
              sx={{
                ml: { xs: 2, md: 5 },
                mr: { xs: 2, md: 5 },
              }}
            >
              |
            </Typography>
            <motion.div
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ type: 'spring' }}
            >
              <Link
                variant="h1"
                href={sourceUrl}
                fontFamily="League-gothic"
                lineHeight={1}
                color="secondary"
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                SOURCE
              </Link>
            </motion.div>
          </Stack>
        </Box>
      </Zoom>
    </Container>
  );
};
