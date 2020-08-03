import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const Compose_Enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = Compose_Enhancer(applyMiddleware(thunk));

export default createStore(
  reducer,
  enhancer
);