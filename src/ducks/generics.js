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
  maxNumPages: 1,
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
          data: action.payload.data,
          error: false,
          errorMessage: null,
          lastRefreshed: new Date(),
          maxNumPages: action.payload?.maxNumPages ?? 1,
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
  return async (dispatch) => {
    dispatch({
      type: getTypes(identifier).INIT,
    });

    const response = await fetch(`${domain}/${endpoint}`);
    const responseData = await response.json();
    const maxNumPages = response?.headers?.map?.['x-wp-totalpages'] ?? '1';

    if (responseData) {
      return dispatch(
        receiveAsyncRequest(
          { data: responseData, maxNumPages: parseInt(maxNumPages, 10) },
          identifier
        )
      );
    }

    if (!response.ok) {
      return dispatch(receiveErrorRequest(response, identifier));
    }
  };
};
