import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import FetchMembershipsForm from './components/memberships/FetchMembershipsForm';
import TeamsPage from './components/teams/TeamsPage';
import TeamMembersPage from './components/team_members/TeamMembersPage';
import MembershipsPage from './components/memberships/MembershipsPage';
import LoginPage from './components/users/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/leader_app.css';
import { Container } from 'reactstrap';
import { PrivateRoute } from './helpers/routeHelper'

const store = configureStore();

const isAuthenticated = () => (
  store.getState().auth.isAuthenticated
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container>
        <Link to="/" className='link--header'>
          <h1> Leader App </h1>
        </Link>
        <Switch>
          <Route exact path="/login" component={LoginPage}/>

          <PrivateRoute exact path="/" component={TeamsPage} isAuthenticated={isAuthenticated}/>
          <PrivateRoute exact path="/:team_name" component={TeamMembersPage} isAuthenticated={isAuthenticated}/>
          <PrivateRoute exact path="/:team_name/:user_email" component={FetchMembershipsForm} isAuthenticated={isAuthenticated}/>
          <PrivateRoute exact path="/:team_name/:user_email/:f2f_date" component={MembershipsPage} isAuthenticated={isAuthenticated}/>
        </Switch>
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);
