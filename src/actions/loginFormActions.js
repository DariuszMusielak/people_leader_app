import {
  EMAIL_ON_CHANGE,
  API_TOKEN_ON_CHANGE,
} from '../actions/actionTypes';

export const onEmailChange = (email) => ({
  type: EMAIL_ON_CHANGE,
  email,
})

export const onApiTokenChange = (apiToken) => ({
  type: API_TOKEN_ON_CHANGE,
  apiToken,
})
