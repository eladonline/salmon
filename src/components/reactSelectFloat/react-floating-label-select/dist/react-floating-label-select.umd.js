(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'classnames'], factory) :
	(global.FloatingLabelSelect = factory(global.React,global.classNames));
}(this, (function (React,classNames) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

class FloatingLabelSelect extends React.Component {
  constructor(props) {
    super(props);

    if (!props.id) {
      throw new Error('expectd id but none present');
    }

    if (props.shrink && (props.shrink < 1 || props.shrink > 99)) {
      throw new Error('shrink prop must be between 1 and 99');
    }

    this.state = {
      active: props.value && props.value.length > 0
    };
  }

  render() {
    const { className, fontSize, id, label, onBlur, onChange, onFocus, shrink, placeholder, type, value } = this.props;
    const { active } = this.state;

    return React__default.createElement(
      'div',
      {
        className: classNames('react-floating-label-select', {
          active,
          [className]: !!className
        })
      },
      React__default.createElement(
        'div',
        {
          className: 'container',
          style: {
            fontSize: fontSize ? fontSize : 'inherit',
            height: shrink ? `${1.2 + shrink / 100}em` : `2em`
          }
        },
        React__default.createElement(
          'label',
          {
            htmlFor: id,
            style: {
              transform: active ? `translate3d(0, -${shrink || '70'}%, 0) scale(0.${shrink || '70'})` : 'none'
            }
          },
          label
        ),
        React__default.createElement('select', {
          id: id,
          onBlur: event => {
            this.setState({ active: event.target.value.length !== 0 });
            if (onBlur) {
              onBlur(event);
            }
          },
          onChange: onChange,
          onFocus: event => {
            this.setState({ active: true });
            if (onFocus) {
              onFocus(event);
            }
          },
          type: type || "text",
        })
      )
    );
  }
}

return FloatingLabelSelect;

})));
