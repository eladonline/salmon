import { createStore, applyMiddleware } from 'redux';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from 'src/logic/redux/reducer/web/rootReducerSsr';
import rootSaga from 'src/logic/redux/saga/web/rootSagaSsr';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

export function configureStore() {
  const store = createStore(reducers, applyMiddleware(...middlewares));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  store.runSagaTask()
  return store;
}

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga({ async: true })(BaseComponent))
}
