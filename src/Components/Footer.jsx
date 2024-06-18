import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <AppBar position="static" style={{ marginTop: '20px' }}>
    <Toolbar>
      <Typography variant="body1" align="center" style={{ width: '100%' }}>
        &copy; 2024 Evan Cheng
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Footer;
