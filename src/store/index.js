import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import homeSaga from '../containers/HomePage/home-saga';

const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(homeSaga);

export default store;