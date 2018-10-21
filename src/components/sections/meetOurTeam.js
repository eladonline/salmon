import React, { PureComponent } from 'react';

export default class meetOurTeam extends PureComponent {
  render() {
    return (
      <div className="MeetOurTeam">
        <h1>Meet our team</h1>
        <div className="teamProfiles">
          <ProfileBlock />
          <ProfileBlock />
          <ProfileBlock />
        </div>
      </div>
    );
  }
}

const ProfileBlock = p => (
  <div className="profileBlock">
    {/* <div id="hexagon" className="hexagon" /> */}
    <header>
      <h3>name Surename</h3>
      <h4>Title here</h4>
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    </p>
  </div>
);
