import React, { Component } from 'react';
import { v4 } from 'uuid';

import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

export const logColor = (title, color) => console.log(`New color: ${title} | ${color}`);

class IndexColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          id: "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
          title: "ocean at dusk",
          color: "#00c4e2",
          rating: 5,
        },
        {
          id: "83c7ba2f-7392-4d7d-9e23-35adbe186046",
          title: "lawn",
          color: "#26ac56",
          rating: 3,
        },
        {
          id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
          title: "bright red",
          color: "#ff0000",
          rating: 0,
        },
      ],
    };

    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  };

  addColor(title, color) {
    const { colors } = this.state;

    this.setState({
      colors: [
        ...colors,
        {
          id: v4(),
          title,
          color,
          rating: 0,
        },
      ],
    });
  };

  rateColor(id, rating) {
    const { colors: stateColors } = this.state;

    const colors = stateColors.map((color) => (color.id !== id) ? color : { ...color, rating });

    this.setState({ colors });
  };

  removeColor(id) {
    const { colors: stateColors } = this.state;

    const colors = stateColors.filter(color => color.id !== id);

    this.setState({ colors });
  };

  render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;

    return (
      <div className='app'>
        <AddColorForm onNewColor={addColor} />
        <ColorList
          colors={colors}
          onRate={rateColor}
          onRemove={removeColor}
        />
      </div>
    );
  };
};

export default IndexColor;
