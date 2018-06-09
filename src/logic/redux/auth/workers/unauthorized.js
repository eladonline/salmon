import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { setLastUser } from 'src/logic/redux/auth/actions';
import { isMobile, appConfig, storage, screens, navigator, isPrivate } from 'src/logic';
import { getLastUserFromStorage } from './persist';
import {getInitUrl} from 'src/logic/redux/auth/selectors'

export default function* unauthorized(timestamp) {
  let isUserSignUpInThePast;
  let initUrl
  if (!appConfig.alwaysNavigateToAppIntro) {
    isUserSignUpInThePast = yield storage.get(appConfig.userSignUpToAppFlagKey);
  }
  if (appConfig.splashDelay > 0) {
    const timeUntilNow = Date.now() - timestamp;
    if (appConfig.splashDelay > timeUntilNow) {
      yield delay(appConfig.splashDelay - timeUntilNow);
    }
  }
  if (appConfig.persistLastUser) {
    const lastUserFromStorage = yield call(getLastUserFromStorage);
    if (lastUserFromStorage) {
      yield put(setLastUser(lastUserFromStorage));
    }
  }
  if(!isMobile) {
    initUrl = yield select(getInitUrl);
  }
  if(!isPrivate || isPrivate(initUrl)) {
    if (isUserSignUpInThePast) {
      navigator.navigate(screens.LOGIN);
    } else {
      navigator.navigate(screens.APP_INTRO);
    }
  }
}
