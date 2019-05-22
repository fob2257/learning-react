import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Menu, NewColor, Colors } from './container'

import { store } from '../11-Colors/store';

class AppColor extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  };

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  };

  componentWillUnmount() {
    this.unsubscribe();
  };

  render() {
    return (
      <div className='app'>
        <Menu />
        <NewColor />
        <Colors />
      </div>
    );
  };
};

AppColor.propTypes = {
  store: PropTypes.object.isRequired,
};

AppColor.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default AppColor;
