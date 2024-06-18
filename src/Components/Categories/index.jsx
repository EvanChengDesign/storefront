import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../store/products';
import Button from '@mui/material/Button';
import { Typography, Divider } from '@mui/material';
import "./Categories.scss";

function Categories() {
  const currentCategory = useSelector((state) => state.categoriesReducer.currentCategory);
  const dispatch = useDispatch();

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: '1.5rem',
          color: '#3498db',
        }}
      >
        CATEGORIES:
      </Typography>
      <Divider sx={{ marginBottom: '5px', marginTop: '5px', backgroundColor: '#2c3e50' }} />
      <Button
        style={{ fontSize: '20px' }}
        onClick={() => dispatch(changeCategory('electronics'))}
      >
        Electronics
      </Button>
      <Button
        style={{ fontSize: '20px' }}
        onClick={() => dispatch(changeCategory('food'))}
      >
        Food
      </Button>
      <Button
        style={{ fontSize: '20px' }}
        onClick={() => dispatch(changeCategory('clothing'))}
      >
        Clothing
      </Button>
      <div className="categories-title">
        <Typography variant="h1" sx={{ fontSize: '2.5rem', color: '#2c3e50' }}>
          {currentCategory.title}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '1.5rem', color: '#7f8c8d' }}>
          {currentCategory.description}
        </Typography>
      </div>
    </>
  );
}

export default Categories;
