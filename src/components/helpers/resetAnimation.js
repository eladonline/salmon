const namesToReAnimate = {
  first: [[
    '#sectionFirstHeader',
    /*"#promoVid"*/
  ], []],
  second: [[''], []],
  third: [[''], []],
  forth: [[''], []]
};

const reset = (aClassAids, display, domNode) => {
  aClassAids.map((aList, i) => {
    aList.map(elementClassOrId => {
      if (elementClassOrId) {
        let el =
          i === 0
            ? domNode.querySelector(`${elementClassOrId}`)
            : domNode.querySelector(`${elementClassOrId}`);
        if (el) el.style.display = display;
      }
    });
  });
};

const resetAnimation = (section, display, Node) => {
  switch (section) {
    case 0: // First section
      reset(namesToReAnimate.first, display, Node);

      break;
    case 1: // Second section
      reset(namesToReAnimate.second, display, Node);
      break;
    case 2: // Third section
      reset(namesToReAnimate.third, display, Node);
      break;
    case 3: // Forth section
      reset(namesToReAnimate.forth, display, Node);
      break;
    case 4: // Fifth section
      reset(namesToReAnimate.fifth, display, Node);
      break;
    default:
      break;
  }
};

export default resetAnimation;
