import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: '#2c3e50',
        textAlign: 'center',
        mt: 'auto',
        width: '100%',
        position: 'fixed', 
        bottom: 0, 
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: '#fff',
          fontSize: '1rem',
        }}
      >
        ©2024 Evan Cheng
      </Typography>
    </Box>
  );
}

export default Footer;
