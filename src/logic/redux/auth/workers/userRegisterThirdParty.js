import { put } from 'redux-saga/effects';
import { api, httpRequest } from 'src/logic';
import { setAuthParameters as setOnStore, clearAuthForm } from 'src/logic/redux/auth/actions';
import authorized from 'src/logic/redux/auth/workers/authorized';
import types from 'src/logic/redux/auth/types';

const START = types.LOGIN_START;
const FAILED = types.LOGIN_FAILED;
const FAILED_NETWORK = types.LOGIN_FAILED_NETWORK;
const FINISHED = types.LOGIN_FINISHED;
export default function* userRegisterThirdParty(action) {
  const { authData } = action.payload
  yield put(setOnStore({ status: START, error: null, loading: true }));
  const request = yield httpRequest(api.thirdPartyAuth, authData)
  if (request.error) {
    const errType = request.message === 'Network Error' ? FAILED_NETWORK : FAILED;
    yield put(setOnStore({ status: errType, error: request, loading: false }));
  } else {
    const data = request.data;
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
