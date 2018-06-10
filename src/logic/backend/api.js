import axios from 'axios';
import axiosRetry from 'axios-retry';
import { objDig } from 'src/logic/helpers';
import { logger, Auth0, envConfig } from 'src/logic';
import * as endpoints from './endpoints';

const { create } = axios;

let _api = null;
let initConfig = null;
let _auth0 = null;
const MAX_RETRIES = 3;

const createHeaders = function (res) {
  const obj = {};
  if (res.appId) {
    obj['X-Parse-Application-Id'] = res.appId;
  }
  if (res.sessionToken) {
    obj['X-Parse-Session-Token'] = res.sessionToken;
  }
  if (res.masterKey) {
    obj['X-Parse-Master-Key'] = res.masterKey;
  }
  return obj;
};

const createParseInstance = (res) => {
  if (!res || !res.baseURL) {
    console.warn('Api.init(config) - missing config.baseURL');
    return;
  }
  initConfig = res;
  _api = create({
    baseURL: res.baseURL,
    headers: createHeaders(res),
  });
  axiosRetry(_api, {
    retries: MAX_RETRIES,
    // retryCondition: (err) => true,
    // A callback to further control if a request should be retried
    retryDelay: (retryCount, err) => {
      logger.error(err, { type: 'failed requests', retryCount });
      if (envConfig.ENV === 'dev') {
        console.log('Network Err retry: ', {
          baseURL: objDig(err, 'config.baseURL'),
          retryCount: objDig(err, 'config.axios-retry.retryCount'),
          params: objDig(err, 'config.params'),
          data: objDig(err, 'config.data'),
          message: objDig(err, 'response.data.message'),
          code: objDig(err, 'response.status'),
        });
      }
      return retryCount * 1000;
    },
  });
};

const createAuth0Instance = () => {
  _auth0 = new Auth0({
    domain: envConfig.AUTH0_DOMAIN,
    clientId: envConfig.AUTH0_CLIENT_ID,
  });
};

const Api = {
  init(res) {
    createParseInstance(res);
    createAuth0Instance();
  },
  setSessionToken(token) {
    const configuration = Object.assign(initConfig, { sessionToken: token });
    createParseInstance(configuration);
  },
  getSessionToken() {
    return initConfig.sessionToken;
  },
  getAppId() {
    return initConfig.appId;
  },
  getParseUrl() {
    return initConfig.baseURL;
  },
  removeSessionToken() {
    delete initConfig.sessionToken;
    createParseInstance(initConfig);
  },
  // query
  /**
   * ### query
   * query data from server by ClassName
   * the data is already in JSON format
   *
   * @param className ClassName
   * @param query object with parse query parameters, look http://docs.parseplatform.org/rest/guide/#queries
   * @param limit number: Limit the number of objects returned by the query
   * @param skip number: Use with limit to paginate through results
   * @param Count boolean , set false to disable counter
   * @param keys string: Restrict the fields returned by the query
   * @param include string:
   * @param order string: Specify a field to sort by
   * {username: "barton", email: "barton@foo.com"}
   */
  query(className, query, limit, skip, Count = true, keys, include, order) {
    const _p = {
      params: {},
    };
    if (query) {
      _p.params.where = query;
    }
    if (limit) {
      _p.params.limit = limit;
    }
    if (skip) {
      _p.params.skip = skip;
    }
    if (Count) {
      _p.params.count = Count ? 1 : 0;
    } // Count by default
    if (keys) {
      _p.params.keys = keys;
    }
    if (include) {
      _p.params.include = include;
    }
    if (order) {
      _p.params.order = order;
    }
    return _api.get(`${endpoints.classPath}${className}`, _p);
  },
  /**
   * @param {object} params
   * @param {string} params.className
   * @param {string} params.query
   * @param {number} params.limit
   * @param {number} params.skip
   * @param {boolean} params.Count
   * @param {string} params.keys
   * @param {string} params.include
   * @param {string} params.order
   * @param {string} nameInStore
   */
  queryRequest(params, nameInStore) {
    //  className, query, limit, skip, Count = true, keys, include, order
    const _p = { params: {} };
    if (params.query) {
      _p.params.where = params.query;
    } else {
      _p.params.where = {}
    }

    if (params.limit) {
      _p.params.limit = params.limit;
    }
    if (params.skip) {
      _p.params.skip = params.skip;
    }
    if (params.Count === false) {
      _p.params.count = 0;
    } else { // Count by default
      _p.params.count = 1;
    }
    if (params.keys) {
      _p.params.keys = params.keys;
    }
    if (params.include) {
      _p.params.include = params.include;
    }
    if (params.order) {
      _p.params.order = params.order;
    }
    return _api.get(`${endpoints.classPath}${params.className}`, _p, nameInStore);
  },
  /**
   * ### getCloudFunction
   * call function on parse cloudCode
   *
   * @param functionName string - the function name in backEnd
   * @param data object data to post to server
   */
  getCloudFunction(functionName, data) {
    const _date = data;
    if (envConfig.ENV && data) {
      _date.appEnv = envConfig.ENV;
    }
    return _api.post(`${endpoints.cloudCodePath}${functionName}`, _date);
  },
  /**
   * ### updateObject
   * To change the data on an object that already exists
   * keys you don’t specify will remain unchanged
   *
   * @param className ClassName
   * @param objectId parse objectID
   * @param data object: key:value to update
   * data: {vote: 40, color: "red"}
   */
  updateObject(schemaName, objectId, data) {
    if (schemaName === 'User') {
      return _api.put(`${endpoints.usersPath}${objectId}`, data);
    }
    return _api.put(`${endpoints.classPath}${schemaName}/${objectId}`, data);
  },
  /**
   * getObjectById
   * @param {*} className ClassName
   * @param {*} objectId parse objectID
   * @param {*} keys keys to include
   * @param {*} include pointer to include
   */
  getObjectById(className, objectId, keys, include) {
    const p = { params: {} };
    if (keys) p.keys = keys;
    if (include) p.include = include;
    return _api.post(`${endpoints.classPath}${className}/${objectId}`, p);
  },
  /**
   * ### createObject
   * To create new document
   *
   * @param className ClassName
   * @param objectId parse objectID
   * @param data object: key:value to create
   * data: {vote: 40, color: "red"}
   */
  createObject(schemaName, data) {
    return _api.post(`${endpoints.classPath}${schemaName}`, data);
  },
  /**
   * ### deleteObject
   * To delete Object from data base
   *
   * @param className ClassName
   * @param objectId parse objectID
   */
  deleteObject(schemaName, objectId) {
    return _api.delete(`${endpoints.classPath}${schemaName}/${objectId}`);
  },

  /**
   * ### createInstallation
   * To create new installation object
   *
   * @param data object: key:value to create
   *
   */
  createInstallation(data) {
    return _api.post(endpoints.installations, data);
  },

  /**
   * ### getInstallation
   * To get installation object
   *
   * @param data installation objectId
   *
   */
  getInstallation(objectId) {
    return _api.get(endpoints.installations, objectId);
  },

  /**
   * ### updateInstallation
   * To update installation object
   *
   * @param data object: key:value to update
   *
   */
  updateInstallation(installationObjectId, data) {
    return _api.put(endpoints.installations + installationObjectId, data);
  },

  login(email, password) {
    const _data = {
      params: {
        username: email.trim().toLowerCase(),
        password: password.trim(),
      },
    };
    return _api.get(`${endpoints.loginPath}`, _data);
  },
  authLogin(email, password) {
    const _username = email.trim().toLowerCase();
    const _password = password.trim();
    const _scope = 'openid profile';
    return _auth0.auth.passwordRealm({
      username: _username,
      password: _password,
      realm: 'Username-Password-Authentication',
      scope: _scope,
    });
  },
  authResetPassword(email) {
    const _email = email.trim().toLowerCase();
    return _auth0.auth.resetPassword({
      email: _email,
      connection: endpoints.AUTH0_DATABASE_CONNECTION,
    });
  },
  resetPassword(email) {
    return _api.post(`${endpoints.resetPasswordPath}`, { email });
  },

  userInfo(accessToken) {
    return _auth0.auth.userInfo({ token: accessToken });
  },

  signUp(email, password) {
    return _api.post(`${endpoints.usersPath}`, {
      username: email.trim().toLowerCase(),
      password: password.trim(),
    });
  },
  authSignUp(email, password, accessCode) {
    const userForm = {};
    userForm.username = email.trim().toLowerCase();
    userForm.email = email.trim().toLowerCase();
    userForm.password = password.trim();
    userForm.connection = endpoints.AUTH0_DATABASE_CONNECTION;
    userForm.metadata = { accessCode };
    return _auth0.auth.createUser(userForm);
  },

  logout() {
    return _api.post(`${endpoints.logoutPath}`);
  },
  appConfig() {
    return _api.get(`${endpoints.appConfig}`);
  },
  validateToken(sessionToken) {
    const token = sessionToken || Api.getSessionToken();
    return axios({
      method: 'get',
      url: `${Api.getParseUrl() + endpoints.usersPath}me`,
      headers: {
        'X-Parse-Application-Id': Api.getAppId(),
        'X-Parse-Session-Token': token,
      },
    });
  },
};

export default Api;
