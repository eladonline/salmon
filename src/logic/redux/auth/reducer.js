import types, { LOGOUT_FINISHED } from './types';
import initialState from './initial';

const { Map } = require('immutable');

export default function authReducer(state = initialState, action) {
  const { payload } = action;
  const {
    status, data, error, loading,
  } = payload || {};
  let nextState;
  switch (action.type) {
    case LOGOUT_FINISHED:
      // We want to keep this initUrl and isOnAppLoadFinished parameters after logout
      return initialState.set('initUrl', state.get('initUrl')).set('isOnAppLoadFinished', true)
    case types.SET_AUTH_PARAMETERS: {
      nextState = state;
      if ('status' in payload) {
        nextState = nextState.setIn(['user', 'status'], status);
      }
      if ('data' in payload) {
        nextState = nextState.setIn(['user', 'data'], Map(data));
      }
      if ('error' in payload) {
        nextState = nextState.setIn(['user', 'error'], error);
      }
      if ('loading' in payload) {
        nextState = nextState.setIn(['user', 'loading'], loading);
      }
      return nextState;
    }
    case types.SET_AUTH_FORM: {
      return state.set('form', Map(action.payload));
    }
    case types.CLEAR_AUTH_FORM: {
      return state.set('form', Map());
    }
    case types.SET_LAST_USER_IN_STORE: {
      return state.set('lastUser', Map(action.payload));
    }
    case types.CLEAN_LAST_USER: {
      return state.set('lastUser', Map());
    }
    case types.SET_INIT_URL: {
      const newRoute = action.payload
      if(newRoute === '/signin' || newRoute === '/signup') {
        return state
      }
      return state.set('initUrl', newRoute);
    }
    case '@@router/LOCATION_CHANGE': { // react-router change route
      const newRoute = action.payload.pathname
      if(newRoute === '/signin' || newRoute === '/signup') {
        return state
      }
      return state.set('initUrl', newRoute)
    }
    case types.SET_TOKEN_VALIDATIONS_STATUS: {
      return state.set('isTokenValid', action.payload);
    }
    case types.ON_APP_LOAD_FINISHED: {
      return state.set('isOnAppLoadFinished', true);
    }
    case types.SET_USER_FROM_COOKIES: {
      return state.set('userFromCookies', action.payload);
    }
    default:
      return state;
  }
}
