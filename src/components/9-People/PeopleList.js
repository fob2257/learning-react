import React from 'react';
import PropTypes from 'prop-types';

const PeopleList = (props) => {
  const { data: { results = [] }, count } = props;

  // console.log(props);

  return (
    <ol className='people-list'>
      {
        results.map((person, i) => {
          const { first, last } = person.name;

          return <li key={i}>{first} {last}</li>
        })
      }
    </ol>
  );
};

PeopleList.propTypes = {
  data: PropTypes.object.isRequired,
};

PeopleList.defaultProps = {
  data: {},
};

export default PeopleList;
