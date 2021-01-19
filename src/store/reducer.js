import {
  DEFAULT_ACTION,
  NEWS_FETCH,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAIL,
  TAB_UPDATE,
  TAB_UPDATE_SUCCESS,
  TAB_UPDATE_FAIL,
} from './constants';

const initialState = {
  news: [],
  categories: [],
  error: null,
  activeTab: 0,
};

function rootReducer(state = initialState, action) {
  console.log(action.type);
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
    case TAB_UPDATE:
      return state;
    case TAB_UPDATE_SUCCESS:
      console.log(action);
      return Object.assign({}, state, {
        activeTab: action.activeTab
      });
    case TAB_UPDATE_FAIL:
      return state;
    default:
      return state;
  }
}

export default rootReducer;