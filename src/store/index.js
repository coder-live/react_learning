import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySages from './mySages';

const sageMiddleware = createSagaMiddleware();

const Compose_Enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = Compose_Enhancer(applyMiddleware(thunk));
const enhancer = Compose_Enhancer(applyMiddleware(sageMiddleware));

const store = createStore(
  reducer,
  enhancer
);
sageMiddleware.run(mySages);

export default store