import React, { Component } from "react";
import FirstSection from "src/components/sections/first/First";
import SecondSection from "src/components/sections/second/Second";
import Promo from "src/components/sections/first/Promo";
import Navbar from "src/components/fixed/navbar/";
import { Parallax, ParallaxLayer } from "react-spring";

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Parallax pages={2}>
          {/*first section*/}
          <ParallaxLayer offset={0} speed={0.5}>
            <Promo />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <FirstSection promo={<Promo />} />
          </ParallaxLayer>
          {/*second section*/}
          <ParallaxLayer offset={1} speed={1}>
            <SecondSection />
          </ParallaxLayer>
        </Parallax>
      </React.Fragment>
    );
  }
}
