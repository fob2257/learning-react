import React from 'react';
import PropTypes from 'prop-types';

import Color from './Color'
import { rateColor, removeColor } from '../11-Colors/creators';

const ColorList = ({ colors }) => {

  return (
    <div className='color-list'>
      {
        (colors.length === 0) ?
          <p>No colors listed. Add a new one.</p> :
          colors.map(color =>
            <Color
              key={color.id}
              {...color}
              onRate={(rating) => store.dispatch(rateColor(color.id, rating))}
              onRemove={() => store.dispatch(removeColor(color.id))}
            />
          )
      }
    </div>
  );
};

ColorList.propTypes = {
  store: PropTypes.object,
};

export default ColorList;
