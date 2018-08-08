import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

export default class Bullets extends Component {
  constructor(props) {
    super(props);
    this.pageNames = [
      'Welcome',
      'System',
      'Institutions',
      'Institutions',
      'Institutions',
      'Vision',
      'AboutUs'
    ];
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
          // overlay={pageName(i)}
          overlay={
            <Popover
              className="popover-bullet"
              data-invers={this.isInvers(this.props.offset)}
              id={`popover-trigger-${this.pageNames[i]}-${i}`}
            >
              {this.pageNames[i] === 'AboutUs' ? 'About Us' : this.pageNames[i]}
            </Popover>
          }
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
    return <ul className="bulletsMain">{this.bulletsCreator(this.props.pages)}</ul>;
  }
}
