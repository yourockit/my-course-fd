import {
  Box,
  Card,
  CardMedia,
  Container,
  Link,
  Stack,
  Typography,
  Zoom,
} from '@mui/material';
import { BackLink } from 'components/BackLink/BackLink';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cardVariants = {
  offscreen: {
    y: 200,
    rotate: -6,
  },
  onscreen: {
    y: -10,
    rotate: -2,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
};

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
    <Container id="work" sx={{ pt: 4, pb: 6 }}>
      <BackLink toBackLink={backLinkHref}>BACK</BackLink>
      <Zoom in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Box pt={2}>
          <Typography
            variant="h1"
            component="span"
            fontFamily="League-gothic"
            lineHeight={1}
          >
            {title}
          </Typography>
          <Typography variant="h6" component="p">
            {description}
          </Typography>
          {imgs.map((img, index) => (
            <Container
              key={index}
              sx={{
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: { xs: 6, md: 8 },
              }}
            >
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.6 }}
              >
                <motion.div className="card" variants={cardVariants}>
                  <Card
                    sx={{
                      p: 2,
                      borderRadius: 4,
                      width: { xs: 'calc(100vw - 72px)' },
                      maxWidth: { xs: 296, md: 680 },
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={img}
                      sx={{
                        borderRadius: 2,
                        height: { xs: 186, md: 468 },
                        transform: 'rotate(2deg)',
                        objectFit: 'contain',
                      }}
                    ></CardMedia>
                  </Card>
                </motion.div>
              </motion.div>
            </Container>
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
