import { createSlice } from '@reduxjs/toolkit';

const activeCategorySlice = createSlice({
  name: 'activeCategory',
  initialState: '',
  reducers: {
    setActiveCategory: (state, action) => action.payload,
  },
});

export const { setActiveCategory } = activeCategorySlice.actions;

export default activeCategorySlice.reducer;
