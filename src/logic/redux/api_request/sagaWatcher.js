/**
 * # redux > apiRequest > sagaWatcher.js
 *
 * This file contain all apiRequest Watcher
 */

import { takeEvery } from 'redux-saga/effects';

import types from './types';

import {
  WrkrGetData,
  WrkrGetHeroData,
  WrkrGetCardDataById,
} from './sagaWorkers/getSrvData';

function* apiRequestWatcher() {
  yield takeEvery(types.SAGA_SRV_DATA, WrkrGetData);
  yield takeEvery(types.SAGA_HERO_DATA, WrkrGetHeroData);
  yield takeEvery(types.SAGA_CARD_DATA_BY_ID, WrkrGetCardDataById);
}

export default apiRequestWatcher;
