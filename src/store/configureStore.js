import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import cookie from 'react-cookie';

const getAuthStateFromCookie = () => {
  const user_email = cookie.load('user_email') || '';
  const api_token = cookie.load('api_token') || '';
  const isAuthenticated = cookie.load('isAuthenticated') || false;
  return {
    isAuthenticated,
    api_token,
    user_email,
  }
}

export default function configureStore() {
  return createStore(
    rootReducer,
    {
      auth: getAuthStateFromCookie()
    },
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
}
