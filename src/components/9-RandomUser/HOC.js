import React, { Component } from './node_modules/react';

const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        loading: false,
        loaded: false,
      };
    };

    componentWillMount() {
      this.setState({ loading: true });

      fetch(url)
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
            (loading) ?
              <div>Loading...</div> :
              <ComposedComponent
                {...this.props}
                {...this.state} />
          }
        </div>
      );
    };
  }

export default DataComponent;
