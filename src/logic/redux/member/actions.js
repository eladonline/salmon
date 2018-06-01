import types from './types';

export const createMember = payload => ({ type: types.CREATE_MEMBER, payload });
export const fetchMember = payload => ({ type: types.FETCH_MEMBER, payload });
export const setMember = payload => ({ type: types.SET_MEMBER, payload });
export const clearMember = payload => ({ type: types.CLEAR_MEMBER, payload });
export const refreshMemberData = () => ({ type: types.REFRESH_MEMBER_DATA });
/**
 * updateMemberFields
 * @param {*} payload array of object {key: 'KEY_TO_UPDATE', value: 'NEW_VALUE'}
 */
export const updateMemberFields = payload => ({ type: types.UPDATE_MEMBER_FIELDS, payload });
