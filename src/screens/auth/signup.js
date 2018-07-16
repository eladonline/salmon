import React from 'react';
import Link from 'next/link';
import Input from 'themComponents/uielements/input';
import Checkbox from 'themComponents/uielements/checkbox';
import Button from 'themComponents/uielements/button';
// import FirebaseLogin from 'themComponents/firebase';
import IntlMessages from 'themComponents/utility/intlMessages';
import SignUpStyleWrapper from 'themContainers/Page/signup.style';
import {Email, Password} from 'components/authForm'
import connect from './store'
import {notification} from 'src/logic'

class SignUp extends React.Component {
  handleSignup = () => {
    const passwordAgain = document.getElementById('inputConfirmPassword').value || '';
    if(passwordAgain === this.props.form.password) {
      this.props.actions.register(this.props.form)
    }else{
      notification.error('password not equale')
    }
  };
  render() {
    const {
      // isLoggedIn,
      // userFromCookies,
      // state,
      isLoading
    } = this.props;
    return (
      <SignUpStyleWrapper className="isoSignUpPage">
        <div className="isoSignUpContentWrapper">
          <div className="isoSignUpContent">
            <div className="isoLogoWrapper">
              <Link href="/dashboard">
                <IntlMessages id="page.signUpTitle" />
              </Link>
            </div>

            <div className="isoSignUpForm">
              <div className="isoInputWrapper isoLeftRightComponent">
                <Input size="large" placeholder="First name" />
                <Input size="large" placeholder="Last name" />
              </div>

              <div className="isoInputWrapper">
                <Email />
              </div>

              <div className="isoInputWrapper">
                <Password />
              </div>

              <div className="isoInputWrapper">
                <Input
                  id="inputConfirmPassword"
                  size="large"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="isoInputWrapper" style={{ marginBottom: '50px' }}>
                <Checkbox>
                  <IntlMessages id="page.signUpTermsConditions" />
                </Checkbox>
              </div>

              <div className="isoInputWrapper">
                <Button type="primary"
                  onClick={ isLoading ? null : this.handleSignup }
                >
                  <IntlMessages id="page.signUpButton" />
                </Button>
              </div>
              <div className="isoInputWrapper isoOtherLogin">
                <Button onClick={this.handleLogin} type="primary btnFacebook">
                  <IntlMessages id="page.signUpFacebook" />
                </Button>
                <Button onClick={this.handleLogin} type="primary btnGooglePlus">
                  <IntlMessages id="page.signUpGooglePlus" />
                </Button>
              </div>
              <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
                <Link href="/signin">
                  <IntlMessages id="page.signUpAlreadyAccount" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignUpStyleWrapper>
    );
  }
}

export default connect(SignUp);
