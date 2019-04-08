import React, { Component } from 'react';

class HiddenMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: (props.hide) ? props.hide : true,
    };
  };

  componentWillReceiveProps(nextProps) {
    const { hide: hidden } = nextProps;

    this.setState({ hidden });
  };

  render() {
    const { children } = this.props;
    const { hidden } = this.state;

    return (
      <p>
        {
          (hidden) ? children.replace(/[a-zA-Z0-9]/g, 'x') : children
        }
      </p>
    );
  };
};

export default HiddenMessage;
