// // import nav from './nav/reducer';
// import auth from 'src/logic/redux/auth/reducer';
// import member from 'src/logic/redux/member/reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from 'src/logic/redux/mouldifi/Settings';
import auth from 'src/logic/redux/auth/reducer';
import member from 'src/logic/redux/member/reducer';
const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
  auth,
  member
});

export default reducers;
