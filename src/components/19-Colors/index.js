import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import storeFactory from './store';
import AppColor from './AppColor';

const store = storeFactory();

export const AppRouter = () =>
  (
    <Provider store={store}>
      <HashRouter>
        <AppColor />
      </HashRouter>
    </Provider>
  );
