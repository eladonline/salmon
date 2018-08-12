import React, { Component } from 'react';
import classNames from 'classnames';

class FloatingLabelSelect extends Component {
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
    const { className, fontSize, id, label, onBlur, onChange, onFocus, shrink, list } = this.props;
    const { active } = this.state;

    return React.createElement(
      'div',
      {
        className: classNames('react-floating-label-select', {
          active,
          [className]: !!className
        })
      },
      React.createElement(
        'div',
        {
          className: 'container',
          style: {
            fontSize: fontSize ? fontSize : 'inherit',
            height: shrink ? `${1.2 + shrink / 100}em` : `2em`
          }
        },
        React.createElement(
          'label',
          {
            htmlFor: id,
            style: {
              transform: active ? `translate3d(0, -${shrink || '70'}%, 0) scale(0.${shrink || '70'})` : 'none'
            }
          },
          label
        ),
        React.createElement('select', {
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
        }, [...list])
      )
    );
  }
}

export default FloatingLabelSelect;
