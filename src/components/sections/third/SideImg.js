import React from 'react';

const background = 'static/image/slideThreePromo.png';
const coinBack = 'static/image/coinBack.png';

export const SideImgThird = () => (
  <img src={background} alt="side" className="third-mainCon-sideImg" />
);

export const SideImgThirdCoin = (p) => (
  <div id='third-mainCon-scene'>
    <img src={coinBack} alt="coin"  data-depth="0.5" className="thirdForth-mainCon-background" />
    {p.children}
  </div>
);
