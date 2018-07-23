import React, { Component } from "react";

const background = 'static/image/inx_building.png'


export default class JoinUsBackground extends Component {
  render() {
    return (
      <img
        className="background-container-joinUs"
        src={background}
      />
    );
  }
}
