import cookie from 'react-cookie';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from './actionTypes';
import * as authApi from '../api/authApi';

export const signInSuccess = (email, apiToken) => (dispatch) => {
  cookie.save('user_email', email);
  cookie.save('api_token', apiToken);
  cookie.save('isAuthenticated', true);

  dispatch({
    type: SIGN_IN_SUCCESS,
    email,
    apiToken,
    isAuthenticated: true,
  })
}

export const signInFailure = (email, apiToken) => ({
  type: SIGN_IN_FAILURE,
  email,
  apiToken,
  isAuthenticated: false,
})

export const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
})

export const signIn = (email, apiToken) => (dispatch) => {
  dispatch(signInRequest());
  authApi.signIn(email, apiToken)
    .then(() => {
      dispatch(signInSuccess(email, apiToken));
    })
    .catch(() => {
      dispatch(signInFailure(email, apiToken));
    });
}
