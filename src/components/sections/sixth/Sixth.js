import React, { Component } from "react";

export default class SixthSection extends Component {
  render() {
    const screenSize = window.screen.width;
    return (
      <div
        className="main-container"
        id="sixth-mainCon"
      >
        <div>
          <h1>Pioneering The New Tokenized Economy</h1>
          <section>
            <Financing />
            <Security />
            <Paving />
          </section>
        </div>
      </div>
    );
  }
}

const TextBox = p => (
  <div className="sixth-box">
    <div className="line" />
    <p>{p.children}</p>
  </div>
);
const Financing = () => (
  <TextBox>
    <h5>
      Financing Potential Beyond <br /> Traditional Markets
    </h5>
    Regulated Security tokens embody an <br /> untapped potential by changing
    the economics <br /> of capital formation for business and unlocking <br />
    secondary liquidity and value for investors.
  </TextBox>
);
const Security = () => (
  <TextBox>
    <h5>
      A Security Token Exchange <br /> That Benefits Everyone
    </h5>
    INX presents the primary exchange where <br /> issuers can list and
    institutional investors <br /> trade security tokens safely.
  </TextBox>
);
const Paving = () => (
  <TextBox>
    <h5>
      Paving A <br /> Tokenized Path
    </h5>
    By filing the first F1 prospectus with the SEC, INX <br /> has charted a
    path for the general public to join <br /> the potential success in
    tokenization and benefits <br /> from the exchange’s profit shares.
  </TextBox>
);
