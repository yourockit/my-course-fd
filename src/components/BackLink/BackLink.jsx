import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const BackLink = ({ toBackLink, children }) => {
  return (
    <Typography
      component={Link}
      to={toBackLink}
      variant="h6"
      fontWeight="bold"
      color="secondary"
    >
      {children}
    </Typography>
  );
};
