import React, { PureComponent } from 'react';

const bit_coins = 'static/image/bit_coins.png';

export default class WhatsSalmon extends PureComponent {
  render() {
    return (
      <div className="WhatsSalmon">
        <section className="coins">
          <img src={bit_coins} alt="bit_coins" />
          <div className="overlay">
            <div className="bitCoin">
              <div> -1%</div>
              <div className="text-holder">
                <p className="light">Bitcoin</p>
                <p> -1% down</p>
              </div>
            </div>
            <div className="salmonCoin">
              <div> +3%</div>
              <div className="text-holder">
                <p className="light">SalmonCoin</p>
                <p className="salmonRed"> 3% up</p>
              </div>
            </div>
          </div>
        </section>
        <section className="text">
          <header>
            <div>
              <h2>What's</h2>
              <h1>SalmonCoin</h1>
            </div>
          </header>
          <p>
            SalmonCoin is the first blockchain based coin to be defined as affected coin opposite
            way fromrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui nulla
            pariatur. Excepteur sint occaecat cup.
          </p>
          <button>Read more</button>
        </section>
      </div>
    );
  }
}
