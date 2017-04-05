import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, IndexRoute } from 'react-router'
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'
import App from './App';
import FetchMembershipsForm from './components/memberships/FetchMembershipsForm';
import MembershipsPage from './components/memberships/MembershipsPage';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(createHashHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FetchMembershipsForm} />
        <Route path="memberships" component={MembershipsPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
