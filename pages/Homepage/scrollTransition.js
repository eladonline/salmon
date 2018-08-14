import { isFirefox } from 'react-device-detect';

const animateScroll = (node, id, isUp) => {
  const component = node.querySelector(`#${id}`);
  const speed = isFirefox ? '200ms' : '230ms';
  component.style.transition = `all ${speed} cubic-bezier(.04,.73,.76,.92)`;
  component.style.transform = isUp ? `translate3d(0px,-50vh,0px)` : `translate3d(0px,0px,0px)`;
};

const handleScrollTransition = (node, offset, scrollDirUp) => {
  switch (offset) {
    case 1:
      return scrollDirUp && animateScroll(node, 'thirdImg', scrollDirUp);
    case 2:
      return scrollDirUp
        ? animateScroll(node, 'forthImg', scrollDirUp)
        : animateScroll(node, 'thirdImg', scrollDirUp);
    case 3:
      return scrollDirUp
        ? animateScroll(node, 'fifthBackground', scrollDirUp)
        : animateScroll(node, 'forthImg', scrollDirUp);
    case 4:
      return !scrollDirUp && animateScroll(node, 'fifthBackground', scrollDirUp);

    default:
      break;
  }
};

export default handleScrollTransition;
