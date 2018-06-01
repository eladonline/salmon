import { put } from 'redux-saga/effects';
import { appConfig, api, httpRequest, helpers, notification } from 'src/logic';
import { setAuthParameters as setOnStore, clearAuthForm, setTokenValidationStatus } from 'src/logic/redux/auth/actions';
import authorized from 'src/logic/redux/auth/workers/authorized';
import types from 'src/logic/redux/auth/types';
const START = types.LOGIN_START;
const FAILED = types.LOGIN_FAILED;
const FAILED_NETWORK = types.LOGIN_FAILED_NETWORK;
const FINISHED = types.LOGIN_FINISHED;

function* auth0Login(email, password) {
  return yield httpRequest(api.authLogin, email, password);
}
function* parseLogin(email, password) {
  return yield httpRequest(api.login, email, password);
}
export default function* loginWorker(action) {
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
    request = yield auth0Login(email, password);
  } else {
    request = yield parseLogin(email, password);
  }
  if (request.error) {
    const errType = request.message === 'Network Error' ? FAILED_NETWORK : FAILED;
    yield put(setOnStore({ status: errType, error: request, loading: false }));
  } else {
    const { data } = request;
    yield put(setTokenValidationStatus(true));
    yield put(clearAuthForm());

    yield put(setOnStore({
      status: FINISHED,
      error: null,
      loading: false,
      data,
    }));

    yield authorized();
  }
}
