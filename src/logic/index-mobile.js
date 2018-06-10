// --- react native ----- //
import keychain from 'src/logic/keychain/mobile/keychain';
import createStore from 'src/logic/redux/store/mobile/createStore';
import appConfig from 'src/logic/appConfig/mobile/appConfig';
import logger from 'src/logic/logger/logger';
import navigator, { screens } from 'src/router/Navigator';
import { api, httpRequest } from 'src/logic/backend';
import {
  Client as RollBarClient,
  Configuration as RollBarConfiguration,
} from 'src/logic/logger/mobile/rollbar';
import deviceInfo from 'src/logic/logger/mobile/deviceInfo';
import storage from 'src/logic/storage/mobile/storage';
import envConfig from 'src/logic/config/mobile/config';
import Auth0 from 'src/logic/auth0/mobile/Auth0';
import * as helpers from 'src/logic/helpers';
import notificationService from 'src/logic/notification/mobile';
import notification from 'src/logic/notification';

const isPrivate = null;
const history = null;
const isMobile = true;

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

/* Mobile dependencies:
-------------------------
  //
    "react-native-facebook-login": "^1.6.1",
  // -- api
    "axios": "^0.18.0",
    "axios-retry": "^3.1.0",

  // -- react
    "react": "16.3.1",
    "react-native": "0.55.4",

  // -- auth
    "react-native-auth0": "^1.2.2",

  // -- device
    "react-native-config": "^0.11.5",
    "react-native-device-info": "^0.21.5",

  // -- translate
    "react-native-i18n": "^2.0.12",

  // -- storage
    "react-native-keychain": "^3.0.0-rc.3",
    "react-native-simple-store": "^1.3.0"

  // -- redux
    "immutable": "^3.8.2",
    "react-redux": "^5.0.7",
    "redux": "^4.0.0",
    "redux-devtools-extension": "^2.13.2",
    "reselect": "^3.0.1"
    "redux-saga": "^0.16.0",

  // -- navigation
    "react-navigation": "^2.0.1",
    "react-navigation-redux-helpers": "^1.1.1",
  // -- validate
  "validate.js": "^0.12.0"
*/
