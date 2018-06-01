import { createSelector } from 'reselect';

export const getMemberState = state => state.member;

export const getMemberData = createSelector(getMemberState, memberState => memberState
  .get('member')
  .get('data')
  .toJS());

export const getMemberId = createSelector(getMemberData, memberData => memberData.objectId);
