import {
  EMAIL_ON_CHANGE,
  API_TOKEN_ON_CHANGE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from '../actions/actionTypes';
import initialState from './initialState';

export default function loginFormReducer(state = initialState.loginForm, action) {
  switch(action.type) {
    case EMAIL_ON_CHANGE:
      return {
        ...state,
        email: action.email,
      }
    case API_TOKEN_ON_CHANGE:
      return {
        ...state,
        apiToken: action.apiToken,
      }
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isSubmitting: true,
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        isValid: true,
        isSubmitted: true,
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        isValid: false,
        isSubmitted: true,
      }
    default:
      return state;
  }
}
