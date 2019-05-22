import React from 'react';
import ReactDOM from 'react-dom';

import App from './AppColor';
import storeFactory from '../12-StoreFactory';

const store = storeFactory();

const render = () =>
  ReactDOM.render(<App store={store} />, document.getElementById('root'));

store.subscribe(render);

render();
