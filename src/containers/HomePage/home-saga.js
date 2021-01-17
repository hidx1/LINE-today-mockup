import { takeLatest, call, put, } from 'redux-saga/effects';
import { 
  NEWS_FETCH, NEWS_FETCH_FAIL, NEWS_FETCH_SUCCESS,
} from '../../store/constants';

import axios from 'axios';

function getArticles() {
  return new Promise(resolve => {
    // const res = axios.get(`https://cors-anywhere.herokuapp.com/today.line.me/id/portaljson`, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'X-Requested-With': 'XMLHttpRequest',
    //   }
    // });
    const res = axios.get(`https://today.line.me/id/portaljson`, {
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'X-Requested-With': 'XMLHttpRequest',
      // }
    });
    resolve(res);
  });
}

export function* getLINENews() {
  try {
    const getNewsArticles = yield call(getArticles);
    if (getNewsArticles.status === 200) {
      yield put({
        type: NEWS_FETCH_SUCCESS,
        categories: getNewsArticles.data.result.categoryList,
        news: getNewsArticles.data.result.categories,
      });
    } else {
      yield put({
        type: NEWS_FETCH_FAIL,
        error: getNewsArticles.data
      });
    }
  } catch(e) {
    yield put({
      type: NEWS_FETCH_FAIL,
      error: e
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEWS_FETCH, getLINENews);
}