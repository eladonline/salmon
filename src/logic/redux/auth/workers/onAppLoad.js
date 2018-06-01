import { put, call } from 'redux-saga/effects';
import { setAuthParameters as setOnStore, onAppLoadFinished } from 'src/logic/redux/auth/actions';
import types from 'src/logic/redux/auth/types';
import { appConfig } from 'src/logic';
import authorized from './authorized';
import unauthorized from './unauthorized';
import { getUserFromStorage, clearUserInStorage } from './persist';
import validateToken from './validateToken';

const FINISHED = types.USER_PERSIST_FROM_STORAGE;

export default function* onAppLoad(action) {
  // yield call(clearUserInStorage); // -- enable for test
  // timestamp - help us to navigate from splash screen after X ms
  const timestamp = action.payload;
  let userFromStorage = yield call(getUserFromStorage);
  if (userFromStorage && appConfig.checkIfTokenValidOnLoad) {
    const checkStatus = yield validateToken(userFromStorage.sessionToken);
    if (!checkStatus) {
      userFromStorage = null;
      yield call(clearUserInStorage);
    }
  }
  if (userFromStorage) {
    yield put(setOnStore({
      status: FINISHED,
      error: null,
      loading: false,
      data: userFromStorage,
    }));
    yield authorized(timestamp);
  } else {
    yield unauthorized(timestamp);
  }
  yield put(onAppLoadFinished());
}
