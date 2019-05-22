import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddColorForm from './AddColorForm';
// import SortMenu from './SortMenu';
import ColorList from './ColorList';

import { store } from '../11-Colors/store';
// import { sortFunction } from '../array-helpers';

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
    const { colors, sort } = store.getState();
    // const sortedColors = [...colors].sort(sortFunction(sort));
    const sortedColors = [...colors];

    return (
      <div className='app'>
        {/* <SortMenu /> */}
        <AddColorForm />
        <ColorList colors={sortedColors} />
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
