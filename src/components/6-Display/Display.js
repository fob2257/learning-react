import React, { Children } from 'react';

const findChild = (children, child) =>
  Children.toArray(children)
    .filter(c => c.type === child)[0];

const WhenTruthy = ({ children }) => Children.only(children);

const WhenFalsy = ({ children }) => Children.only(children);

const Display = ({ ifTruthy, children }) =>
  (ifTruthy) ?
    findChild(children, WhenTruthy) :
    findChild(children, WhenFalsy);

const age = 21;

const IndexDisplay = () => {
  return (
    <Display ifTruthy={age >= 21}>
      <WhenTruthy>
        <h1>You can enter</h1>
      </WhenTruthy>
      <WhenFalsy>
        <h1>Beat it kid</h1>
      </WhenFalsy>
    </Display>
  );
};

export default IndexDisplay;
