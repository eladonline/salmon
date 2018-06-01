import { takeEvery } from 'redux-saga/effects';
import types from './types';

// Import all workers from Workers Folder
import fetchMember from './workers/fetchMember';

function* memberWatcher() {
  yield takeEvery(types.FETCH_MEMBER, fetchMember);
}
export default memberWatcher;
