import { createStore, applyMiddleware, compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from 'src/logic/redux/reducer/web/rootReducerSsr';
import rootSaga from 'src/logic/redux/saga/web/rootSagaSsr';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];


function bindMiddleware(clientMiddleware) {
  const middleware = applyMiddleware(...clientMiddleware);
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      : compose;

  return composeEnhancers(middleware);
}

export function configureStore() {
  const middleware = bindMiddleware(middlewares)
  const store = createStore(reducers, middleware);

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  store.runSagaTask()
  return store;
}

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga({ async: true })(BaseComponent))
}
