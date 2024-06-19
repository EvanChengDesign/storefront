import React from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container component="main" sx={{ flex: 1, py: 3 }}>
        <Categories />
        <Products />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
