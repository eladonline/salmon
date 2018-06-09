import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'themComponents/uielements/input';
import connect from './store';
class Password extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }
  onUpdate(event) {
    const value = event.target.value
    const { form, actions } = this.props;
    const newForm = { ...form, password: value };
    actions.setAuthForm(newForm);
  }
  render() {
    return (
        <Input
          id="inpuPassword"
          size="large"
          type="password"
          placeholder="Password"
          onChange={this.onUpdate}
          value={this.props.form.password || ''}
      />
    );
  }
}

Password.defaultProps = {
  form: { email: '', passwords: '' },
};
Password.propTypes = {
  form: PropTypes.object,
  actions: PropTypes.object,
};

export default connect(Password);
