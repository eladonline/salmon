import React from 'react';
import { Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Items = p => (
  <Nav pullRight>
    <NavItem className="navItem">
      About <span className="navbarHighlight" />
    </NavItem>
    <NavItem className="navItem">
      Investors Protection System <span className="navbarHighlight" />
    </NavItem>
    <NavItem className="navItem">
      White Paper <span className="navbarHighlight" />
    </NavItem>
    <NavItem className="navItem">
      FAQ <span className="navbarHighlight" />
    </NavItem>
    <NavItem className="navItem navItem-last">
      Token sale <span className="navbarHighlight" />
    </NavItem>
    <NavDropdown eventKey={3} id="basic-nav-dropdown" title={'EN'}>
      <MenuItem eventKey={3.1}>lang</MenuItem>
      <MenuItem eventKey={3.2}>lang</MenuItem>
      <MenuItem eventKey={3.3}>lang</MenuItem>
      <MenuItem eventKey={3.4}>lang</MenuItem>
    </NavDropdown>
  </Nav>
);

export default Items;

Items.defaultProps = {
  user: 'unsigned',
  invers: true
};

Items.propTypes = {
  user: PropTypes.string,
  invers: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
