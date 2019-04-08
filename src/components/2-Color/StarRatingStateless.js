import React from 'react';
import PropTypes from 'prop-types';

import './StarRating.css';
import { Star } from './StarRating';

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => {
  return (
    <div className='star-rating'>
      {
        [...Array(totalStars)].map((n, i) =>
          <Star key={i} selected={i < starsSelected} onClick={() => onRate(i + 1)} />
        )
      }
    </div>
  );
};

StarRating.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func,
};

StarRating.defaultProps = {
  starsSelected: 0,
  totalStars: 5,
  onRate: f => f,
};

export default StarRating;
