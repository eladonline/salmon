import React from 'react';
import { Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

const iconBlack = 'static/icons/hamburgerBlack.png';
const iconWhite = 'static/icons/hamburgerWhite.png';

const Items = p => (
  <Nav pullRight>
    <NavItem className="startTradingNav" data-invers={p.invers}>
      Start Trading
    </NavItem>{' '}
    <NavItem className="loginNav" data-invers={p.invers}>
      Log-in
    </NavItem>{' '}
    <NavDropdown
      eventKey={3}
      id="basic-nav-dropdown"
      title={<img src={p.invers ? iconWhite : iconBlack} alt="icon" />}
      noCaret
    >
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>Separated link</MenuItem>
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
