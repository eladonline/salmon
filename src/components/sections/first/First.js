import React, { Component } from 'react';

export default class FirstSection extends Component {
  state = { in: false };
  componentDidMount() {
    this.setState({textTransition: true})
  }
  render() {
    return (
      <div className="main-container" id="first-mainCon">
        <div className="firstSection-spaceDiv" />
          <header id="sectionFirstHeader" className='animated fadeInUp firstSectionHeader'>
            <p>
              CRYPTOCURRENCY EXCHANGE <br />
          </p>
          <p>
            <span className="bigText">
                Trade Brighter. <br /> Invest in the <br /> Future of Finance
            </span>
          </p>
          <p className="d-flex flex-wrap">
            <span className="firstSection-umami">
                Start creating a brighter investment future with <br />
                INX's secure and efficient platform
            </span>
            <span>
              <button className="startTrading">Start Trading</button>
            </span>
          </p>
        </header>
      </div>
    );
  }
}

