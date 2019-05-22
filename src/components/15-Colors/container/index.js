import React from 'react';
import { connect } from 'react-redux';

import AddColorForm from '../ui/AddColorForm';
// import SortMenu from '../ui/SortMenu';
import ColorList from '../ui/ColorList';

import {
  addColor,
  sortColors,
  rateColor,
  removeColor,
} from '../../11-Colors/creators';
// import { sortFunction } from '../array-helpers';

export const NewColor = connect(
  null,
  dispatch => ({
    onNewColor: (title, color) =>
      dispatch(addColor(title, color)),
  })
)(AddColorForm);

// export const Menu = connect(
//   state => ({
//     sort: state.sort,
//   }),
//   dispatch => ({
//     onSelect: (sortBy) =>
//       dispatch(sortColors(sortBy)),
//   }),
// )(SortMenu);

const mapStateToProps = state =>
  ({
    // colors: [...state.colors].sort(sortFunction(state.sort)),
    colors: [...state.colors],
  });

const mapDispatchToProps = dispatch =>
  ({
    onRemove: (id) => {
      dispatch(removeColor(id));
    },
    onRate: (id, rating) => {
      dispatch(rateColor(id, rating));
    },
  });

export const Colors = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList);
