import { put } from 'redux-saga/effects';
import { CardsData, HeroData, CardDataById } from '../actions';
import srvPrefix from './srv_req_prefix';
import urls from '../urls';

export function* WrkrGetData(action) {
  let api = [];
  let aURL = [];

  if (action.payload) {
    // user input in payload
    aURL = [srvPrefix('', action.payload)];
  } else {
    const urlO2A = Object.values(urls);
    aURL = urlO2A.map(url => srvPrefix(url));
  }

  const toReturn = yield aURL.map(url => {
    try {
      api = fetch(url).then(res => res.json());
      return api;
    } catch (e) {
      throw e;
    }
  });
  yield put(CardsData(toReturn));
}

export function* WrkrGetHeroData(action) {
  let apiBody;
  try {
    const api = yield fetch(srvPrefix(action.payload));
    apiBody = yield api.json();
  } catch (e) {
    throw e;
  }
  yield put(HeroData(apiBody));
}

export function* WrkrGetCardDataById(action) {
  let apiBody;
  let getDataById; // Im_To_Be_Function_that_Gets_Card_Data_By_Id
  try {
    const api = yield fetch(getDataById(action.payload));
    apiBody = yield api.json();
  } catch (e) {
    throw e;
  }
  yield put(CardDataById(apiBody));
}
