import { Box, Container, styled } from '@mui/material';
import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#333',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#111',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const Layout = () => {
  return (
    <>
      <MainBox component="main">
        <Container maxWidth="xl">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </MainBox>
      <FooterBox component="footer">
        <Container maxWidth="xl">
          <Footer />
        </Container>
      </FooterBox>
    </>
  );
};
