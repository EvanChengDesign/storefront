import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';
import productsReducer from './products';


let reducers = combineReducers({ productsReducer, categoriesReducer });
let store = createStore(reducers, composeWithDevTools());
export default store;


