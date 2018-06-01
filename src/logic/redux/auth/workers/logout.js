import { put, select } from 'redux-saga/effects';
import { appConfig, api, httpRequest, screens, navigator } from 'src/logic';
import { logoutFinished, setLastUser } from 'src/logic/redux/auth/actions';
import { getUserData } from 'src/logic/redux/auth/selectors';
import { clearUserInStorage, setLastUserInStorage } from './persist';

function* auth0Logout(email) {
  return yield httpRequest(api.logout, email);
}
function* parseLogout(email) {
  return yield httpRequest(api.logout, email);
}
export default function* logoutWorker() {
  const userFromStore = yield select(getUserData);
  delete userFromStore.sessionToken;
  if (appConfig.useAuthO) {
    yield auth0Logout();
  } else {
    yield parseLogout();
  }
  api.removeSessionToken();
  yield clearUserInStorage();
  yield put(logoutFinished());
  if (appConfig.persistLastUser) {
    yield put(setLastUser(userFromStore));
    yield setLastUserInStorage(userFromStore);
  }
  if (appConfig.alwaysNavigateToAppIntro) {
    navigator.navigate(screens.APP_INTRO);
  } else {
    navigator.navigate(screens.LOGIN);
  }
}
