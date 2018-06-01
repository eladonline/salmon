import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { appConfig } from 'src/logic';
import { composeWithDevTools } from 'redux-devtools-extension';
import immutableTransform from 'redux-persist-transform-immutable';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import rootReducer, { persistWhiteList } from 'src/logic/redux/reducer/mobile/rootReducer';
import rootSaga from 'src/logic/redux/saga/mobile/rootSaga';
import addNetworkLogsToDebugger from './networkDebugger';

let store;
let persistor;
let _persistReducer;
let persistConfig;

// Bind react navigation with redux
const navMiddleware = createReactNavigationReduxMiddleware(
  'root', // Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
  state => state.nav,
);
export const navListener = createReduxBoundAddListener('root');

// Apply middleware with/without dev mode
const bindMiddleware = (middleware) => {
  const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (composeEnhancers) {
    addNetworkLogsToDebugger();
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, navMiddleware];

// Create Store
const isStorePersist = appConfig.useReduxPersist && persistWhiteList && persistWhiteList.length;

if (isStorePersist) {
  // With Redux Persist
  persistConfig = {
    transforms: [immutableTransform()],
    key: 'root',
    storage: AsyncStorage,
    whitelist: persistWhiteList,
  };
  _persistReducer = persistReducer(persistConfig, rootReducer);
  store = createStore(_persistReducer, bindMiddleware(middleware));
  persistor = persistStore(store);
} else {
  // Without Redux Persist
  store = createStore(rootReducer, bindMiddleware(middleware));
}

// Dev only, help to keep hot reloading
if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('../../reducer/mobile/rootReducer').default;
    if (isStorePersist) {
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    } else {
      store.replaceReducer(nextRootReducer);
    }
  });
}

sagaMiddleware.run(rootSaga);

export default store;
export { persistor };
/* eslint global-require: "off" */
/* eslint import/no-mutable-exports: "off" */
