import React, { Component } from "react";

const profile = "static/image/profile.png";

export default class SeventhSection extends Component {
  render() {
    return (
      <div className="main-container" id="seventh-mainCon">
        <div>
          <header>
            <h5>AN EXEPTIONAL TEAM</h5>
            <h1>
              Bringing Cryptotrade Into the Light <br /> with a Fully Regulated
              Exchange
            </h1>
          </header>
          <Text />
          <Card img={profile} />
        </div>
      </div>
    );
  }
}

const Text = () => (
  <p className="seventh-text">
    INX is led by an experienced and dedicated team of business, finance and{" "}
    <br />
    technology veterans with a shared vision of redefining the world of finance{" "}
    <br />
    and cryptotrading. Relying on a rich and vast experience in traditional
    trade <br /> as well as pioneering cryptotraders, INX leads the charge in
    regulated,<br /> high-volume cryptotrade.
  </p>
);

const Card = p => (
  <div className="seventh-card">
    <img src={p.img} alt="profile" />
    <section>
      <header>
        <h4>
          <span>David Weild</span> INX Director
        </h4>
        <h5>Former Vice President of NASDAQ</h5>
      </header>
      <p>
        The future of finance and financial institutions will feature <br />
        predominantly the world of cryptocurrencies, which will, in fact <br />{" "}
        already are, traded as securities.
      </p>
      <button>View All Advisors</button>
    </section>
  </div>
);
