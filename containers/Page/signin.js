import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import { jwtConfig } from '../../config';
import AuthAction from 'src/logic/redux/isomorphic/auth/actions';
import Auth0 from '../../helpers/auth0';
import Firebase from '../../helpers/firebase';
import FirebaseLogin from '../../components/firebase';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';

class SignIn extends Component {
  static getPageConfig = function() {
    return {
      test: 'work'
    }
  }
  handleLogin = () => {
    const { login, history } = this.props;
    login(history);
  };

  handleJWTLogin = () => {
    // const { jwtLogin, history } = this.props;
    // const userInfo = {
    //   username: document.getElementById('inputUserName').value || '',
    //   password: document.getElementById('inpuPassword').value || ''
    // };
    // jwtLogin(history, userInfo);
  };
  render() {
    // const from = { pathname: '/dashboard' };
    const {
      // isLoggedIn,
      userFromCookies,
      // state
    } = this.props;
    console.log('userFromCookies', userFromCookies)
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
                <Input
                  id="inputUserName"
                  size="large"
                  placeholder="Username"
                  defaultValue="demo@gmail.com"
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  id="inpuPassword"
                  size="large"
                  type="password"
                  placeholder="Password"
                  defaultValue="demodemo"
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button
                  type="primary"
                  onClick={
                    jwtConfig.enabled ? this.handleJWTLogin : this.handleLogin
                  }
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

                {Auth0.isValid && (
                  <Button
                    onClick={() => Auth0.login(this.handleLogin)}
                    type="primary btnAuthZero"
                  >
                    <IntlMessages id="page.signInAuth0" />
                  </Button>
                )}

                {Firebase.isValid && <FirebaseLogin login={this.handleLogin} />}
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
export default connect(
  state => ({
    state,
    isLoggedIn: state.Auth.get('idToken') !== null,
    userFromCookies: state.auth.get('userFromCookies')
  }),
  { ...AuthAction }
)(SignIn);
