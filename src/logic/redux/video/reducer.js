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
    case types.VIDEO_ID:
      return state.set('activeVideo', action.payload);
    default:
      return state;
  }
}
