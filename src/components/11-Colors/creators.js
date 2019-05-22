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
  ({
    type: ActionConstants.ADD_COLOR,
    id: v4(),
    timestamp: new Date().toDateString(),
    title,
    color,
  });

export const sortColors = sortedBy =>
  (sortedBy === 'rating') ?
    ({
      type: ActionConstants.SORT_COLORS,
      sortBy: 'SORTED_BY_RATING',
    }) :
    (sortedBy === 'title') ?
      ({
        type: ActionConstants.SORT_COLORS,
        sortBy: 'SORTED_BY_TITLE',
      }) :
      ({
        type: ActionConstants.SORT_COLORS,
        sortBy: 'SORTED_BY_DATE',
      });
