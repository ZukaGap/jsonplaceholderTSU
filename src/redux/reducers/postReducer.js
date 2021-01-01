import * as actionTypes from "../actionType";

const initialState = {
  data: [],
  searchData: [],
  error: null,
  loading: false,
  searchString: "",
  currentPost: {},
  currentPostComments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_RESET:
      return {
        ...state,
        data: [],
        searchData: [],
        error: null,
        loading: false,
        searchString: "",
        currentPost: {},
        currentPostComments: [],
      };
    case actionTypes.CLEAR_SEARCH_DATA:
      return {
        ...state,
        searchData: [],
        error: null,
        searchString: "",
      };
    case actionTypes.SEARCH_DATA_EMPTY:
      return {
        ...state,
        searchData: [],
        error: "Not Found",
        searchString: action.searchString,
      };
    case actionTypes.SEARCH_DATA_SAVE:
      return {
        ...state,
        searchData: action.data,
        error: null,
      };
    case actionTypes.DATA_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.DATA_SAVE:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DATA_LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.ANSWER_LOADING:
      return {
        ...state,
        loadingAnswer: true,
      };
    case actionTypes.RESET_POST_COMMENT:
      return {
        ...state,
        currentPostComments: [],
        loading: false,
        error: null,
      };
    case actionTypes.RESET_POST:
      return {
        ...state,
        currentPost: {},
        loading: false,
        error: null,
      };
    case actionTypes.SAVE_POST_DATA:
      return {
        ...state,
        currentPost: action.data,
        loading: false,
        error: null,
      };
    case actionTypes.SAVE_COMMENTS_DATA:
      return {
        ...state,
        currentPostComments: action.data,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
