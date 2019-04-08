import React from 'react';

const TimeLineDot = ({ position, txt }) => (
  <g transform={`translate(${position}, 0)`}>
    <circle cy={160} r={5} style={{ fill: 'blue' }}></circle>

    <text y={115}
      x={-95}
      transform='rotate(-45)'
      style={{ fontSize: '10px' }}>
      {txt}
    </text>
  </g>
);

export default TimeLineDot;
