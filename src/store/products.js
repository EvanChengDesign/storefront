import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      { category: 'electronics', name: 'Laptop', description: 'High performance laptop', price: 999, inventory: 10 },
      { category: 'clothing', name: 'T-Shirt', description: 'Comfortable cotton t-shirt', price: 19.99, inventory: 100 },
      { category: 'nooks', name: 'Novel;', description: 'Young-adult fiction', price: 39.99, inventory: 100 },

    ],
    filteredList: [],
  },
  reducers: {
    filterProducts: (state, action) => {
      state.filteredList = state.list.filter(product => product.category === action.payload);
    },
  },
});

export const { filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
