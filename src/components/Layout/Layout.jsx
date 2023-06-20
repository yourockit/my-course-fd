import { Box, Container } from '@mui/material';
import { AppBarCourse } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBarCourse />
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '100vw',
          bgcolor: '#dfdde0',
          zIndex: '-1',
        }}
      />
      <Container component="main" maxWidth="xl">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
