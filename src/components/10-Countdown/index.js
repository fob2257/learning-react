import React from 'react';
import ReactDOM from 'react-dom';

import { Countdown } from './View';
import { CountdownActions } from './Action';
import { CountdownDispatcher } from './Dispatcher';
import { CountdownStore } from './Store';

const appDispatcher = new CountdownDispatcher();
export const actions = CountdownActions(appDispatcher);
export const store = new CountdownStore(10, appDispatcher);

// const render = count =>
//   ReactDOM.render(<Countdown count={count} {...actions} />, document.getElementById('root'));

// store.on('TICK', () => render(store._count));
// store.on('RESET', () => render(store._count));
// render(store._count);
