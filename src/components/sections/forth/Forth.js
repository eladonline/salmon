import React, { Component } from "react";

const background = "static/image/slideFourPromo.png";

export default class ForthSection extends Component {
  render() {
    return (
      <div className="main-container" id="forth-mainCon">
        <section className="text-mainCon">
          <div>
            <header>
              <h5 className='sub-headerForth traderColor'>
                <span>TRADING</span> INDEPENDENTLY?
              </h5>
              <h1 className='main-headerForth'>
                Trade Bigger with <br />Unlimited Opportunities
              </h1>
            </header>
            <div className="text-subCon">
              <div>
                <div className="box boxForthA">
                  <div className='traderColor'>1</div>
                  <div>
                    <p> Intuitive trading experience </p>
                    <p> throughout the platform </p>
                  </div>
                </div>
                <div className="box boxForthB">
                  <div className='traderColor'>2</div>
                  <div>
                    <p>A fully licensed, secure </p>
                    <p>platform for cryptoexchange</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="box boxForthC">
                  <div className='traderColor'>3</div>
                  <div>
                    <p> Continuous, uninterrupted </p>
                    <p>trading operationality </p>
                  </div>
                </div>
                <div className="box boxForthD">
                  <div className='traderColor'>4</div>
                  <div>
                    <p> Responsive 24/7 trader </p>
                    <p> customer support </p>
                  </div>
                </div>
              </div>
            </div>

            <button className='forthButton forthButtonBehave'> Trader Registration </button>
          </div>
        </section>
        <img src={background} alt="side" />
      </div>
    );
  }
}
