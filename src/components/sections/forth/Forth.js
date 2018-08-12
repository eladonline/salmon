import React, { Component } from 'react';
import AmazingParallax from 'parallax-js';

import { SideImgForthRect } from 'src/components/sections/forth/SideImg';

const background = 'static/image/slideFourPromo.png';

export default class ForthSection extends Component {
  componentDidMount() {
    const scene = document.getElementById('forth-mainCon-scene');
    const parallax = new AmazingParallax(scene, {
      relativeInput: true,
      scalarX: 5,
      scalarY: 5,
      frictionX: 0.015,
      frictionY: 0.015,
      pointerEvents: true
    });
    parallax.disable();
    setTimeout(() => {
      parallax.enable();
    }, 1000);
  }

  render() {
    return (
      <div className="main-container" id="forth-mainCon">
        <section className="text-mainCon">
          <SideImgForthRect>
            <div>
              <header>
                <h5 className="sub-headerForth traderColor">
                  <span>TRADING</span> INDEPENDENTLY?
                </h5>
                <h1 className="main-headerForth">
                  Trade Bigger with <br />Unlimited Opportunities
                </h1>
              </header>
              <div className="text-subCon">
                <div>
                  <div className="box boxForthA">
                    <div className="traderColor">1</div>
                    <div>
                      <p> Intuitive trading experience </p>
                      <p> throughout the platform </p>
                    </div>
                  </div>
                  <div className="box boxForthB">
                    <div className="traderColor">2</div>
                    <div>
                      <p>A fully licensed, secure </p>
                      <p>platform for cryptoexchange</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box boxForthC">
                    <div className="traderColor">3</div>
                    <div>
                      <p> Continuous, uninterrupted </p>
                      <p>trading operationality </p>
                    </div>
                  </div>
                  <div className="box boxForthD">
                    <div className="traderColor">4</div>
                    <div>
                      <p> Responsive 24/7 trader </p>
                      <p> customer support </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="forthButton forthButtonBehave"> Trader Registration </button>
            </div>
          </SideImgForthRect>
        </section>
        <img src={background} alt="side" />
      </div>
    );
  }
}
