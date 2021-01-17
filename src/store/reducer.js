import {
  DEFAULT_ACTION,
  NEWS_FETCH,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAIL
} from './constants';

const initialState = {
  news: [],
  categories: [],
  error: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case NEWS_FETCH:
      return state;
    case NEWS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        news: action.news,
        categories: action.categories,
      });
    case NEWS_FETCH_FAIL:
      return Object.assign({}, state, {
        error: action.error.message
      });
    default:
      return state;
  }
}

export default rootReducer;