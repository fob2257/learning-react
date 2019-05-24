import React from 'react';
import PropTypes from 'prop-types';

import './StarRating.css';

export const Star = ({ selected = false, onClick = f => f }) => {
  return (
    <div className={(selected) ? 'star selected' : 'star'} onClick={onClick}>
    </div>
  );
};

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

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
