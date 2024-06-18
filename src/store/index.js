import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import categoriesReducer from './categories';
import productsReducer from './products';
import activeCategoryReducer from './active-category';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    activeCategory: activeCategoryReducer,
  },
});

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default StoreProvider;



