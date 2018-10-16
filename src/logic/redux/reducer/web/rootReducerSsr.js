import { combineReducers } from 'redux';
import Auth from 'src/logic/redux/isomorphic/auth/reducer';
import App from 'src/logic/redux/isomorphic/app/reducer';
// import Mails from 'src/logic/redux/isomorphic/mail/reducer';
// import Calendar from 'src/logic/redux/isomorphic/calendar/reducer';
// import Notes from 'src/logic/redux/isomorphic/notes/reducer';
// import Todos from 'src/logic/redux/isomorphic/todos/reducer';
// import Contacts from 'src/logic/redux/isomorphic/contacts/reducer';
// import Cards from 'src/logic/redux/isomorphic/card/reducer';
// import Ecommerce from 'src/logic/redux/isomorphic/ecommerce/reducer';
import ThemeSwitcher from 'src/logic/redux/isomorphic/themeSwitcher/reducer';
// import LanguageSwitcher from 'src/logic/redux/isomorphic/languageSwitcher/reducer';
// import YoutubeSearch from 'src/logic/redux/isomorphic/youtubeSearch/reducers';
// import githubSearch from 'src/logic/redux/isomorphic/githubSearch/reducers';
// import auth from 'src/logic/redux/auth/reducer';
// import member from 'src/logic/redux/member/reducer';
// import DevReducers from '../customApp/redux/reducers';

export default combineReducers({
  // auth,
  // member,
  Auth,
  App,
  ThemeSwitcher
  // LanguageSwitcher,
  // Mails,
  // Calendar,
  // YoutubeSearch,
  // githubSearch,
  // Cards,
  // Ecommerce,
  // Notes,
  // Todos,
  // Contacts,
  // ...DevReducers
});
