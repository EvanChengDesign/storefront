import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [
      { normalizedName: 'electronics', displayName: 'Electronics', description: 'Electronic items' },
      { normalizedName: 'clothing', displayName: 'Clothing', description: 'Apparel and clothing' },
      // Add more categories as needed
    ],
    activeCategory: '',
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
