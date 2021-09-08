import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rockets from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rockets,
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
