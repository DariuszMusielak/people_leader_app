import axios from 'axios';
import cookie from 'react-cookie';

export const peopleApi = axios.create({
  baseURL: 'https://people.devguru.co/api/v3/',
  timeout: 5000,
  headers: {
    "X-Email": cookie.load('user_email'),
    "X-Api-Token": cookie.load('api_token'),
  },
});
