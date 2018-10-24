import React, { PureComponent } from 'react';
const laptop = 'static/image/laptop_security.png';
const chart = 'static/image/chart.png';
const opacityS = 'static/image/opacity_s.png';

export default class InvestrosProtection extends PureComponent {
  render() {
    return (
      <div className="InvestrosProtection">
        <section className="investrosProtection-sectionA">
          <img src={laptop} alt="laptop" />
          <div>
            <h1>Investors Protection System</h1>
            <h3>SalmonCoin ICO is the first ICO project which is protecting its investors.</h3>
          </div>
        </section>
        <p>
          SalmonCoin ICO is the first ICO project which is protecting its investors. As we want the
          project success we want our investors to know that we are here to protect their
          investment. We created a feature built in the Smart Contract giving you as investor in
          SalmonCoin ICO to get part of the investment back in 12 month from investment day. Our
          project and goals will use the raised funds as following:
        </p>
        <section className="investrosProtection-sectionB">
          <img className="chart" src={chart} alt="chart" />
          <div className="money-tickets">
            <Ticket value={20} text={'bla bla bla'} sum={{ low: '0', high: '200,000' }} />
            <Ticket value={40} text={'bla bla bla'} sum={{ low: '0', high: '200,000' }} />
            <Ticket value={20} text={'bla bla bla'} sum={{ low: '0', high: '200,000' }} />
            <Ticket value={30} text={'bla bla bla'} sum={{ low: '0', high: '200,000' }} />
          </div>
        </section>
      </div>
    );
  }
}

const Ticket = p => (
  <section>
    <header>
      <h3>{p.value}%</h3> <img src={opacityS} alt="opacityS" />
    </header>
    <div>
      <p>{p.text}</p>
      <div>
        ${p.sum.low} - ${p.sum.high}
      </div>
    </div>
  </section>
);
