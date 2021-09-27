import axios from 'axios';

const initialState = {
  authenticated: false,
  privileges: [],
  loading: true
};

const getBaseUrl = () => {
  const path = window.location.pathname;
  return path.substring(0, path.indexOf('/owa/')) + '/';
}

const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    accept: 'application/json',
  },
});

export const ACTION_TYPES = {
  RESET: 'privateRouteReducer/RESET',
  GET_PRIVILEGES: 'privateRouteReducer/GET_PRIVILEGES',
};

export type PrivateRouteState = Readonly<typeof initialState>;

export default (state = initialState, action: any) => {
  switch (action.type) {
    case `${ACTION_TYPES.GET_PRIVILEGES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ACTION_TYPES.GET_PRIVILEGES}_REJECTED`:
      return {
        ...state,
        loading: false
      };
    case `${ACTION_TYPES.GET_PRIVILEGES}_FULFILLED`:
      const authenticated = action.payload.data.authenticated;
      return {
        ...state,
        authenticated,
        privileges: authenticated ? action.payload.data.user.privileges.map((p: any) => p.name ? p.name : p.display) : [],
        loading: false
      };
    case ACTION_TYPES.RESET: {
      return {
        ...state,
        privileges: []
      };
    }
    default:
      return state;
  }
};

export const getPrivileges = () => async (dispatch: any) => {
  const requestUrl = 'ws/rest/v1/session';
  await dispatch({
    type: ACTION_TYPES.GET_PRIVILEGES,
    payload: axiosInstance.get(requestUrl)
  });
};