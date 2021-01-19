import { fork } from 'redux-saga/effects';

import homeSaga from '../containers/HomePage/home-saga';
import utilSaga from '../utils/util-saga';

export default function* rootSaga() {
  yield fork(homeSaga);
  yield fork(utilSaga);
}