import React from 'react';
import PropTypes from 'prop-types';

import Color from './Color'

const ColorList = ({ colors, onRate, onRemove }) => {
  return (
    <div className='color-list'>
      {
        (colors.length === 0) ?
          <p>No colors listed. Add a new one.</p> :
          colors.map(color =>
            <Color
              key={color.id}
              {...color}
              onRate={(rating) => onRate(color.id, rating)}
              onRemove={() => onRemove(color.id)}
            />
          )
      }
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

ColorList.defaultProps = {
  colors: [],
  onRate: f => f,
  onRemove: f => f,
};

export default ColorList;
