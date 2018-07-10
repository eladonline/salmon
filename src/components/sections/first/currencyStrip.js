import React, { Component } from "react";
import PropTypes from "prop-types";

const [caretDown , caretUp] = [<i className="fas fa-caret-down"/>,<i className="fas fa-caret-up"/>]

const aCurrencys = [
  { type: "ETH/USD", drop: 1.48, raise: null },
  { type: "ETH/EUR", drop: 3.48, raise: null },
  { type: "BCH/EUR", drop: 2.32, raise: null },
  { type: "BTC/GBP", drop: 5, raise: null },
  { type: "ETH/BTC", drop: 1.5, raise: null },
  { type: "BCH/BTC", drop: null, raise: 3.5 }
];

const CurrencyList = p => (
    <span className='currencyMain'> 
      <span className='currencyText'>{p.data.type}</span> &nbsp;
      <span className='currencyCaret'>{p.data.drop !== null ?caretDown : caretUp}</span> &nbsp;
      <span className='currencynumber'>{p.data.drop !== null ?p.data.drop : p.data.raise}</span>
     </span>
  );

export default class Homepage extends Component {
  listStriper(aProps) {
    return (
      <div>
        {aProps.map( (oCurrencyData,i) => {
          return <CurrencyList key={`CurrencyList__${i}`} data={oCurrencyData}/>;
        })}
      </div>
    );
  }
  render() {
    console.log(this.props)
    return (
      <div className="curr-strip-Con">
        <div className="rotator" ref={e => (this.rotator = e)}>
          <div className="marquee1" ref={e => (this.marquee1 = e)}>
            {this.listStriper(this.props.aCurrencys)}
          </div>
          <div className="marquee2" ref={e => (this.marquee2 = e)}>
            {this.listStriper(this.props.aCurrencys)}
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
};
Homepage.propTypes = {
  aCurrencys: PropTypes.array
};
