import React from 'react';

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

export default ColorList;
