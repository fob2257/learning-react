import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DataComponentFunc = (ComposedComponent, url) => {
  class DataComponentClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false,
      };
    };

    componentWillMount() {
      const { count } = this.props;

      this.setState({ loading: true });

      fetch(`${url}?results=${count}`)
        .then(response => response.json())
        .then(data => this.setState({
          loaded: true,
          loading: false,
          data,
        }));
    };

    render() {
      const { loading } = this.state;

      return (
        <div className='data-component'>
          {
            (loading) ? <div>Loading...</div> :
              <ComposedComponent {...this.state} {...this.props} />
          }
        </div>
      );
    };
  };

  DataComponentClass.propTypes = {
    count: PropTypes.number,
  };

  DataComponentClass.defaultProps = {
    count: 1,
  };

  return DataComponentClass;

}

export default DataComponentFunc;
