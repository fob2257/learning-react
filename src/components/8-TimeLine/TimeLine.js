import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import Canvas from './Canvas';
import TimeLineDot from './TimeLineDot';

export const historicDatesForSkiing = [
  {
    year: 1879,
    event: "Ski Manufacturing Begins",
  },
  {
    year: 1882,
    event: "US Ski Club Founded",
  },
  {
    year: 1924,
    event: "First Winter Olympics Held",
  },
  {
    year: 1926,
    event: "First US Ski Shop Opens",
  },
  {
    year: 1932,
    event: "North America's First Rope Tow Spins",
  },
  {
    year: 1936,
    event: "First Chairlift Spins",
  },
  {
    year: 1949,
    event: "Squaw Valley, Mad River Glen Open",
  },
  {
    year: 1958,
    event: "First Gondola Spins",
  },
  {
    year: 1964,
    event: "Plastic Buckle Boots Available",
  },
];

class TimeLine extends Component {
  constructor(props) {
    const { data } = props;
    const times = d3.extent(data.map(d => d.year));
    const range = [50, 450];

    super(props);
    this.state = { data, times, range };
    this.scale = d3.scaleLinear().domain(times).range(range);
  };

  // componentDidMount() {
  //   let group;
  //   const { data, times, range } = this.state;
  //   const { target } = this.refs;
  //   const scale = d3.scaleLinear().domain(times).range(range);

  //   d3.select(target)
  //     .append('svg')
  //     .attr('height', 200)
  //     .attr('width', 500);

  //   const [targetChild] = target.children;

  //   group = d3.select(targetChild)
  //     .selectAll('g')
  //     .data(data)
  //     .enter()
  //     .append('g')
  //     .attr('transform', (d, i) => `translate(${scale(d.year)}, 0)`);

  //   group.append('circle')
  //     .attr('cy', 160)
  //     .attr('r', 5)
  //     .style('fill', 'blue');

  //   group.append('text')
  //     .text(d => `${d.year} - ${d.event}`)
  //     .style('font-size', 10)
  //     .attr('y', 115)
  //     .attr('x', -95)
  //     .attr('transform', 'rotate(-45)');
  // };

  render() {
    const { name } = this.props;
    const { data } = this.state;
    const { scale } = this;

    return (
      <div className='timeline'>
        <h1>{name} Timeline</h1>
        <Canvas>
          {
            data.map((d, i) =>
              <TimeLineDot position={scale(d.year)}
                txt={`${d.year} - ${d.event}`}></TimeLineDot>
            )
          }
        </Canvas>
      </div>
    );
  };
};

TimeLine.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

TimeLine.defaultProps = {
  name: '',
  data: [],
};

export default TimeLine;
