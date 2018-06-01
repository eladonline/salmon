import { call } from 'redux-saga/effects';
// import serverErrorHandle from 'src/util/error/serverErrorHandle';

function* makeRequest(...params) {
  return yield call(...params);
}

export default function* httpRequest(...params) {
  try {
    const res = yield makeRequest(...params);
    return res;
  } catch (error) {
    error.error = true;
    // yield serverErrorHandle(error);
    return error;
  }
}
