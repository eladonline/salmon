import { NavigationActions, DrawerActions } from 'react-navigation';
import { AppNavigator, screens } from 'src/router/index';
import types from './types';

const firstNavAction = AppNavigator.router.getActionForPathAndParams(screens.SPLASH);
const initialState = AppNavigator.router.getStateForAction(firstNavAction);

export default function nav(state = initialState, action) {
  const { payload } = action;
  const { routeName, params } = payload || {};
  let nextState;
  switch (action.type) {
    case types.NAVIGATE:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName, params }),
        state,
      );
      break;
    case types.REPLACE_TAB:
      nextState = AppNavigator.router.getStateForAction({ type: 'Navigation/POP' }, state);
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName, params }),
        nextState,
      );
      break;
    case 'Navigation/BACK':
      nextState = AppNavigator.router.getStateForAction({ type: 'Navigation/BACK' }, state);
      break;
    case types.TOGGLE_DRAWER:
      nextState = AppNavigator.router.getStateForAction(DrawerActions.toggleDrawer(), state);
      break;
    case 'Navigation/CLOSE_DRAWER':
      nextState = AppNavigator.router.getStateForAction(DrawerActions.closeDrawer(), state);
      break;
    case 'Navigation/OPEN_DRAWER':
      nextState = AppNavigator.router.getStateForAction(DrawerActions.openDrawer(), state);
      break;
    default:
      return state;
  }
  return nextState || state;
}
