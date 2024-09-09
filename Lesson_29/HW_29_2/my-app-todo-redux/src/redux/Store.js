import { createStore } from 'redux';
import rootReducer from '../redux/Reducers';

const store = createStore(rootReducer);

export default store;
