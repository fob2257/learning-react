import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import StarRating from './StarRating';
// import TimeAgo from './TimeAgo';
import { rateColor, removeColor } from '../11-Colors/creators';

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
    const { id, title, color, rating, timestamp } = this.props;
    const { store } = this.context;

    return (
      <section className='color' style={this.style}>
        <h1>{title}</h1>
        <button onClick={() => store.dispatch(removeColor(id))}>X</button>
        <div className='color' style={{ backgroundColor: color }}></div>
        {/* <TimeAgo timestamp={timestamp} /> */}
        <div>
          <StarRating starsSelected={rating} onRate={rating => store.dispatch(rateColor(id, rating))} />
        </div>
      </section>
    );
  };
};

Color.contextTypes = {
  store: PropTypes.object,
};

Color.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

Color.defaultProps = {
  id: v4(),
  title: '',
  color: '#000000',
  rating: 0,
};

export default Color;
