import React, { Component  } from "react";
import PropTypes from 'prop-types';


const aCurrencys = [
  { type: "ETH/USD", drop: 1.48, raise: null },
  { type: "ETH/EUR", drop: 3.48, raise: null },
  { type: "BCH/EUR", drop: 2.32, raise: null },
  { type: "BTC/GBP", drop: 5, raise: null },
  { type: "ETH/BTC", drop: 1.5, raise: null },
  { type: "BCH/BTC", drop: null, raise: 3.5 }
];

const CurrencyList = () => (
  <div>
    <span>elad</span>
    <span>tome</span>
    <span>yariv</span>
    <span>lorem</span>
    <span>ipsum</span>
    <span>torell</span>
    <span>travados</span>
    <span>angela</span>
    <span>rihana</span>
    <span>AKON</span>
    <span>troveny</span>
    <span>Arnold</span>
  </div>
);

export default class Homepage extends Component {
  listStriper(aProps) {
    return aProps.map(item => {
      return <div className="ci">item</div>;
    });
  }
  render() {
    return (
      <div className="curr-strip-Con">
        <div className="rotator" ref={e => (this.rotator = e)}>
          <div className="marquee1" ref={e => (this.marquee1 = e)}>
            <CurrencyList />
          </div>
          <div className="marquee2" ref={e => (this.marquee2 = e)}>
            <CurrencyList />
          </div>
          {/* <div className="marquee3" ref={e => (this.marquee3 = e)}>
            <CurrencyList />
          </div> */}
        </div>
      </div>
    );
  }
}


Homepage.defaultProps = {
  aCurrencys: aCurrencys
}
Homepage.PropTypes = {
  aCurrencys: PropTypes.array
}