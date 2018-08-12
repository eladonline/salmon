import React from 'react';

// const background = 'static/image/slideThreePromo.png';
const TradeBiggerBack = 'static/image/TradeBiggerBack.png';

// export const SideImgThird = () => (
//   <img src={background} alt="side" className="third-mainCon-sideImg" />
// );

export const SideImgForthRect = p => (
  <div id="forth-mainCon-scene">
    <section>

    </section>
    <img
      src={TradeBiggerBack}
      alt="scene"
      data-depth="0.50"
      className="thirdForth-mainCon-background"
    />
    {p.children}
  </div>
);
