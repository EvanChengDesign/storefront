import React from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Grid } from '@mui/material';
import { addToCart } from '../../store/cart';

function ProductModal({ product, open, onClose }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{product.title}</DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '300px', // Restrict image height
              objectFit: 'contain',
              marginBottom: '20px'
            }}
          />
          <Typography variant="body1" color="textPrimary">
            {product.description}
          </Typography>
          <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                ${product.price}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductModal;
