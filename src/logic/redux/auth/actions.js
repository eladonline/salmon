import types, { LOGOUT_FINISHED } from './types';

export const onAppLoad = payload => ({ type: types.ON_APP_LOAD, payload });
export const isTokenValid = () => ({ type: types.IS_TOKEN_VALID });
export const setTokenValidationStatus = payload => ({ type: types.SET_TOKEN_VALIDATIONS_STATUS, payload });
export const setInitUrl = payload => ({ type: types.SET_INIT_URL, payload });
export const login = payload => ({ type: types.LOGIN, payload });
export const register = payload => ({ type: types.REGISTER, payload });
export const resetPassword = payload => ({ type: types.RESET_PASSWORD, payload });
export const logout = () => ({ type: types.LOGOUT });
export const logoutFinished = () => ({ type: LOGOUT_FINISHED });
export const setAuthParameters = payload => ({ type: types.SET_AUTH_PARAMETERS, payload });
export const onAppLoadFinished = () => ({ type: types.ON_APP_LOAD_FINISHED });
export const setAuthForm = payload => ({ type: types.SET_AUTH_FORM, payload });
export const clearAuthForm = () => ({ type: types.CLEAR_AUTH_FORM });
export const setLastUser = payload => ({ type: types.SET_LAST_USER_IN_STORE, payload });
export const cleanLastUser = () => ({ type: types.CLEAN_LAST_USER });
export const setUserFromCookies = payload => ({ type: types.SET_USER_FROM_COOKIES, payload });
