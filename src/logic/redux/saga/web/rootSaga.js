import { all, call } from 'redux-saga/effects';
import memberWatcher from 'src/logic/redux/member/watcher';
import authWatcher from 'src/logic/redux/auth/watcher';
import getMembersDataWatcher from 'src/logic/redux/members/watcher'
import { parseWatcher } from 'react-parse'
function* rootSaga() {
  yield all([call(memberWatcher, 'member'),
    call(authWatcher, 'auth'),
    call(parseWatcher, 'parseWatcher'),
    call(getMembersDataWatcher, 'members')]);
}

export default rootSaga;
