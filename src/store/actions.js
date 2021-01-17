import {
  DEFAULT_ACTION,
  NEWS_FETCH,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAIL,
} from './constants';

export function defaultAction() {
  return {
      type: DEFAULT_ACTION,
  };
}

export function getNewsAction() {
  return {
    type: NEWS_FETCH
  }
}

export function getNewsSuccess() {
  return {
    type: NEWS_FETCH_SUCCESS
  }
}

export function getNewsFail() {
  return {
    type: NEWS_FETCH_FAIL
  }
}