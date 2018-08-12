import React, { Component } from 'react';

const background = 'static/image/regulation.png';
const security = 'static/icons/security.png';
const finra = 'static/icons/finra.png';

const qualified = 'static/icons/qualified.png';
const capital = 'static/icons/capital.png';
const broker = 'static/icons/broker.png';
const world = 'static/icons/world.png';

export default class FifthSection extends Component {
  render() {
    const screenSize = window.screen.width;
    return (
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="main-container"
        id="fifth-mainCon"
      >
        <div id="fifth-subCon">
          <header>
            <h1 className="fifth-header">
              Bringing Cryptotrade Into the Light <br /> with a Fully Regulated Exchange
            </h1>
          </header>
          <div className="miniHeader fifth-sub-header"> INX IS OBTAINING: </div>
          <section className="fifth-sub-header-icons">
            <p>
              Full SEC compliance and recognition <br /> and 100% Finra compliance.
            </p>
            <img className="finra" src={finra} alt="finra" />
            <img className="security" src={security} alt="security" />
          </section>
          {screenSize > 1200 ? (
            <div className="boxes">
              <Broker />
              <Capital />
              <Qualified />
              <Worlds />
            </div>
          ) : (
            <div className="boxes">
              <ResponsiveBox>
                <Broker />
                <Capital />
              </ResponsiveBox>
              <ResponsiveBox>
                <Qualified />
                <Worlds />
              </ResponsiveBox>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const BoxStyle = arr => {
  const [width, height] = arr;
  return { width, height };
};

const Box = p => (
  <div className="fifth-box">
    <img style={BoxStyle(p.aStyle)} src={p.icon} alt="textBox" />
    {p.children}
  </div>
);

const Broker = () => (
  <Box aStyle={['44.7px', '51.7px']} icon={broker}>
    <div>
      <p>Broker dealer and </p>
      <p>alternative trading</p>
      <p>system licenses</p>
    </div>
  </Box>
);

const Capital = () => (
  <Box aStyle={['49.3px', '53px']} icon={capital}>
    <div>
      <p>Capital reserve and </p>
      <p>liquidity fund for</p>
      <p>24/7 cashout abilities</p>
    </div>
  </Box>
);
const Qualified = () => (
  <Box aStyle={['49px', '53px']} icon={qualified}>
    <div>
      <p>Qualified custodian</p>
      <p>services for safekeeping</p>
      <p> of cryptoassets</p>
    </div>
  </Box>
);
const Worlds = () => (
  <Box aStyle={['54px', '50px']} icon={world}>
    <div>
      <p>The world’s first F-1 </p>
      <p>prospectus with the SEC</p>
      <p> for the INX security token.</p>
    </div>
  </Box>
);

const ResponsiveBox = p => <div className="resp-fifth-box">{p.children}</div>;
