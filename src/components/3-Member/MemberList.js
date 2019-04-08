import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Member from './Member';

const getFakeMembers = count => new Promise((resolve, reject) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`;

  const request = new XMLHttpRequest();
  request.open('GET', api);
  request.onload = () => (request.status === 200) ?
    resolve(JSON.parse(request.response).results) :
    reject(Error(request.statusText));
  request.onerror = error => reject(error);
  request.send();
});

class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      loading: false,
      error: null,
    };
  };

  componentWillMount() {
    this.setState({ loading: true });
    const { count } = this.props;

    getFakeMembers(count)
      .then(members => this.setState({ members, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  };

  componentWillUpdate() {
    console.log('updating lifecycle');
  };

  render() {
    const { members, loading, error } = this.state;

    return (
      <div className='member-list'>
        {
          (loading) ? <span>Loading...</span> :
            (!members.length) ? <span>0 members loaded</span> :
              members.map((m, i) => <Member key={i} {...m} />)
        }
        {(error) ? <p>Error loading members</p> : ''}
      </div>
    );
  };
};

MemberList.propTypes = {
  count: PropTypes.number,
};

MemberList.defaultProps = {
  count: 5,
};

export default MemberList;
