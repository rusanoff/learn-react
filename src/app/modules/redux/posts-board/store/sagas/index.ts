import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_POSTS, REQUEST_POSTS } from '../types';
import { hideLoader, showAlert, showLoader } from '../actions';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const posts = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload: posts });
    yield put(hideLoader());
  } catch (error) {
    yield put(showAlert(`Ошибка сервера | ${error.message}`) as any);
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch('ttps://jsonplaceholder.typicode.com/posts?_limit=5');
  return await response.json();
}
