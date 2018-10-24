import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';
import Link from 'next/link';

const brand = 'static/icons/logo.png';

const predefinedList = ['About', 'Investors Protection System', 'WhitePaper', 'FAQ', 'Token Sale'];

export default class Footer extends PureComponent {
  listParse(data) {
    return data.map(item => {
      const ref = '/' + item.trim();
      return (
        <li key={`Footer_${item}`}>
          <Link href={ref}>
            <a>{item}</a>
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <footer className="footer-outer">
        <Grid>
          <div className="footer">
            <section className="footer-links-cont">
              <img className="navbar-brand" src={brand} alt="brand" />
              <div className="footerNavlinks-outer">
                <ul className="footerNavlinks">{this.listParse(predefinedList)}</ul>
                <ul className="sharing">
                  <li>asdasd</li>
                </ul>
              </div>
            </section>
            <section className="copyrights">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco
              </div>
              <div className="Copyright-stamp">Copyright © SalmonCoin</div>
            </section>
          </div>
        </Grid>
      </footer>
    );
  }
}
