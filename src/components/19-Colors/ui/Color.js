import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { v4 } from 'uuid';
import { withRouter } from 'react-router-dom';

import StarRating from './StarRating';
// import TimeAgo from './TimeAgo';

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
    const {
      id,
      title,
      color,
      rating,
      timestamp,
      onRate,
      onRemove,
      history,
    } = this.props;

    console.log(this.props);

    return (
      <section className='color' style={this.style}>
        <h1
          ref='title'
          onClick={() => history.push(`/${id}`)} >
          {title}
        </h1>
        <button onClick={() => onRemove(id)}>
          <FaTrash />
        </button>
        <div
          className='color'
          style={{ backgroundColor: color }}
          onClick={() => history.push(`/${id}`)} >
        </div>
        {/* <TimeAgo timestamp={timestamp} /> */}
        <div>
          <StarRating starsSelected={rating} onRate={rating => onRate(rating)} />
        </div>
      </section>
    );
  };
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

export default withRouter(Color);
