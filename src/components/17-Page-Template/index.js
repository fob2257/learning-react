import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  Home,
  About,
  Contact,
  Events,
  Products,
  Whoops404,
} from './pages';

export const AppRouter = () =>
  (
    <HashRouter>
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route path='/about' component={About} ></Route>
          <Redirect from='/history' to='/about/history'></Redirect>
          <Redirect from='/services' to='/about/services'></Redirect>
          <Redirect from='/location' to='/about/location'></Redirect>
          <Route path='/events' component={Events}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route component={Whoops404} ></Route>
        </Switch>
      </div>
    </HashRouter>
  );
