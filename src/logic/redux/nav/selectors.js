import { createSelector } from 'reselect';
import { getActiveScreen as _getActiveScreen, getActiveTab } from 'src/router/helpers';

export const getNavState = state => state.nav;

export const getActiveScreenName = createSelector(getNavState, (navState) => {
  const activeScreen = _getActiveScreen(navState);
  return activeScreen.routeName;
});
export const getActiveTabName = createSelector(getNavState, (navState) => {
  const activeTab = getActiveTab(navState);
  return activeTab.key;
});
export const getActiveScreen = createSelector(getNavState, (navState) => {
  const activeScreen = _getActiveScreen(navState);
  return activeScreen;
});
