import { Card, CardMedia, Container } from '@mui/material';
import { motion } from 'framer-motion';

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

export const WorkCard = ({ img, index }) => {
  return (
    <Container
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
              maxWidth: { xs: 296, sm: 446, md: 680 },
              backgroundColor: '#ffffff',
            }}
          >
            <CardMedia
              component="img"
              image={img}
              sx={{
                height: { xs: 186, sm: 328, md: 468 },
                transform: 'rotate(2deg)',
                objectFit: 'contain',
              }}
            ></CardMedia>
          </Card>
        </motion.div>
      </motion.div>
    </Container>
  );
};
