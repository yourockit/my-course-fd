import { CardContainer, CardContant } from './ProjectCard.styled';
import { Box, Card, CardMedia } from '@mui/material';

export const ProjectCard = ({ imgUrl, selectedCard, index }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <CardContainer>
        <CardContant
          initial={{ opacity: 0, rotate: 0, y: 300 }}
          animate={{
            opacity: selectedCard === index ? 1 : 0,
            rotate: selectedCard === index ? -6 : 0,
            y: selectedCard === index ? 50 : 100,
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
          }}
        >
          <Card
            sx={{
              borderRadius: 2,
              height: { xs: 257, md: 402 },
              width: { xs: 166, md: 260 },
            }}
          >
            <CardMedia
              image={imgUrl}
              sx={{
                height: '100%',
                width: '100%',
                backgroundSize: 'contain',
              }}
            ></CardMedia>
          </Card>
        </CardContant>
      </CardContainer>
    </Box>
  );
};
