import { isEmptyValue } from 'src/logic/helpers';
import { envConfig, RollBarClient, RollBarConfiguration, deviceInfo } from 'src/logic';


let _rollbar = null;
let _token = null;

let store;
export const setStore = function (_store) {
  store = _store;
};
const getConfig = function (member) {
  const { readableVersion } = envConfig;
  const regexRes = !isEmptyValue(readableVersion)
    ? readableVersion.match(/\.[0-9]+$/)
    : [];
  const codeVersion =
    regexRes && regexRes.length > 0
      ? `${regexRes[0]}.${envConfig.deviceType}`
      : '';
  const payload = {
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: codeVersion,
        guess_uncaught_frames: true,
      },
    },
    environment: envConfig.ENV,
  };
  if (member) {
    payload.person = {
      id: member.reference, // required
      username: member.reference,
      email: `member+${member.reference}${envConfig.INTERCOM_MEMBER_DOMAIN}`,
    };
  }
  return {
    payload,
  };
};

const rollbarWrapper = function (type, error, extra) {
  /* eslint-disable no-undef */
  if (__DEV__ || envConfig.ENV === 'dev') {
    /* eslint-enable no-undef */
    console.log('rollbar: ', type, error, extra);
  } else {
    _rollbar[type](error, { ...extra, appEnv: envConfig.ENV });
  }
};
const Logger = {
  initRollbar(res, member) {
    _token = res ? res.token : _token;
    const configuration = new RollBarConfiguration(_token, getConfig(member));
    _rollbar = new RollBarClient(configuration);
  },
  setMember(member) {
    Logger.initRollbar(null, member);
  },
  clearMember() {
    Logger.initRollbar();
  },
  error(error, extra = {}) {
    const _store = store.getState && store.getState();
    const navigation = _store && _store.nav;
    const _extra = {
      ...deviceInfo,
      ...extra,
      // /..._store
      navigation,
    };
    rollbarWrapper('error', error, _extra);
  },
  log(message, extra = {}) {
    const _extra = { ...deviceInfo, ...extra };
    rollbarWrapper('log', message, _extra);
  },
  debug(message, extra = {}) {
    const _extra = { ...deviceInfo, ...extra };
    rollbarWrapper('debug', message, _extra);
  },
  info(message, extra = {}) {
    const _extra = { ...deviceInfo, ...extra };
    rollbarWrapper('info', message, _extra);
  },
  missingRequired(misFields = [], action = {}) {
    const _store = store.getState && store.getState();
    const navigation = _store && _store.nav;
    const _extra = { ...deviceInfo, ...action, navigation };
    rollbarWrapper('warning', `missing params: ${misFields.join(',')}`, _extra);
  },
  warning(message, extra = {}) {
    const _extra = { ...deviceInfo, ...extra };
    rollbarWrapper('warning', message, _extra);
  },
  critical(message, extra = {}) {
    const _extra = { ...deviceInfo, ...extra };
    rollbarWrapper('critical', message, _extra);
  },
  rollbar: _rollbar,
};

export default Logger;
