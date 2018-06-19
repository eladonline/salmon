import { applyMiddleware, compose, createStore } from 'redux';
//import reducers from '../reducers/index';
import reducers from 'src/logic/redux/reducer/web/rootReducer';
import rootSaga from 'src/logic/redux/saga/web/rootSaga';

import createHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';
//import rootSaga from '../sagas/index';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routeMiddleware];

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, initialState,
    composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    //        module.hot.accept('../reducers/index', () => {
    module.hot.accept('../../reducer/web/rootReducer', () => {
      const nextRootReducer = require('../../reducer/web/rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  console.log('store ', store);
  return store;
}
export { history };
