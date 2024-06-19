import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import { Card, CardHeader, CardMedia, CardContent, Typography, Box, Grid, Button, CardActions } from '@mui/material';
import ProductModal from '../ProductModal'; // Import the ProductModal component

function Products() {
  const displayedProducts = useSelector((state) => state.products.displayedProducts);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {displayedProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={`card ${index}`}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardHeader title={product.title} />
              <CardMedia
                component="img"
                image={product.image}
                alt={`${product.title} image`}
                sx={{ height: 200, objectFit: 'contain' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto', justifyContent: 'space-between' }}>
                <Button size="small" color="primary" onClick={() => handleViewProduct(product)}>
                  View Product Info
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedProduct && (
        <ProductModal product={selectedProduct} open={open} onClose={handleClose} />
      )}
    </Box>
  );
}

export default Products;
