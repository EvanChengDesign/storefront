import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Products = () => {
  const products = useSelector(state => state.products.filteredList);

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid item key={product.name} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">{product.description}</Typography>
              <Typography variant="body2">${product.price}</Typography>
              <Typography variant="body2">In Stock: {product.inventory}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
