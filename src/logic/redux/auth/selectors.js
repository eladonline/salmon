import { createSelector } from 'reselect';
import {getMemberData} from 'src/logic/redux/member/selectors'
import {appConfig} from 'src/logic'
export const getAuthState = state => state.auth;

export const getUserData = createSelector(getAuthState, authState => authState
  .get('user')
  .get('data')
  .toJS());
export const getAuthStatus = createSelector(getAuthState, authState => authState.get('user').get('status'));
export const getAuthError = createSelector(getAuthState, authState => authState.get('user').get('error'));
export const getAuthLoading = createSelector(getAuthState, authState => authState.get('user').get('loading'));
export const getAuthForm = createSelector(getAuthState, authState => authState.get('form').toJS());
export const getLastUser = createSelector(getAuthState, authState => authState.get('lastUser').toJS());
export const getTokenValidationStatus = createSelector(getAuthState, authState => authState.get('isTokenValid'));
export const getInitUrl = createSelector(getAuthState, authState => authState.get('initUrl'));

export const isAuthUser = createSelector([getUserData, getMemberData, getTokenValidationStatus], (userData, memberData, isTokenValid) => {
  let status = false;
  let userId = userData.objectId
  let memberId = memberData.objectId
  if(appConfig.openAppOnlyAfterGetMember) {
    status = (memberId && userId) || false;
  } else{
    status = (userId && true) || false;
  }
  if(status && appConfig.checkIfTokenValidOnLoad) {
    status = isTokenValid || false;
  }
  return status
});

const isOnAppLoadFinished = createSelector(getAuthState, authState => authState.get('isOnAppLoadFinished'));

export const onLoadFinished = createSelector([isAuthUser, isOnAppLoadFinished], (authUser, isOnAppLoadFinished) => {
  if(appConfig.openAppAfterOnAppLoad) {
    return isOnAppLoadFinished
  }else{
    return isAuthUser || isOnAppLoadFinished
  }
});
