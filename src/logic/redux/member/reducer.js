import { Map } from 'immutable';
import { LOGOUT_FINISHED } from 'src/logic/redux/auth/types';
import types from './types';
import initialState from './initial';

export default function memberReducer(state = initialState, action) {
  const { payload } = action;
  const {
    status, data, error, loading,
  } = payload || {};
  let key;
  switch (action.type) {
    case LOGOUT_FINISHED:
      return initialState;
    case types.SET_MEMBER: {
      if (action.type === types.SET_MEMBER) {
        key = 'member';
      }
      let nextState = state;
      if ('status' in payload) {
        nextState = nextState.setIn([key, 'status'], status);
      }
      if ('data' in payload) {
        nextState = nextState.setIn([key, 'data'], Map(data));
      }
      if ('error' in payload) {
        nextState = nextState.setIn([key, 'error'], error);
      }
      if ('loading' in payload) {
        nextState = nextState.setIn([key, 'loading'], loading);
      }
      return nextState;
    }
    default:
      return state;
  }
}
