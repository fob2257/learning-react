import { compose } from 'redux';
import { connect } from 'react-redux';

import AddColorForm from '../ui/AddColorForm';
import ColorList from '../ui/ColorList';
import ColorDetails from '../ui/ColorDetails';

import {
  addColor,
  rateColor,
  removeColor,
} from '../store/creators';

const getFirstArrayItem = ([obj]) => obj;

const filterArrayById = (array, id) =>
  array.filter(item => item.id === id);

const findById = compose(getFirstArrayItem, filterArrayById);

export const Color = connect(
  (state, props) => findById(state.colors, props.match.params.id)
)(ColorDetails);

export const NewColor = connect(
  null,
  dispatch => ({
    onNewColor: (title, color) =>
      dispatch(addColor(title, color)),
  })
)(AddColorForm);

const sortColors = (colors = [], sortedBy) =>
  (sortedBy === 'rating') ?
    colors.sort((a, b) => b.rating - a.rating) :
    (sortedBy === 'title') ?
      colors.sort((a, b) => a.title.length - b.title.length) :
      colors.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

const mapStateToProps = (state, props) => {
  const { colors } = state;
  const { match } = props;

  return {
    colorsSorted: sortColors(colors, match.params.sort),
    colors,
  };
};

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
