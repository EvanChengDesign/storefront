import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton, Badge, Modal, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SimpleCart from '../SimpleCart';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            REDUX: E-COMMERCE STORE
          </Typography>
          <IconButton color="inherit" onClick={handleOpen}>
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <SimpleCart />
        </Box>
      </Modal>
    </>
  );
}

export default Header;
