import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

const ActiveCategory = () => {
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const category = useSelector(state =>
    state.categories.list.find(cat => cat.normalizedName === activeCategory)
  );

  if (!category) return null;

  return (
    <div>
      <Typography variant="h4">{category.displayName}</Typography>
      <Typography variant="body1">{category.description}</Typography>
    </div>
  );
};

export default ActiveCategory;
