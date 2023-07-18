import { Box, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const BackLink = ({ toBackLink }) => {
  return (
    <Box sx={{ display: 'inline-flex' }}>
      <motion.div
        whileHover={{ scale: [null, 1.0, 1.1] }}
        transition={{ type: 'spring' }}
      >
        <Typography
          component={Link}
          to={toBackLink}
          color="secondary"
          sx={{ display: 'inline-flex' }}
        >
          <ChevronLeftIcon color="secondary" />
          <Typography
            variant="h6"
            component="span"
            fontWeight="bold"
            color="secondary"
          >
            BACK
          </Typography>
        </Typography>
      </motion.div>
    </Box>
  );
};
