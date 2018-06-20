// // import nav from './nav/reducer';
// import auth from 'src/logic/redux/auth/reducer';
// import member from 'src/logic/redux/member/reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from 'src/logic/redux/mouldifi/Settings';
import auth from 'src/logic/redux/auth/reducer';
import member from 'src/logic/redux/member/reducer';
import members from 'src/logic/redux/members/reducer';
import { parseReducer } from 'react-parse';
import { reducer as formReducer } from 'redux-form'
import {reducer as burgerMenu} from 'redux-burger-menu';
import videoCurrDisplay from './video/reducer';
import apiData from './api_request/reducer';

const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
  auth,
  member,
  members,
  parse: parseReducer,
  form: formReducer,
  burgerMenu,
  videoCurrDisplay,
  apiData,

});

export default reducers;
