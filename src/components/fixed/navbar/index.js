import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Brand from './Brand/Brand';
import Login from './Collapse/login';
import LoggedIn from './Collapse/loggedIn';
// import { setLastUserInStorage } from 'src/logic/redux/auth/workers/persist';
import PropTypes from 'prop-types';

const brandImgDarkBlue = 'static/icons/logoDarkBlue.png';

export default class MainNavbar extends Component {
  /**
   *
   * @param {number} prevProps.offset
   * @param {number} prevState.offset
   * @summary detect change in the invers prop
   */
  /**
   *
   * @param {string} user
   * @return login or loggedIn state to view
   */
  isLoggedIn(user) {
    // 'Unsigned' Linked to private Layout
    return user ? <LoggedIn user={user} /> : <Login />;
  }

  render() {
    return (
      <Navbar collapseOnSelect id="mainNavbar">
        <Navbar.Header>
          <Brand image={brandImgDarkBlue} />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>{this.isLoggedIn('elad+1@committed.co.il')}</Navbar.Collapse>
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
