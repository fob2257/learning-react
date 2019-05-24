import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { initialState as stateData } from '../../11-Colors/store';
import { colors } from './reducers';

const logger = store => next => action => {
  let result;

  console.log('dispatching', action.type);
  console.log('prev state', store.getState());
  console.log('action', action);

  result = next(action);

  console.log('next state', store.getState());
  console.groupEnd();

  return result;
};

const saver = store => next => action => {
  let result = next(action);

  localStorage['redux-store'] = JSON.stringify(store.getState());

  return result;
};

const middleware = [
  logger,
  saver,
  thunk,
];

const storeFactory = (initialState = stateData) =>
  applyMiddleware(...middleware)(createStore)(
    combineReducers({ colors }),
    (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      initialState
  );

export default storeFactory;
