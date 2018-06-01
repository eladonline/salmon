import { put, select } from 'redux-saga/effects';
import { api, httpRequest, helpers } from 'src/logic';

import { getUserData } from 'src/logic/redux/auth/selectors';
import { setMember as setOnStore } from '../actions';
import types from '../types';

const START = types.FETCH_MEMBER_START;
const FAILED = types.FETCH_MEMBER_FAILED;
const FAILED_NETWORK = types.FETCH_MEMBER_FAILED_NETWORK;
const FINISHED = types.FETCH_MEMBER_FINISHED;

export default function* fetchMember() {
  const userFromStore = yield select(getUserData);
  if (!userFromStore) {
    console.warn('fetchMember need to handle this error, no userFromStore');
    return;
  }
  yield put(setOnStore({ status: START, error: null, loading: true }));
  const query = [{ user: { objectId: userFromStore.objectId, __type: 'Pointer', className: '_User' } }];
  const res = yield httpRequest(api.query, 'Member', query);
  if (res.error) {
    const errType = res.message === 'Network Error' ? FAILED_NETWORK : FAILED;
    yield put(setOnStore({ status: errType, error: res, loading: false }));
  } else {
    const data = helpers.objDig(res, 'data.results.0');
    yield put(setOnStore({
      status: FINISHED, error: null, loading: false, data,
    }));
  }
}
