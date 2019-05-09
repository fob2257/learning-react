import React from 'react';

export const Countdown = ({ count, tick, reset }) => {
  if (count) {
    setTimeout(() => tick(), 1000);
  }

  return (count) ?
    <h1>{count}</h1> :
    <div onClick={() => reset(10)}>
      <span>Celebrate!!!</span>
      <span>(click to restart)</span>
    </div>
};
