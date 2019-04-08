import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRating';

class Color extends Component {
  componentWillMount() {
    this.style = { backgroundColor: '#CCC' };
  };

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;

    return rating !== nextProps.rating;
  };

  componentWillUpdate(nextProps) {
    const { title, rating } = this.props;

    this.style = null;
    // this.refs.title.style.backgroundColor = 'red';
    // this.refs.title.style.color = 'white';

    alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
  };

  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;

    const status = (rating > prevProps.rating) ? 'better' : 'worse';
    // this.refs.title.style.backgroundColor = '';
    // this.refs.title.style.color = 'black';

    console.log(`${title} is getting ${status}`);
  };

  render() {
    const { title, color, rating, onRate, onRemove } = this.props;
    return (
      <section className='color' style={this.style}>
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className='color' style={{ backgroundColor: color }}></div>
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    );
  };
};

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

Color.defaultProps = {
  title: '',
  color: '#000000',
  rating: 0,
  onRate: f => f,
  onRemove: f => f,
};

export default Color;
