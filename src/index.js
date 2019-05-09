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
import RandomUser from './components/9-RandomUser';
ReactDOM.render(<RandomUser count={10} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
