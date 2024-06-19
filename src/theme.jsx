import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
    body2: {
      color: '#757575',
    },
  },
});

export default theme;
