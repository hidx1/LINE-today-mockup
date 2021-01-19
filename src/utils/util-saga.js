import { takeLatest, put } from 'redux-saga/effects';
import {
  TAB_UPDATE,
  TAB_UPDATE_SUCCESS,
  TAB_UPDATE_FAIL,
} from '../store/constants';

export function* updateTab({ tabNum }) {
  yield put({
    type: TAB_UPDATE_SUCCESS,
    activeTab: tabNum,
  });
}

export default function* utilSaga() {
  yield takeLatest(TAB_UPDATE, updateTab);
}