import types from './types';
import {
  WrkrGetData,
  WrkrGetHeroData,
  WrkrGetCardDataById,
} from './sagaWorkers/getSrvData';
import { takeEvery } from 'redux-saga/effects';

export function* homeDataRequest() {
  yield takeEvery(types.SAGA_SRV_DATA, WrkrGetData);
}

export function* heroDataRequest() {
  yield takeEvery(types.SAGA_HERO_DATA, WrkrGetHeroData);
}

export function* cardDataByIdRequest() {
  yield takeEvery(types.SAGA_CARD_DATA_BY_ID, WrkrGetCardDataById);
}
