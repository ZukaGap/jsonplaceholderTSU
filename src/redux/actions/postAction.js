import * as actionTypes from "../actionType";
import axios from "axios";

export const searchData = (text) => {
  return (dispatch, getState) => {
    const { data } = getState().search;
    const resultData = data.filter((res) => res.title.includes(text));
    if (resultData.length) {
      dispatch(saveSearch(resultData));
    } else if (resultData.length === 0) {
      dispatch(emptySearch(text));
    }
  };
};

export const searchClear = () => {
  return {
    type: actionTypes.CLEAR_SEARCH_DATA,
  };
};

export const emptySearch = (text) => {
  return {
    type: actionTypes.SEARCH_DATA_EMPTY,
    searchString: text,
  };
};

export const saveSearch = (data) => {
  return {
    type: actionTypes.SEARCH_DATA_SAVE,
    data,
  };
};

export const loadPageData = () => {
  return (dispatch, getState) => {
    const Base_URL = "https://jsonplaceholder.typicode.com/posts";
    dispatch(dataReset());
    dispatch(dataLoading());
    axios
      .get(Base_URL)
      .then((response) => {
        dispatch(saveData(response.data));
        dispatch(dataLoadingSuccess());
      })
      .catch((error) => {
        dispatch(dataError(error));
      });
  };
};

export const saveData = (data) => {
  return {
    type: actionTypes.DATA_SAVE,
    data,
  };
};

export const dataReset = () => {
  return {
    type: actionTypes.DATA_RESET,
  };
};

export const dataLoadingSuccess = () => {
  return {
    type: actionTypes.DATA_LOADING_SUCCESS,
  };
};

export const dataLoading = () => {
  return {
    type: actionTypes.DATA_LOADING,
  };
};

export const dataError = (error) => {
  return {
    type: actionTypes.DATA_ERROR,
    error,
  };
};
