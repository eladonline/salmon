/**
 * !important
 * if namesToReAnimate and namesOfAnimation is connected!
 * namesToReAnimate is the key class for the dom to find
 * namesOfAnimation is the animation to fulfil
 * they both need to be at the same index of the array
 */

const namesToReAnimate = {
  first: ['.firstSectionHeader'],
  second: [
    '.second-header-first',
    '.second-header-second',
    '.second-header-third',
    '.chartSection',
    '.iconsSection',
    '#second-header'
  ],
  third: [
    '.sub-headerThird',
    '.main-headerThird',
    '.boxThirdA',
    '.boxThirdB',
    '.boxThirdC',
    '.boxThirdD',
    '.thirdButton'
  ],
  forth: [
    '.sub-headerForth',
    '.main-headerForth',
    '.boxForthA',
    '.boxForthB',
    '.boxForthC',
    '.boxForthD',
    '.forthButton'
  ],
  fifth: ['.fifth-header', '.fifth-sub-header', '.boxes', '.fifth-sub-header-icons'],
  sixth: ['.sixth-header', '.sixth-section', '.sixth-btn']
};
const namesOfAnimation = {
  first: [['fadeInUp', 'animated']],
  second: [
    ['animate-second-header-first'],
    ['animate-second-header-second'],
    ['animate-second-header-third'],
    ['animate-chartSection', 'fadeInUp', 'animated'],
    ['animate-iconsSection'],
    ['animate-secondSectiongoToTop']
  ],
  third: [
    ['animate-sub-headerThirdAforth'],
    ['animate-main-headerThirdAforth'],
    ['animate-boxThirdAforth'],
    ['animate-boxThirdAforth'],
    ['animate-boxThirdAforth'],
    ['animate-boxThirdAforth'],
    ['animate-thirdButtonAforth']
  ],
  forth: [
    ['animate-sub-headerThirdAforth'],
    ['animate-main-headerThirdAforth'],
    ['animate-boxThirdAforth'],
    ['animate-boxThirdAforth'],
    ['animate-boxThirdAforth'],
    ['animate-boxThirdAforth'],
    ['animate-thirdButtonAforth']
  ],
  fifth: [
    ['animate-fifth-header'],
    ['animate-fifth-sub-header'],
    ['animate-boxes'],
    ['animate-fifth-sub-header']
  ],
  sixth: [['animate-sixth-header'], ['animate-boxes'], ['animate-sixth-button']]
};

const reset = (aClassAids, animationList, domNode) => {
  aClassAids.map((elementClassOrId, i) => {
    if (elementClassOrId) {
      let el = domNode.querySelector(`${elementClassOrId}`);
      if (el) {
        animationList[i].map(classname => {
          el.classList.add(classname);
        });
      }
    }
  });
};

const resetAnimation = (section, Node) => {
  switch (section) {
    case 0: // First section
      reset(namesToReAnimate.first, namesOfAnimation.first, Node);
      break;
    case 1: // Second section
      reset(namesToReAnimate.second, namesOfAnimation.second, Node);
      break;
    case 2: // Third section
      reset(namesToReAnimate.third, namesOfAnimation.third, Node);
      break;
    case 3: // Forth section
      reset(namesToReAnimate.forth, namesOfAnimation.forth, Node);
      break;
    case 4: // Fifth section
      reset(namesToReAnimate.fifth, namesOfAnimation.fifth, Node);
      break;
    case 5: // sixth section
      reset(namesToReAnimate.sixth, namesOfAnimation.sixth, Node);
      break;
    default:
      break;
  }
};

export default resetAnimation;
