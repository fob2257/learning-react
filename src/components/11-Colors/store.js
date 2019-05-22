import { createStore, combineReducers, compose } from 'redux';

import { colors, sort } from './reducers';
import data from './data.json';

export const initialState = data;

export const store = createStore(combineReducers({ colors, sort }), initialState);

export const storeLocalStorage = createStore(
  combineReducers({ colors, sort }),
  (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}
);

export const print = compose(
  list => console.log(list),
  titles => titles.join(', '),
  map => map(c => c.title),
  colors => colors.map.bind(colors),
  state => state.colors
);

