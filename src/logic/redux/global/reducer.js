import types from './types';
import initialState from './initial';

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.isDrawerOpen);
    case types.SET_DRAWER_VALUE:
      return state.set('isDrawerOpen', action.payload);
    default:
      return state;
  }
}
