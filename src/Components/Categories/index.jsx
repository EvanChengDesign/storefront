import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../store/categories';
import { Box, Button, Typography, Grid } from '@mui/material';

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const currentCategory = useSelector((state) => state.categories.currentCategory);
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(changeCategory(category));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {Object.keys(categories).map((key) => (
          <Grid item key={key}>
            <Button
              variant={currentCategory.title === categories[key].title ? 'contained' : 'outlined'}
              onClick={() => handleCategoryChange(key)}
            >
              {categories[key].title}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        {currentCategory.description}
      </Typography>
    </Box>
  );
}

export default Categories;
