// WEB START
// --- react -----
/* Web dependencies:
-------------------------
  // -- api
    "axios": "^0.18.0",
    "axios-retry": "^3.1.0",

  // -- react
    "react": "16.3.1",

  // -- auth
    ???

  // -- storage
    ??

  // -- redux
    "immutable": "^3.8.2",
    "react-redux": "^5.0.7",
    "redux": "^4.0.0",
    "redux-devtools-extension": "^2.13.2",
    "reselect": "^3.0.1"
    "redux-saga": "^0.16.0",

  // -- navigation
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "react-router-redux": "5.0.0-alpha.6",
  // -- notification
  "react-notifications": "^1.4.3",
  // -- validate
  "validate.js": "^0.12.0"
*/
/* How to install -
notification -
import { NotificationContainer } from 'react-notifications';
and add <NotificationContainer /> to your root component;
*/
import keychain from 'src/logic/keychain/web/keychain';
import createStore, {history} from 'src/logic/redux/store/web/createStore';
import appConfig from 'src/logic/appConfig/web/appConfig';
import logger from 'src/logic/logger/logger';
import { api, httpRequest } from 'src/logic/backend';
import {
  Client as RollBarClient,
  Configuration as RollBarConfiguration,
} from 'src/logic/logger/web/rollbar';
import deviceInfo from 'src/logic/logger/web/deviceInfo';
import storage from 'src/logic/storage/web/storage';
import envConfig from 'src/logic/envConfig/web/config';
import Auth0 from 'src/logic/auth0/web/Auth0';
import * as helpers from 'src/logic/helpers';
import notificationService from 'src/logic/notification/web';
import notification from 'src/logic/notification';

const isPrivate = null
const isMobile = false;
const navigator = {
  navigate: (screen, props) => {
    if(screen !== history.location.pathname) {
      history.push(screen)
    }
  }
}
const screens = {
  APP_INTRO: '/signup',
  LOGIN: '/signin',
  REGISTER: '/signin',
  MAIN: '/app/dashboard'
}

export {
  isPrivate,
  isMobile,
  storage,
  keychain,
  navigator,
  screens,
  createStore,
  history,
  appConfig,
  envConfig,
  api,
  httpRequest,
  logger,
  RollBarClient,
  RollBarConfiguration,
  Auth0,
  deviceInfo,
  helpers,
  notification,
  notificationService,
};
