import React, { Component } from "react";
import CurrencyStrip from './currencyStrip'


const poster = "static/image/Inx_building.png";
const video = "static/videos/strip1_cover_video.mp4";

export default class Promo extends Component {
  render() {
    return (
      <React.Fragment>
        <video id="promoVid" poster={poster} autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
         <CurrencyStrip />
      </React.Fragment>
    );
  }
  s;
}
