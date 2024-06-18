// Store Files & Wiring
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// Which Reducers are you bringing in?
import counter from './counter.js';

let reducers = combineReducers({ counter });
const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();

