import types from './types';

export const navigate = payload => ({ type: types.NAVIGATE, payload });
export const replaceTab = payload => ({ type: types.REPLACE_TAB, payload });
export const back = payload => ({ type: 'Navigation/BACK', payload });
export const toggleDrawer = () => ({ type: types.TOGGLE_DRAWER });
