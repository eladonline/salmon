import { put } from 'redux-saga/effects';
import { appConfig, api, httpRequest } from 'src/logic';
import { setAuthParameters as setOnStore, clearAuthForm, logout } from 'src/logic/redux/auth/actions';
import types from 'src/logic/redux/auth/types';

const START = types.RESET_PASSWORD_START;
const FAILED = types.RESET_PASSWORD_FAILED;
const FAILED_NETWORK = types.RESET_PASSWORD_FAILED_NETWORK;
const FINISHED = types.RESET_PASSWORD_FINISHED;

function* auth0ResetPassword(email) {
  return yield httpRequest(api.authResetPassword, email);
}
function* parseResetPassword(email) {
  return yield httpRequest(api.resetPassword, email);
}
export default function* resetPasswordWorker(action) {
  const payload = action.payload || {};
  const { email } = payload;
  yield put(setOnStore({ status: START, error: null, loading: true }));
  let request;
  if (appConfig.useAuthO) {
    request = yield auth0ResetPassword(email);
  } else {
    request = yield parseResetPassword(email);
  }
  if (request.error) {
    const errType = request.message === 'Network Error' ? FAILED_NETWORK : FAILED;
    yield put(setOnStore({ status: errType, error: request, loading: false }));
  } else {
    yield put(clearAuthForm());
    yield put(setOnStore({
      status: FINISHED,
      error: null,
      loading: false,
    }));
    yield put(logout());
  }
}
