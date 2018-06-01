import { combineReducers } from 'redux';
import nav from 'src/logic/redux/nav/reducer';
import auth from 'src/logic/redux/auth/reducer';
import member from 'src/logic/redux/member/reducer';


const rootReducer = combineReducers({
  nav,
  auth,
  member,
});
// Redux persist, set here only reducer key that you want to persist
// Example : ['member']
const persistWhiteList = ['member'];


export default rootReducer;
export { persistWhiteList };
