import { AUTH_LOGIN, AUTH_LOGIN_FAIL, AUTH_LOGIN_SUCCESS } from '../actions/types';

const initialState = {
  loginUser: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        loginUser: null,
        loading: true,
        error: null,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        loginUser: action.loginUser,
        loading: false,
        error: null,
      };
    }
    case AUTH_LOGIN_FAIL: {
      return {
        ...state,
        loginUser: null,
        loading: false,
        error: action.error,
      };
    }
    default: 
      return state;
  }
}