import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Brand from './Brand/Brand';
import Login from './Collapse/login';
import LoggedIn from './Collapse/loggedIn';
// import { setLastUserInStorage } from 'src/logic/redux/auth/workers/persist';
import PropTypes from 'prop-types';

const brandImgWhite = 'static/icons/logoWhite.png';
const brandImgBlue = 'static/icons/logoBlue.png';
const brandImgDarkBlue = 'static/icons/logoDarkBlue.png';

export default class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { brandActive: false, invers: true };
    this.isinvers = this.isinvers.bind(this);
  }
  /**
   *
   * @param {number} prevProps.offset
   * @param {number} prevState.offset
   * @summary detect change in the invers prop
   */
  componentDidUpdate(prevProps, prevState) {
    const { offset } = this.props;
    if (prevProps.offset !== offset) {
      this.setState({ invers: this.isinvers(offset) });
    }
  }
  /**
   *
   * @param {string} user
   * @return login or loggedIn state to view
   */
  isLoggedIn(user) {
    // 'Unsigned' Linked to private Layout
    return user ? (
      <LoggedIn user={user} invers={this.state.invers} />
    ) : (
      <Login />
    );
  }
  isinvers(offset) {
    switch (offset) {
      case 0:
        return true;
      case 1:
        return false;
      default:
        true;
    }
  }
  brandStyle(invers, active) {
    if (invers) return brandImgWhite;
    return active ? brandImgDarkBlue : brandImgBlue;
  }
  render() {
    return (
      <Navbar
        collapseOnSelect
        onMouseOver={() => {
          this.setState({ brandActive: true })
        }}
        onMouseOut={() => {
          this.setState({ brandActive: false })
        }}
      >
        <Navbar.Header>
          <Brand image={this.brandStyle(this.state.invers, this.state.brandActive)} />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {this.isLoggedIn('elad+1@committed.co.il')}
        </Navbar.Collapse>
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
