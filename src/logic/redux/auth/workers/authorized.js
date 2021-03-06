import { select } from 'redux-saga/effects';
import { storage, appConfig, api } from 'src/logic';
import {config as reactParseConfig} from 'react-parse'
import { getUserData } from 'src/logic/redux/auth/selectors';
import onMemberEnterToApp from 'src/logic/redux/member/workers/onMemberEnterToApp';
import { setUserInStorage } from './persist';
import navigateToMain from './navigateToMain';

export default function* authorized(timestamp) {
  const userFromStore = yield select(getUserData);
  yield setUserInStorage(userFromStore);
  api.setSessionToken(userFromStore.sessionToken);
  reactParseConfig.setSessionToken(userFromStore.sessionToken);
  yield storage.save(appConfig.userSignUpToAppFlagKey, true);
  yield onMemberEnterToApp(timestamp);
  if (!appConfig.openAppOnlyAfterGetMember) {
    yield navigateToMain(timestamp)
  }
}
