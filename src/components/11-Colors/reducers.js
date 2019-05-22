import ActionConstants from './constants';

export const color = (state = {}, action) => {
  switch (action.type) {
    case ActionConstants.ADD_COLOR: {
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        timestamp: action.timestamp,
        rating: 0,
      };
    }

    case ActionConstants.RATE_COLOR: {
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          rating: action.rating,
        };
    }

    default: { return state; }
  }
};

export const colors = (state = [], action) => {
  switch (action.type) {
    case ActionConstants.ADD_COLOR: {
      return [
        ...state,
        color({}, action),
      ];
    }

    case ActionConstants.RATE_COLOR: {
      return state.map(c => color(c, action));
    }

    case ActionConstants.REMOVE_COLOR: {
      return state.filter(c => c.id !== action.id);
    }

    default: { return state; }
  }
};

export const sort = (state = 'SORTED_BY_DATE', action) => {
  switch (action.type) {
    case ActionConstants.SORT_COLORS: {
      return action.sortBy;
    }

    default: { return state; }
  }
};
