import React, { Component } from "react";
import chart from "../../../../containers/Charts/chart.style";

const opportunity = "static/image/opportunity.png";
const standards = "static/image/standards.png";
const cryptotrade = "static/image/cryptotrade.png";

export default class SecondSection extends Component {
  render() {
    return (
      <div className="main-container" id="second-mainCon">
        <h1 id="second-header">
          <span className="second-header-first">Introducing</span>&nbsp;
          <span className="second-header-second">
            The New Regulation Standard
          </span>
          <br />
          <span className="second-header-third">
            For Cryptocurrency Exchange
          </span>
        </h1>
        <section className="iconsSection">
          {/*left*/}
          <div>
            <img className="opportunity" src={opportunity} alt="opportunity" />
            <div>
              <span>Volume and Opportunity</span>
              <p className="m-t-7">By combining institutions and</p>
              <p>independent traders, INX offers unique</p>
              <p>potential exponential profit opportunities</p>
            </div>
          </div>
          {/*center*/}
          <div>
            <img className="standards" src={standards} alt="standards" />
            <div>
              <span>Strictest Safety Standards</span>
              <p className="m-t-7">INX follows the highest safety and</p>
              <p>security standards, to protect you</p>
              <p>throughout your trade activity</p>
            </div>
          </div>
          {/*right*/}
          <div>
            <img className="cryptotrade" src={cryptotrade} alt="cryptotrade" />
            <div>
              <span>A Cryptotrade Full-Package</span>
              <p className="m-t-7">All your cryptotrade needs, in one</p>
              <p>reliable exchange, complete with full</p>
              <p>API integration</p>
            </div>
          </div>
        </section>
        {/* <section className='chartSection'>
          im a chart
        </section> */}
      </div>
    );
  }
}
