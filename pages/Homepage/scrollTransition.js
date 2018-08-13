import React from 'react';

const handleScrollTransition = (node, id, isUp) => {
  const component = node.querySelector(`#${id}`);
  component.style.transition = 'all 230ms ease-out';
  component.style.transform = isUp ? `translate3d(0px,-50px,0px)` : `translate3d(0px,0px,0px)`;
};

export default handleScrollTransition;
