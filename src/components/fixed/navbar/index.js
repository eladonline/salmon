import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Brand from "./Brand/Brand";
import Login from "./Collapse/login";
import LoggedIn from "./Collapse/loggedIn";

const brandImgWhite = "static/icons/logoWhite.png";
const brandImgBlue = "static/icons/logoBlue.png";
const brandImgDarkBlue = "static/icons/logoDarkBlue.png";

export default class MainNavbar extends Component {
  state = {source:brandImgWhite}
  isLoggedIn(user) {
    // "Unsigned" Linked to private Layout
    return user ? <LoggedIn user={user} /> : <Login />;
  }
  render() {
    return (
      <Navbar collapseOnSelect onMouseOver={()=>{console.log('over')}}>
        <Navbar.Header>
          <Brand image={this.state.source} />
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
