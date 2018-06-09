import { select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { navigator, screens, appConfig, helpers } from 'src/logic';
import {getInitUrl} from 'src/logic/redux/auth/selectors'
export default function* navigateToMain(timestamp) {
  let screenTarget = screens.MAIN;
  if (appConfig.splashDelay > 0) {
    const timeUntilNow = (Date.now() - timestamp) / 1000;
    if (appConfig.splashDelay > timeUntilNow) {
      yield delay(appConfig.splashDelay - timeUntilNow);
    }
  }
  if(appConfig.navToInitUrlAfterAuthSucces) {
    const initUrl = yield select(getInitUrl);
    let isEmpty = helpers.isEmptyString(initUrl);
    let isAuthScreen = (initUrl === screens.APP_INTRO) || (initUrl === screens.LOGIN) || (initUrl === screens.REGISTER)
    if(!isEmpty && !isAuthScreen) {
      screenTarget = initUrl
    }
  }
  navigator.navigate(screenTarget)
};
