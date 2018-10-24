import React, { Component } from 'react';

export default class Hexagon extends Component {
  render() {
    const { image, index } = this.props;
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 192 166.27687752661222"
        className={this.props.className}
      >
        <defs>
          <pattern id={`img${index}`} patternUnits="userSpaceOnUse" width={'100%'} height={'100%'}>
            <image
              xlinkHref={image}
              x="0"
              y="0"
              height={'100%'}
              width={'100%'}
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <path
          fill={`url(#img${index})`}
          d="M5.000000000000001 69.28203230275508Q0 60.6217782649107 5.000000000000001 51.96152422706632L30 8.660254037844386Q35 0 45 2L95 2Q105 0 110 8.660254037844386L135 51.96152422706632Q140 60.6217782649107 135 69.28203230275508L110 112.58330249197702Q105 121.2435565298214 95 121.2435565298214L45 121.2435565298214Q35 121.2435565298214 30 112.58330249197702Z"
          strokeWidth={4}
          stroke="#f05344"
        />
      </svg>
    );
  }
}
