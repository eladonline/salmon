/**
 * # redux > TEMPLATE > reducer.js
 *
 * This file contain all TEMPLATE Reducers
 */

// Import all the types
import types from './types';
import InitialState from './InitialState';

const { Map } = require('immutable');
// Import TEMPLATE InitialState

const initialState = new InitialState();

export default function ApiRequest(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);
  switch (action.type) {
    case types.SRV_DATA:
      return state.set('results', action.payload);
    case types.HERO_DATA:
      return state.set('heroData', action.payload);
    case types.CARD_DATA_BY_ID:
      return state.set('CardDataById', action.payload);
    default:
      return state;
  }
}

