// src/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Correct named import for 'thunk'
import swapiReducer from '../Reducers/SwapiReducer';

const rootReducer = combineReducers({
    swapi: swapiReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
