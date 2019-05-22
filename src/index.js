/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

/**
 * Component mounting & PropTypes
 */
// import Menu, { data } from './components/1-Menu/Menu';
// ReactDOM.render(<Menu title='Delicious recipes' recipes={data} />, document.getElementById('root'));

/**
 * Class components & Stateless components
 */
// import { default as ColorApp } from './components/2-Color/index';
// ReactDOM.render(<ColorApp />, document.getElementById('root'));

/**
 * Component mounting lifecycle
 */
// import MemberList from './components/3-Member/MemberList';
// ReactDOM.render(<MemberList />, document.getElementById('root'));

/**
 * Component updating lifecycle
 */
// import { default as ColorApp } from './components/4-Color/index';
// ReactDOM.render(<ColorApp />, document.getElementById('root'));

// import HiddenMessages from './components/5-HiddenMessages/HiddenMessages';
// ReactDOM.render(<HiddenMessages />, document.getElementById('root'));

/**
 * React Children
 */
// import { default as DisplayApp } from './components/6-Display/Display';
// ReactDOM.render(<DisplayApp />, document.getElementById('root'));

/**
 * Fetch
 */
// import CountryList from './components/7-Country/CountryList';
// ReactDOM.render(<CountryList />, document.getElementById('root'));

/**
 * D3
 */
// import TimeLine, { historicDatesForSkiing } from './components/8-TimeLine/TimeLine';
// ReactDOM.render(<TimeLine name='History of skiing' data={historicDatesForSkiing} />, document.getElementById('root'));

/**
 * High Order Component
 */
// import RandomUser from './components/9-RandomUser';
// ReactDOM.render(<RandomUser count={10} />, document.getElementById('root'));

/**
 * Flux
 */
// import { actions, store } from './components/10-Countdown';
// import { Countdown } from './components/10-Countdown/View';
// const render = count =>
//   ReactDOM.render(<Countdown count={count} {...actions} />, document.getElementById('root'));

// store.on('TICK', () => render(store._count));
// store.on('RESET', () => render(store._count));

// render(store._count);

/**
 * Redux
 */
/*
import ActionConstants from './components/11-Colors/constants';
import { store, storeLocalStorage, print } from './components/11-Colors/store';
import {
  rateColor,
  removeColor,
  addColor,
  sortColors,
} from './components/11-Colors/creators';

console.log('List of colors before insert', store.getState().colors);

store.dispatch({
  type: ActionConstants.ADD_COLOR,
  id: Date.now(),
  title: 'Party Pink',
  color: '#F142FF',
  timestamp: new Date().toString(),
});

console.log('List of colors after insert', store.getState().colors);

let [, , color] = store.getState().colors;

console.log('Color rating before update', color.rating);

store.dispatch({
  type: ActionConstants.RATE_COLOR,
  id: color.id,
  rating: 5,
});

[, , color] = store.getState().colors;

console.log('Color rating after update', color.rating);

// Subscribe to Store

console.log('Subscribing to store');
store.subscribe(() => console.log('Color count:', store.getState().colors.length));

store.dispatch({
  type: ActionConstants.ADD_COLOR,
  id: '2222e1p5-3abl-0p523-30e4-8001l8yf2222',
  title: 'Party Pink',
  color: '#F142FF',
  timestamp: new Date().toString(),
});
store.dispatch({
  type: ActionConstants.ADD_COLOR,
  id: '3315e1p5-3abl-0p523-30e4-8001l8yf2412',
  title: 'Big Blue',
  color: '#0000FF',
  timestamp: new Date().toString(),
});
store.dispatch({
  type: ActionConstants.RATE_COLOR,
  id: '2222e1p5-3abl-0p523-30e4-8001l8yf2222',
  rating: 5,
});
store.dispatch({
  type: ActionConstants.REMOVE_COLOR,
  id: '3315e1p5-3abl-0p523-30e4-8001l8yf2412',
});

// Local Storage Store

storeLocalStorage.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState());

  console.log('Local Storage Store current color count', storeLocalStorage.getState().colors.length);
  console.log('Local Storage Store current state', storeLocalStorage.getState());
});


storeLocalStorage.dispatch({
  type: ActionConstants.ADD_COLOR,
  id: '3315e1p5-3abl-0p523-30e4-8001l8yf2412',
  title: 'Party Pink',
  color: '#F142FF',
  timestamp: new Date().toString(),
});
storeLocalStorage.dispatch({
  type: ActionConstants.REMOVE_COLOR,
  id: '3315e1p5-3abl-0p523-30e4-8001l8yf2412',
});

// Action Creators

store.dispatch(rateColor('2222e1p5-3abl-0p523-30e4-8001l8yf2222', 5));
store.dispatch(removeColor('2222e1p5-3abl-0p523-30e4-8001l8yf2222'));
store.dispatch(addColor('Party Pink', '#F142FF'));
store.dispatch(sortColors('title'));

// Compose (various functions into a single function)

print(store.getState());
*/

/**
 * Redux (Middleware)
 */
import storeFactory from './components/12-StoreFactory';
import { addColor } from './components/11-Colors/creators';

const store = storeFactory(true);

store.dispatch(addColor('Party Pink', '#F142FF'));
store.dispatch(addColor('#FFFFFF', 'Bright White'));
store.dispatch(addColor('#00FF00', 'Lawn'));
store.dispatch(addColor('#0000FF', 'Big Blue'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
