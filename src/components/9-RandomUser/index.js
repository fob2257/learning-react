import React from 'react';

import DataComponent from './HOC.js';

const PeopleList = ({ data }) =>
  <ol className='people-list'>
    {
      data.results.map(({ name: { first, last } }, i) =>
        <li key={i}>{`${first} ${last}`}</li>
      )
    }
  </ol>

const RandomUser = DataComponent(
  PeopleList,
  'https://randomuser.me/api/'
);

export default RandomUser;
