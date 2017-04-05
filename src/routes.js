import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import FetchMembershipsForm from './components/memberships/FetchMembershipsForm';
import MembershipsPage from './components/memberships/MembershipsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FetchMembershipsForm} />
    <Route path="/memberships" component={MembershipsPage} />
  </Route>
);
