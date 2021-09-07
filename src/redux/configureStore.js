import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
