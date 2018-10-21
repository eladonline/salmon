import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Brand from './Brand/Brand';
import NotLoggedIn from './Collapse/notLoggedIn';
import LoggedIn from './Collapse/loggedIn';
// import { setLastUserInStorage } from 'src/logic/redux/auth/workers/persist';
import { nodeToArray } from 'src/components/helpers/helpers';
import PropTypes from 'prop-types';

const brand = 'static/icons/logo.png';

export default class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.handleClickNavItem = this.handleClickNavItem.bind(this);
  }
  /**
   * @param {number} prevProps.offset
   * @param {number} prevState.offset
   * @summary detect change in the invers prop
   */
  /**
   *
   * @param {string} user
   * @return login or loggedIn state to view
   */
  isLoggedIn(user, handleClickNavItem) {
    // 'Unsigned' Linked to private Layout
    return user ? (
      <LoggedIn user={user} />
    ) : (
      <NotLoggedIn handleClickNavItem={handleClickNavItem} />
    );
  }
  handleClickNavItem(e) {
    const { target } = e;
    const { parentNode } = target;
    const itemsList = nodeToArray(parentNode.parentNode.querySelectorAll('.navItem'));
    itemsList.forEach(item => {
      const span = item.querySelector('.navbarHighlight');
      if (item !== parentNode) {
        if (span.getAttribute('data-highlight') === 'true') {
          span.setAttribute('data-highlight', 'false');
        }
      } else {
        span.setAttribute('data-highlight', 'true');
      }
    });
  }
  render() {
    return (
      <Navbar collapseOnSelect id="mainNavbar">
        <Navbar.Header>
          <Brand image={brand} />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>{this.isLoggedIn(false, this.handleClickNavItem)}</Navbar.Collapse>
      </Navbar>
    );
  }
}

MainNavbar.defaultProps = {
  login: true,
  offset: 0
};

MainNavbar.propTypes = {
  login: PropTypes.bool,
  offset: PropTypes.number
};
