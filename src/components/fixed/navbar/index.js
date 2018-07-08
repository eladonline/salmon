import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Brand from "./Brand/Brand";
import Login from "./Collapse/login";
import LoggedIn from "./Collapse/loggedIn";

export default class MainNavbar extends Component {
  isLoggedIn(user) {
    // "Unsigned" Linked to private Layout
    return user ? <LoggedIn user={user} /> : <Login />;
  }
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Brand />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse >
          {this.isLoggedIn('elad+1@committed.co.il')}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

MainNavbar.defaultProps = {
  login: true
};
