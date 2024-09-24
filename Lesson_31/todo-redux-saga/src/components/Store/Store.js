import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from '../Reducer/Reducer';
import todoSaga from '../Sagas/Sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSaga);

export default store;
