import React from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRatingStateless';

const Color = ({ title, color, rating = 0, onRate = f => f, onRemove = f => f }) => {
  return (
    <section className='color'>
      <h1>{title}</h1>
      <button onClick={onRemove}>X</button>
      <div className='color' style={{ backgroundColor: color }}></div>
      <div>
        <StarRating starsSelected={rating} onRate={onRate} />
      </div>
    </section>
  );
};

Color.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Color;
