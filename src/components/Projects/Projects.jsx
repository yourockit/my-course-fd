import * as React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Typography,
} from '@mui/material';
import { images } from '../../data/dataImages';

export const Projects = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleMouseEnter = index => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(null);
  };
  return (
    <Container sx={{ pt: 10, pb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          My projects
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
        >
          {images.map(
            ({ imgUrl, pageUrl, sourceUrl, title, description }, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Card
                  variant="text"
                  sx={{
                    position: 'relative',
                    maxWidth: 345,
                    height: 260,
                    m: 'auto',
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={imgUrl}
                    alt={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                  <Fade in={selectedIndex === index}>
                    <CardContent
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        p: 0,
                        bgcolor: '#3a383482',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <CardActions
                        sx={{
                          height: '100%',
                          width: '100%',
                          p: 0,
                        }}
                      >
                        <CardActionArea
                          href={pageUrl}
                          underline="none"
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: 'calc(100% + 48px)',
                            width: '50%',
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 'bold', color: '#ffffff' }}
                          >
                            VISIT PAGE
                          </Typography>
                        </CardActionArea>
                        <CardActionArea
                          href={sourceUrl}
                          underline="none"
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: 'calc(100% + 48px)',
                            width: '50%',
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 'bold', color: '#ffffff' }}
                          >
                            VISIT SOURCE
                          </Typography>
                        </CardActionArea>
                      </CardActions>
                    </CardContent>
                  </Fade>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Container>
  );
};
