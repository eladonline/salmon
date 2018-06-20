import { all, call } from 'redux-saga/effects';

import memberWatcher from 'src/logic/redux/member/watcher';
import authWatcher from 'src/logic/redux/auth/watcher';
import { parseWatcher } from 'react-parse'
import getMembersDataWatcher from 'src/logic/redux/members/watcher'
import apiRequestWatcher from './api_request/sagaWatcher';

function* rootSaga() {
  yield all([
    call(memberWatcher, 'member'),
    call(authWatcher, 'auth'),
    call(parseWatcher, 'parseWatcher'),
    call(getMembersDataWatcher, 'members'),
    call(apiRequestWatcher, 'apiRequest')
  ]);
}

export default rootSaga;
