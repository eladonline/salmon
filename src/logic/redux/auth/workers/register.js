import { put } from 'redux-saga/effects';
import {
  setAuthParameters as setOnStore,
  clearAuthForm, setTokenValidationStatus
} from 'src/logic/redux/auth/actions';
import { appConfig, api, httpRequest, helpers, notification } from 'src/logic';

import authorized from 'src/logic/redux/auth/workers/authorized';
import types from 'src/logic/redux/auth/types';

const START = types.REGISTER_START;
const FAILED = types.REGISTER_FAILED;
const FAILED_NETWORK = types.REGISTER_FAILED_NETWORK;
const FINISHED = types.REGISTER_FINISHED;

function* auth0Register(email, password) {
  const resLogin = yield httpRequest(api.authSignUp, email, password);
  if (!resLogin.error) {
    return resLogin;
  }
  throw new Error(resLogin.message || 'Error');
}
function* parseRegister(email, password) {
  const resLogin = yield httpRequest(api.signUp, email, password);
  if (!resLogin.error) {
    return resLogin;
  }
  throw new Error(resLogin.message || 'Error');
}
function* createMember(data) {
  const resCreateMember = yield httpRequest(api.createObject, 'Member', data);
  if (!resCreateMember.error) {
    return resCreateMember;
  }
  throw new Error(resCreateMember.message || 'Error');
}

export default function* registerWorker(action) {
  let isRegisterSuccessfully = true;
  const payload = action.payload || {};
  const { email, password } = payload;
  const authErrors = [helpers.getEmailErr(email), helpers.getPasswordErr(password)];
  if(authErrors[0] || authErrors[1]) {
    authErrors.forEach(message => { message && notification.error(message) })
    return
  }
  yield put(setOnStore({ status: START, error: null, loading: true }));
  let request;
  if (appConfig.useAuthO) {
    request = yield auth0Register(email, password);
  } else {
    request = yield parseRegister(email, password);
  }
  if (request.error) {
    const errType =
      request.message === 'Network Error' ? FAILED_NETWORK : FAILED;
    yield put(setOnStore({ status: errType, error: request, loading: false }));
    isRegisterSuccessfully = false;
  } else {
    const { data } = request;
    yield put(setTokenValidationStatus(true));
    yield put(setOnStore({
      status: FINISHED,
      error: null,
      loading: false,
      data,
    }));
    if (appConfig.createMemberFromClientSide) {
      const createMemberdata = {
        ...payload,
        user: helpers.createUserPointer(data.objectId),
      };
      delete createMemberdata.password;
      const createMemberReq = yield createMember(createMemberdata);
      if (createMemberReq.error) {
        isRegisterSuccessfully = false;
      }
    }
    if (isRegisterSuccessfully) {
      yield put(clearAuthForm());
      yield authorized();
    } else {
      console.warn('Need to handle register error');
    }
  }
}
