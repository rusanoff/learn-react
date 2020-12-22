import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { forbiddenWordsMiddleware } from './middlewares';
import { sagaWatcher } from './sagas';

const saga = createSagaMiddleware();

export const store  = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    saga,
    forbiddenWordsMiddleware,
  ),
  (globalThis as any).__REDUX_DEVTOOLS_EXTENSION__ && (globalThis as any).__REDUX_DEVTOOLS_EXTENSION__(),
));

saga.run(sagaWatcher);

export type { PostsStore } from './reducers';
