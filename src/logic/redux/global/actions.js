import types from './types';

export const toggleDrawer = payload => ({ type: types.TOGGLE_DRAWER, payload });
export const setDrawerValue = payload => ({ type: types.SET_DRAWER_VALUE, payload });
