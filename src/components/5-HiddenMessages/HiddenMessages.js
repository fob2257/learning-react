import React, { Component } from 'react';

import HiddenMessage from './HiddenMessage';

class HiddenMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'The crow crows after midnight',
        'Bring a watch and dark clothes to the spot',
        'Jericho Jericho Go',
      ],
      showing: -1,
    };
  };

  componentWillMount() {
    this.intervalId = setInterval(() => {
      let { showing, messages } = this.state;
      showing += 1;
      showing = (showing >= messages.length) ? -1 : showing;

      this.setState({ showing });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  };

  render() {
    const { messages, showing } = this.state;

    return (
      <div className='hidden-messages'>
        {
          messages.map((message, i) =>
            <HiddenMessage key={i} hide={(i !== showing)}>
              {message}
            </HiddenMessage>
          )
        }
      </div>
    );
  };
};

export default HiddenMessages;
