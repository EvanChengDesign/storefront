import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../store/categories';
import { filterProducts } from '../store/products';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Categories = () => {
  const categories = useSelector(state => state.categories.list);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category.normalizedName));
    dispatch(filterProducts(category.normalizedName));
  };

  return (
    <List component="nav">
      {categories.map(category => (
        <ListItem button key={category.normalizedName} onClick={() => handleCategoryClick(category)}>
          <ListItemText primary={category.displayName} />
        </ListItem>
      ))}
    </List>
  );
};

export default Categories;
