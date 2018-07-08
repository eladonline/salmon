import React from "react";
import { Navbar } from "react-bootstrap";

const brandImg = "static/icons/logo.png";

const BrandFunc = () => (
  <Navbar.Brand>
    <img src={brandImg} alt="brand" />
  </Navbar.Brand>
);

export default BrandFunc;
