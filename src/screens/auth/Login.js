import React from 'react';
import { Field, reduxForm } from 'redux-form';
import IntlMessages from 'themComponents/utility/intlMessages';

const validate = values => {
  const errors = {};
  /** email validation */
  if (!values.email) {
    errors.email = 'נדרש';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'המייל אינו תקין';
  }
  // /** password validation */
  if (!values.password) {
    errors.password = 'נדרש';
  }
  //  else if (
  //   !/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/g.test(
  //     values.password,
  //   )
  // ) {
  //   errors.password =
  //     ' סיסמא חייבת להכיל לפחות 2 אותיות גדולות 3 קטנות 2 מספרים וסימן, סהכ 8 תווים.';
  // }
  return errors;
};

const warn = values => {
  const warnings = {};
  // if (values.password) {
  //   warnings.password = 'הסיסמא עומדת בתנאים';
  // }
  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} />
      <br />
      <div className="authInfo">
        {touched &&
          ((error && <span className="err">{error}</span>) ||
            (warning && <span className="warn">{warning}</span>))}
      </div>
    </div>
  </div>
);
// const onSubmit = values => {
//   history.push(`/`)
//   // window.location.replace(
//   //   `/?email=${values.email}?password=${values.password}`,
//   // );
// };

let Login = props => {
  const { handleSubmit } = props;
  return (
    <form id="register-from" dir="rtl">
      <div>
        <Field
          name="email"
          component={renderField}
          type="email"
          aria-describedby="emailHelp"
          label="דואר אלקטרוני"
        />
      </div>
      <div>
        <Field
          name="password"
          component={renderField}
          type="password"
          label="סיסמא"
        />
      </div>
      <div className="forgotPaswword">
        <a href="">
          <IntlMessages id="Forgot password" />
        </a>
      </div>
      <div className="form-button-con">
        <button type="button" className="btn" onClick={handleSubmit}>
          <IntlMessages id="Submit" />
        </button>
      </div>
    </form>
  );
};

Login = reduxForm({
  // a unique name for the form
  form: 'Login',
  validate,
  warn,
})(Login);

export default Login;
