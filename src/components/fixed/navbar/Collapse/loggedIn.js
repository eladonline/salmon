import React from 'react';
import { Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

const Items = () => (
  <Nav pullRight>
    <NavItem>im a link</NavItem> <NavItem>im a link</NavItem>{' '}
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
);

export default Items;
