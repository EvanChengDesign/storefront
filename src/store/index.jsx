import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
