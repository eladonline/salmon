import React, { Component } from "react";
import CurrencyStrip from "./currencyStrip";

const poster = "static/image/firstSection.png";
const video = "static/videos/strip1_cover_video.mp4";

export default class Promo extends Component {
  render() {
    return (
      <React.Fragment>

        <video
          className="animated fadeIn"
          style={{ backgroundImage: `url(${poster})` }}
          id="promoVid"
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />

        </video>
        <CurrencyStrip />
      </React.Fragment>
    );
  }
}
