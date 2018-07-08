import React, { Component } from "react";
import FirstSection from "src/components/sections/first/First";
import Promo from 'src/components/sections/first/Promo'
import Navbar from 'src/components/fixed/navbar/'

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Promo />
        <FirstSection />
      </React.Fragment>
    );
  }
}
