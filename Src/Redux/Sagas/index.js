import { fork, all } from 'redux-saga/effects';
import { authWatcher } from './auth/index';
import { chatWatcher } from './chat/index';

export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(chatWatcher),
  ])
}