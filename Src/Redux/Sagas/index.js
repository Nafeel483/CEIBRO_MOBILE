import { fork, all } from 'redux-saga/effects';
import { authWatcher } from './auth/index';
import { chatWatcher } from './chat/index';
import { usersWatcher } from './users/index';
import { projectWatcher } from './project/index';

export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(chatWatcher),
    fork(usersWatcher),
    fork(projectWatcher),
  ])
}