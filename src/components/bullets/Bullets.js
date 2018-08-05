import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const Welcome = (
  <Popover bsClass="popover" id="popover-trigger-Welcome">
    Welcome
  </Popover>
);
const System = (
  <Popover bsClass="popover" id="popover-trigger-System">
    System
  </Popover>
);
const Institutions = (
  <Popover bsClass="popover" id="popover-trigger-Institutions">
    Institutions
  </Popover>
);
const InstitutionsB = (
  <Popover bsClass="popover" id="popover-trigger-InstitutionsB">
    Institutions
  </Popover>
);
const InstitutionsC = (
  <Popover bsClass="popover" id="popover-trigger-InstitutionsC">
    Institutions
  </Popover>
);
const Vision = (
  <Popover bsClass="popover" id="popover-trigger-Vision">
    Vision
  </Popover>
);
const AboutUs = (
  <Popover bsClass="popover" id="popover-trigger-AboutUs">
    About Us
  </Popover>
);

export default class Bullets extends Component {
  constructor(props) {
    super(props);
    this.bulletsCreator = this.bulletsCreator.bind(this);
  }

  isInvers(offset) {
    switch (offset) {
      case 0:
        return true;
      case 1:
        return false;
      case 2:
        return false;
      case 3:
        return true;
      case 4:
        return true;
      case 5:
        return true;
      case 6:
        return false;
      default:
        return false;
    }
  }
  bulletsCreator(nPages) {
    let li = [];
    for (let i = 0; i < nPages; i++) {
      li.push(
        <OverlayTrigger
          key={`Ticket-${i}`}
          trigger={['hover', 'focus', 'click']}
          placement="left"
          overlay={pageName(i)}
          rootClose
        >
          <li
            id={`bullet_${i}`}
            key={`bullets-${i}`}
            onMouseDown={() => this.props.handleBulletClick(i)}
            data-invers={this.isInvers(this.props.offset)}
            data-fillinvers={i <= this.props.offset && this.isInvers(this.props.offset)}
            data-fill={i <= this.props.offset && !this.isInvers(this.props.offset)}
          />
        </OverlayTrigger>
      );
    }
    return li;
  }
  render() {
    return <ul className="bullestMain">{this.bulletsCreator(this.props.pages)}</ul>;
  }
}

const pageName = nPage => {
  switch (nPage) {
    case 0:
      return Welcome;
    case 1:
      return System;
    case 2:
      return Institutions;
    case 3:
      return InstitutionsB;
    case 4:
      return InstitutionsC;
    case 5:
      return Vision;
    case 6:
      return AboutUs;
    default:
      return 'INX';
  }
};
