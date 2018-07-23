import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'themComponents/uielements/input';
import connect from './store';
class Email extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }
  onUpdate(event) {
    const value = event.target.value
    const { form, actions } = this.props;
    const newForm = { ...form, email: value };
    actions.setAuthForm(newForm);
  }
  render() {
    return (
      <Input
        id="inputUserName"
        size="large"
        placeholder="Username"
        onChange={this.onUpdate}
        value={this.props.form.email || ''}
      />
    );
  }
}

Email.defaultProps = {
  form: { email: '', passwords: '' },
};
Email.propTypes = {
  form: PropTypes.object,
  actions: PropTypes.object,
};

export default connect(Email);
