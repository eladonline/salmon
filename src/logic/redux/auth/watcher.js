import { takeEvery } from 'redux-saga/effects';
import types from './types';

import onAppLoad from './workers/onAppLoad';
import authorized from './workers/authorized';
import unauthorized from './workers/unauthorized';
import login from './workers/login';
import register from './workers/register';
import resetPassword from './workers/resetPassword';
import logout from './workers/logout';
import cleanLastUser from './workers/cleanLastUser';
import validateToken from './workers/validateToken';
import userRegisterThirdParty from './workers/userRegisterThirdParty';

function* authWatcher() {
  yield takeEvery(types.ON_APP_LOAD, onAppLoad);
  yield takeEvery(types.AUTHORIZED, authorized);
  yield takeEvery(types.UNAUTHORIZED, unauthorized);
  yield takeEvery(types.LOGIN, login);
  yield takeEvery(types.REGISTER, register);
  yield takeEvery(types.RESET_PASSWORD, resetPassword);
  yield takeEvery(types.LOGOUT, logout);
  yield takeEvery(types.CLEAN_LAST_USER, cleanLastUser);
  yield takeEvery(types.IS_TOKEN_VALID, validateToken);
  yield takeEvery(types.USER_REGISTER_WITH_THIRD_PARTY, userRegisterThirdParty);
}
export default authWatcher;
