import keychain from 'src/logic/keychain/web/ssr/keychain';
import {withReduxSaga as createStore} from 'src/logic/redux/store/web/createStoreSsr';
import appConfig from 'src/logic/appConfig/web/appConfig';
import logger from 'src/logic/logger/logger';
import { api, httpRequest } from 'src/logic/backend';
import {
  Client as RollBarClient,
  Configuration as RollBarConfiguration,
} from 'src/logic/logger/web/rollbar';
import deviceInfo from 'src/logic/logger/web/deviceInfo';
import storage from 'src/logic/storage/web/ssr/cookiesHelper'; // ssr
import envConfig from 'src/logic/envConfig/web/config';
import Auth0 from 'src/logic/auth0/web/Auth0';
import * as helpers from 'src/logic/helpers';
import notificationService from 'src/logic/notification/web/ssr';
import notification from 'src/logic/notification';

import Router from 'next/router'
const history = null
const isPrivate = null;
const isMobile = false;
const navigator = {
  navigate: (screen, props) => {
    Router.push({
      pathname: screen,
      query: props
    })
  }
}

const screens = {
  APP_INTRO: '/signup',
  LOGIN: '/signin',
  REGISTER: '/signin',
  MAIN: '/dashboard'
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
