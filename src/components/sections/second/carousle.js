import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const opportunity = "static/image/opportunity.png";
const standards = "static/image/standards.png";
const cryptotrade = "static/image/cryptotrade.png";

const Opportunity = p => (
  <div>
    <div>
      <div className="miniHeaderCarousle">Volume and Opportunity</div>
      <p className="m-t-7">By combining institutions and</p>
      <p>independent traders, INX offers unique</p>
      <p>potential exponential profit opportunities</p>
    </div>
  </div>
);
const Standards = p => (
  <div>
    <div>
      <div className="miniHeaderCarousle">Strictest Safety Standards</div>
      <p className="m-t-7">INX follows the highest safety and</p>
      <p>security standards, to protect you</p>
      <p>throughout your trade activity</p>
    </div>
  </div>
);
const Cryptotrade = p => (
  <div>
    <div>
      <div className="miniHeaderCarousle">A Cryptotrade Full-Package</div>
      <p className="m-t-7">All your cryptotrade needs, in one</p>
      <p>reliable exchange, complete with full</p>
      <p>API integration</p>
    </div>
  </div>
);
export default class ThreeBlueIcons extends Component {
  render() {
    return (
      //   <section className="iconsSection">
      <div id="carousle_main_container">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <img
              // width="80%"
              alt="profile"
              src={opportunity}
            />
            <Opportunity />
          </Carousel.Item>
          <Carousel.Item>
            <img
              // width="80%"
              alt="profile"
              src={standards}
            />
            <Standards />
          </Carousel.Item>
          <Carousel.Item>
            <img
              // width="80%"
              alt="profile"
              src={cryptotrade}
            />
            <Cryptotrade />
          </Carousel.Item>
        </Carousel>
      </div>
      //   </section>
    );
  }
}
