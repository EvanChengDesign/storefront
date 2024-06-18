import React from 'react';
import StoreProvider from './store/index.js';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Categories from './Components/Categories.jsx';
import Products from './Components/Products.jsx';
import ActiveCategory from './Components/ActiveCategory.jsx';
import { Container } from '@mui/material';

function App() {
  return (
    <StoreProvider>
      <Header />
      <Container>
        <Categories />
        <ActiveCategory />
        <Products />
      </Container>
      <Footer />
    </StoreProvider>
  );
}

export default App;
