import React, { PureComponent } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const info = 'static/icons/info.png';
const salmonCoin = 'static/image/salmon_coin.png';
const bitCoin = 'static/image/bit_coin.png';

export default class HowItWorks extends PureComponent {
  render() {
    return (
      <div className="HowItWorks">
        <section className="sectionA">
          <header>
            How it works?
            <button>Hide examples</button>
          </header>
          <p>
            Using smart formula SalmonCoin quote its price real time against Bitcoin price. Every
            00:00 london Time bitcoin base price will be fixed against SalmonCoin base price and the
            percentage movement of the following day will be compared to the base prices of both.
          </p>
        </section>
        <section className="sectionB">
          <Block text="SalmonCoin Launch" coin={coinPrice.launch} number="01" />
          <Block text="SalmonCoin Launch" coin={coinPrice.dateA} number="02" i={true} />
          <Block text="SalmonCoin Launch" coin={coinPrice.dateB} number="03" i={true} />
        </section>
      </div>
    );
  }
}

const coinPrice = {
  launch: { salmon: 10, bitCoin: 6000 },
  dateA: { salmon: 10.9, bitCoin: 5820 },
  dateB: { salmon: 10.791, bitCoin: 5878.2 }
};

const popoverLeft = (
  <Popover id="popover-positioned-left" title="">
    $5820 + 1% = $5878.2
  </Popover>
);

const Block = p => {
  return (
    <div className="block">
      <section className="blockHeader">
        <div>{p.number}</div>
        <div>date time</div>
      </section>

      <section>
        <p>{p.text}</p>
      </section>

      <section className="blockCoinSection">
        <div>
          <p>SC price: </p>
          <div className="blockPriceBlack">${p.coin.salmon}</div>
          <img className="Blockcoin" src={salmonCoin} alt="coin" />
        </div>
        <div>
          <p>BC price: </p>
          <div className="blockPriceBlack">
            ${p.coin.bitCoin}
            {p.i && (
              <OverlayTrigger trigger="hover" placement="left" overlay={popoverLeft}>
                <img className="infoIcon" src={info} alt="info" />
              </OverlayTrigger>
            )}
          </div>
          <img className="Blockcoin" src={bitCoin} alt="coin" />
        </div>
      </section>
    </div>
  );
};
