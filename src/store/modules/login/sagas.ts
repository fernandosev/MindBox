import { takeLatest, call, put, all, select } from 'redux-saga/effects';

export function* login() {
  yield console.log('sagas OK');
}

export default all([takeLatest('login/setToken', login)]);
