import React, { PureComponent } from 'react';
const salmonStamp = 'static/image/salmon_stamp.png';

export default class OurVision extends PureComponent {
  render() {
    return (
      <div className="OurVision">
        <section className="OurVisionSectionA">
          <img src={salmonStamp} alt="salmonStamp" />
          <h2>Our Vision, Our Mission</h2>
          <button>White Paper</button>
        </section>
        <section className="OurVisionSectionB">
          <div />
          <h3>Lorem ipsum</h3>
          <p>
            Launching coin which is not controlled by anyone but by the bitcoin movements in real
            time. If somebody want to manipulate the price of Bitcoin (aka miners or investment
            firms) - welcome - we have very good alternative for you to do it and for us to win both
            sides. SalmonExchange will be the first low fees Exchange to serve the people with the
            most secured and transparent exchange using high level of compliance and standing with
            most possible regulation.
          </p>
        </section>
      </div>
    );
  }
}
