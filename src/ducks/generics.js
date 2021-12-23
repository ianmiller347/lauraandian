import fetch from 'cross-fetch';
const domain = 'https://lauraandian.wedding/manage';

export const getTypes = (identifier) => ({
  INIT: `${identifier}__INIT`,
  SUCCESS: `${identifier}__SUCCESS`,
  ERROR: `${identifier}__ERROR`,
});

const defaultState = {
  isLoading: false,
  lastRefreshed: null,
  data: null,
  error: false,
  errorMessage: null,
};

export const getReducers = (identifier) => {
  const types = getTypes(identifier);

  return (state = defaultState, action) => {
    switch (action.type) {
      case types.INIT:
        return {
          ...state,
          isLoading: true,
        };
      case types.SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
          error: false,
          errorMessage: null,
          lastRefreshed: new Date(),
        };
      case types.ERROR:
        return {
          ...state,
          isLoading: false,
          data: null,
          error: true,
          errorMessage: action.payload,
          lastRefreshed: null,
        };
      default:
        return state;
    }
  };
};

const receiveAsyncRequest = (response, identifier) => {
  return {
    type: getTypes(identifier).SUCCESS,
    payload: response,
  };
};

const receiveErrorRequest = (error, identifier) => {
  return {
    type: getTypes(identifier).ERROR,
    payload: error, // check to see if this should be error.something instead
  };
};

export const getAsyncRequest = (endpoint, identifier) => {
  return (dispatch) => {
    dispatch({
      type: getTypes(identifier).INIT,
    });
    return fetch(`${domain}/${endpoint}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveAsyncRequest(json, identifier)))
      .catch((error) => {
        console.log(`Error fetching for ${identifier}`, error);
        dispatch(receiveErrorRequest(error, identifier));
      });
  };
};
