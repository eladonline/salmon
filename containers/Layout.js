import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import WindowResizeListener from 'react-window-size-listener';
// import { Debounce } from 'react-throttle';
// import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';
// import { initGA, logPageView } from '../helpers/analytics';
import themes from '../config/themes';
// import { siteConfig } from '../config/index';
import authAction from 'src/logic/redux/isomorphic/auth/actions';
import appActions from 'src/logic/redux/isomorphic/app/actions';
// import AppLocale from '../languageProvider';
import Navbar from 'src/components/fixed/navbar/index';
import { Grid } from 'react-bootstrap';
import Footer from 'src/components/fixed/footer/footer';

const { logout } = authAction;
const { toggleAll } = appActions;
// const { Content, Footer } = Layout;

class Header extends PureComponent {
  state = { window: null };
  componentDidMount() {
    if (window) {
      const { innerWidth, innerHeigth } = window;
      this.props.toggleAll(innerWidth, innerHeigth);
      this.setState({ window: true });
    }
  }
  render() {
    const { selectedTheme } = this.props;
    if (this.props.App.height === 0 && this.state.window === null) {
      return (
        <div>
          {/* <Debounce time="1000" handler="onResize"> */}
          {/*WindowResizeListener already have debounce time*/}
          {/* change the store if there is window */}
          {/* <WindowResizeListener
            onResize={windowSize =>
              this.props.toggleAll(windowSize.windowWidth, windowSize.windowHeight)
            }
          /> */}
          {/* </Debounce> */}
        </div>
      );
    }
    return (
      <Fragment>
        <WindowResizeListener
          onResize={windowSize =>
            this.props.toggleAll(windowSize.windowWidth, windowSize.windowHeight)
          }
        >
          <header className="navbarBackground" />
          <Grid>
            <Navbar />
            <ThemeProvider theme={themes[selectedTheme]}>{this.props.children}</ThemeProvider>
          </Grid>
            <Footer />
        </WindowResizeListener>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.Auth.toJS(),
  App: state.App.toJS(),
  selectedTheme: state.ThemeSwitcher.toJS().changeThemes.themeName
});
export default connect(
  mapStateToProps,
  { logout, toggleAll }
)(Header);
