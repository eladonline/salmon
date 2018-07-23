import React from 'react';
import { Navbar } from 'react-bootstrap';


const BrandFunc = (p) => (
  <Navbar.Brand>
    <img src={p.image} alt="brand" />
  </Navbar.Brand>
);

export default BrandFunc;
