import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import noteSagas from './notes/saga';
import mailSagas from './mail/saga';
import todoSagas from './todos/saga';
import contactSagas from './contacts/saga';
import youtubeSearchSagas from './youtubeSearch/sagas';
import githubSearchSagas from './githubSearch/sagas';
import ecommerceSaga from './ecommerce/saga';
import memberWatcher from 'src/logic/redux/member/watcher';
import authWatcher from 'src/logic/redux/auth/watcher';
export default function* rootSaga(getState) {
  yield all([
    memberWatcher(),
    authWatcher(),
    authSagas(),
    noteSagas(),
    mailSagas(),
    todoSagas(),
    contactSagas(),
    youtubeSearchSagas(),
    githubSearchSagas(),
    ecommerceSaga(),
  ]);
}