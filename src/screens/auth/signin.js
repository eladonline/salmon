import React, { Component } from 'react';
import Link from 'next/link';
import Input from 'themComponents/uielements/input';
import Checkbox from 'themComponents/uielements/checkbox';
import Button from 'themComponents/uielements/button';
import IntlMessages from 'themComponents/utility/intlMessages';
import SignInStyleWrapper from 'themContainers/Page/signin.style';
import {Email, Password} from 'components/authForm'
import connect from './store'

class SignIn extends Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin = () => {
    this.props.actions.login(this.props.form)
  };

  render() {
    const from = { pathname: '/dashboard' };
    const { isLoggedIn, userFromCookies, state, isLoading } = this.props;
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link href="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Email />
              </div>

              <div className="isoInputWrapper">
                <Password />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button
                  type="primary"
                  onClick={ isLoading ? null : this.handleLogin }
                >
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>

              <div className="isoInputWrapper isoOtherLogin">
                <Button onClick={this.handleLogin} type="primary btnFacebook">
                  <IntlMessages id="page.signInFacebook" />
                </Button>
                <Button onClick={this.handleLogin} type="primary btnGooglePlus">
                  <IntlMessages id="page.signInGooglePlus" />
                </Button>

              </div>
              <div className="isoCenterComponent isoHelperWrapper">
                <Link href="/forgotpassword">
                  <div className="isoForgotPass">
                    <IntlMessages id="page.signInForgotPass" />
                  </div>
                </Link>
                <Link href="/signup">
                  <IntlMessages id="page.signInCreateAccount" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}
export default connect(SignIn);
