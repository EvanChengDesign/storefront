import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton, TextField, Button, Typography, Box, Divider, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart, updateCartItem } from '../../store/cart';

function SimpleCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (cartId) => {
    dispatch(removeFromCart(cartId));
  };

  const handleQuantityChange = (cartId, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartItem(cartId, quantity));
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Your Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <React.Fragment key={item.cartId}>
            <ListItem>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '75px', 
                      objectFit: 'contain',
                    }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <ListItemText 
                    primary={item.title} 
                    secondary={`Price: $${item.price} Total: $${(item.price * item.quantity).toFixed(2)}`} 
                  />
                  <TextField
                    type="number"
                    label="Quantity"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.cartId, parseInt(e.target.value))}
                    inputProps={{ min: 1 }}
                    sx={{ width: '80px', marginRight: '10px' }}
                  />
                  <IconButton onClick={() => handleRemove(item.cartId)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      {cartItems.length > 0 && (
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Checkout
        </Button>
      )}
    </Box>
  );
}

export default SimpleCart;
