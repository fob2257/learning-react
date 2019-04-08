import React, { Component } from 'react'
import PropTypes from 'prop-types';

export const data = {
  title: "Peanut Butter and Jelly",
  ingredients: "peanut butter, jelly, bread",
  steps: "spread peanut butter and jelly between bread",
};

class Summary extends Component {

  render() {
    const { ingredients, steps, title } = this.props;
    return (
      <div className='summary'>
        <h1>{title}</h1>
        <p>
          <span>{ingredients} Ingredients</span> | <span>{steps} Steps</span>
        </p>
      </div>
    );
  };
};

Summary.propTypes = {
  ingredients: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ?
      new Error('Summary title must be a string') :
      (props[propName].length > 20) ?
        new Error('Summary title is over 20 chars') : null
};

Summary.defaultProps = {
  ingredients: 0,
  steps: 0,
  title: 'untitled recipe',
}

export default Summary;
