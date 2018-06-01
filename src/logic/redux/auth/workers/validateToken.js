import { select, put } from 'redux-saga/effects';
import { api, httpRequest } from 'src/logic';
import { getUserData } from 'src/logic/redux/auth/selectors';
import { setTokenValidationStatus } from 'src/logic/redux/auth/actions'

export default function* validateToken(token) {
  let tokenTocheck;
  let isValid = false;
  if (token) {
    tokenTocheck = token;
  } else {
    const userFromStore = yield select(getUserData);
    tokenTocheck = userFromStore && userFromStore.sessionToken;
  }
  if (tokenTocheck) {
    const request = yield httpRequest(api.validateToken, tokenTocheck);
    if (request.error) {
      isValid = false;
    } else {
      isValid = true;
    }
  }
  yield put(setTokenValidationStatus(isValid));
  return isValid;
}
