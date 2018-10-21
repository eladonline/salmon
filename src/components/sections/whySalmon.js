import React, { PureComponent } from 'react';
const whySalmonImg = 'static/image/why_salmon_img.png';

export default class WhySalmon extends PureComponent {
  render() {
    return (
      <div className="WhySalmon">
        <header>
          <h2>why</h2>
          <h1>SalmonCoin</h1>
        </header>
        <p>
          A fully transparent system created to change the game and giving to us, crypto investors
          the opportunity to hedge our investments in Bitcoin staying in Crypto field. The fact that
          we stay in crypto world saves us a lot of fees and the movement between positions will be
          faster and easier than selling my bitcoin getting US dollars and buying. SalmonCoin is the
          first project coming from people for people who will do their best in order to protect
          SalmonCoin investors. SalmonCoin Team is here to not tell stories, but just to create a
          better place where is not manipulated by big investors or entities who control the market.
        </p>
        <div className="border" />
        <h3>im some header</h3>
        <p>im some text</p>

        <img src={whySalmonImg} alt="why salmon" />
      </div>
    );
  }
}
