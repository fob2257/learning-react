import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './AppColor';
import storeFactory from '../12-StoreFactory';

const store = storeFactory();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
