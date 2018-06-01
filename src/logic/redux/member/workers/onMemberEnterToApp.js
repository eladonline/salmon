import { select } from 'redux-saga/effects';
// import {appConfig, api, httpRequest} from 'src/logic';
import { getUserData } from 'src/logic/redux/auth/selectors';
import { getMemberData } from 'src/logic/redux/member/selectors';
import { appConfig } from 'src/logic';
import fetchMember from './fetchMember';
import navigateToMain from 'src/logic/redux/auth/workers/navigateToMain';

export default function* onMemberEnterToApp(timestamp) {
  const userFromStore = yield select(getUserData);
  yield fetchMember();
  const memberData = yield select(getMemberData);
  if (!memberData) {
    console.warn('Need to handle miising member data in store');
  } else {
    if (appConfig.openAppOnlyAfterGetMember) {
      yield navigateToMain(timestamp)
    }
    console.log('get member data by user id', userFromStore);
  }
}
