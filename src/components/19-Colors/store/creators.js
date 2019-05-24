import { v4 } from 'uuid';
import ActionConstants from './constants';

export const removeColor = id =>
  ({
    type: ActionConstants.REMOVE_COLOR,
    id,
  });

export const rateColor = (id, rating) =>
  ({
    type: ActionConstants.RATE_COLOR,
    id,
    rating,
  });

export const addColor = (title, color) =>
  (dispatch, getState) => {
    setTimeout(() =>
      dispatch({
        type: ActionConstants.ADD_COLOR,
        index: getState().colors.length + 1,
        id: v4(),
        timestamp: new Date().toDateString(),
        title,
        color,
        rating: 0,
      }), 2000);
  }
