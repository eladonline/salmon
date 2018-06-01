import { all, call } from 'redux-saga/effects';
import memberWatcher from 'src/logic/redux/member/watcher';
import authWatcher from 'src/logic/redux/auth/watcher';

function* rootSaga() {
  yield all([call(memberWatcher, 'member'), call(authWatcher, 'auth')]);
}

export default rootSaga;
