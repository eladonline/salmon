import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const LoginItems = p => (
  <Nav pullRight>
    <NavItem onClick={p.handleClickNavItem} className="navItem">
      About <span data-highlight={true} className="navbarHighlight" />
    </NavItem>
    <NavItem onClick={p.handleClickNavItem} className="navItem">
      Investors Protection System <span className="navbarHighlight" data-highlight={false} />
    </NavItem>
    <NavItem onClick={p.handleClickNavItem} className="navItem">
      White Paper <span data-highlight={false} className="navbarHighlight" />
    </NavItem>
    <NavItem onClick={p.handleClickNavItem} className="navItem">
      FAQ <span data-highlight={false} className="navbarHighlight" />
    </NavItem>
    <NavItem onClick={p.handleClickNavItem} className="navItem navItem-last">
      Token sale <span data-highlight={false} className="navbarHighlight" />
    </NavItem>
    <NavItem className="navButton-login">Login</NavItem>
    <NavItem className="navButton-register">Register</NavItem>
    <NavDropdown eventKey={3} id="basic-nav-dropdown" title={'EN'}>
      <MenuItem eventKey={3.1}>lang</MenuItem>
      <MenuItem eventKey={3.2}>lang</MenuItem>
      <MenuItem eventKey={3.3}>lang</MenuItem>
      <MenuItem eventKey={3.4}>lang</MenuItem>
    </NavDropdown>
  </Nav>
);

export default LoginItems;
