import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Products() {
  const displayedProducts = useSelector((state) => state.productsReducer.displayedProducts);

  return (
    <>
      <Box sx={{ minHeight: 393, padding: 2 }}>
        <Grid container spacing={2}>
          {displayedProducts.map((product, index) => {
            return (
              <Grid item xs={12} sm={6} key={`card ${index}`}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardHeader
                    title={product.title}
                    sx={{ flexGrow: 0 }}
                  />
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={`${product.title} image`}
                    sx={{ height: 200, objectFit: 'contain' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Products;
