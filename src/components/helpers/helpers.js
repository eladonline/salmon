export const nodeToArray = node => {
  var nodesArray = [].slice.call(node);
  return nodesArray;
};

export const picture = (component, aSet, uniqkey) => {
  const aMedia = ['(min-width: 1600px)', '(min-width: 768px)', '(min-width: 0px)'];
  const sources = aMedia.map((media, i) => {
    return <source key={`${uniqkey}-${i}`} srcSet={aSet[i]} media={media} />;
  });
  return (
    <picture>
      {sources}
      {component}
    </picture>
  );
};
/**
 * @function hudiniNavbar
 * @argument {string} id
 * @argument {array} aColor
 * @argument {object} ref
 * @summary change element style
 */
export const hudiniElement = (
  el,
  aValue = { positive: 'transparent', negative: '#888' },
  bool,
  sStyle = 'background'
) => {
  bool ? (el.style[sStyle] = aValue.positive) : (el.style[sStyle] = aValue.negative);
};
