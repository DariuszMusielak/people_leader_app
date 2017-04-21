import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case SIGN_IN_SUCCESS:
      return {
        user_email: action.email,
        api_token: action.apiToken,
        isAuthenticated: true,
      }
    case SIGN_IN_FAILURE:
      return {
        isAuthenticated: false,
      }
    default:
      return state;
  }
}
