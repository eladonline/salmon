import React, { Component } from 'react';

const background = 'static/image/inx_building.png';

export default class JoinUsBackground extends Component {
  render() {
    return (
      <div className="background-container-joinUs">
        <img src={background} alt="buildings" />
      </div>
    );
  }
}
