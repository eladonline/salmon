import React, { Component } from "react";
import { data } from "../../../../containers/Charts/reactChart2/components/horizontalBar/horizontalConfig";

const background = "static/image/slideThreePromo.png";
export default class ThirdSection extends Component {
  render() {
    return (
      <div className="main-container" id="third-mainCon">
        <img src={background} alt="" />
        <section className="text-mainCon">
          <div>
            <header>
              <h5>
                <span>TRADING AS AN</span> INSTITUTION?
              </h5>
              <h1>
                Your Bridge into <br />the World of Crypto
              </h1>
            </header>
            <div className="text-subCon">
              <div>
                <div className="box">
                  <div>1</div>
                  <div>
                    <p> The only licensed platform for the </p>
                    <p> trade of security, utility tokens, as </p>
                    <p> well as cryptocurrency </p>
                  </div>
                </div>
                <div className="box">
                  <div>2</div>
                  <div>
                    <p>Both capital reserve and </p>
                    <p>liquidity fund for cashout</p>
                    <p>abilities anytime</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="box">
                  <div>3</div>
                  <div>
                    <p> Combining regulated and </p>
                    <p> unregulated crypto with </p>
                    <p> fiat currencies </p>
                  </div>
                </div>
                <div className="box">
                  <div>4</div>
                  <div>
                    <p> Full API integration as well as </p>
                    <p> high frequency trade support </p>
                    <p> 24/7 for all institutional needs </p>
                  </div>
                </div>
              </div>
            </div>

            <button> Institutional Registration </button>
          </div>
        </section>
      </div>
    );
  }
}
