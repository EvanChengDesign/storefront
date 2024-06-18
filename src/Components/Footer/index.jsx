import React from 'react';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#2c3e50', textAlign: 'center' }}>
      <Typography
        variant="body1"
        sx={{
          color: '#fff',
          fontSize: '1rem',
        }}
      >
        ©2024 Evan Cheng
      </Typography>
    </footer>
  );
}

export default Footer;
