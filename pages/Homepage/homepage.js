import React, { Component } from 'react';

import MarketRevolution from 'src/components/sections/marketRevolution';
import WhatsSalmon from 'src/components/sections/whatsSalmon';
import HowItWorks from 'src/components/sections/howItWorks';
import WhySalmon from 'src/components/sections/whySalmon';
import OurVision from 'src/components/sections/ourVision';
import MeetOurTeam from 'src/components/sections/meetOurTeam';
import InvestorsProtection from 'src/components/sections/investorsProtection';
import TokenSale from 'src/components/sections/tokenSale';

const swimSalmon = 'static/image/swim_salmon.png';
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <img className="swimSalmon" src={swimSalmon} alt="swimSalmon" />
        <MarketRevolution />
        <WhatsSalmon />
        <HowItWorks />
        <WhySalmon />
        <OurVision />
        <MeetOurTeam />
        <InvestorsProtection />
        <TokenSale />
      </div>
    );
  }
}
