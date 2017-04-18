import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FetchMembershipsForm from './components/memberships/FetchMembershipsForm';
import { Link } from 'react-router-dom'
import TeamsPage from './components/teams/TeamsPage';
import TeamMembersPage from './components/team_members/TeamMembersPage';
import MembershipsPage from './components/memberships/MembershipsPage';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/leader_app.css';
import { Container } from 'reactstrap';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container>
        <Link to="/" className='link--header'>
          <h1> Leader App </h1>
        </Link>

        <Route exact path="/" component={TeamsPage}/>
        <Route exact path="/:team_name" component={TeamMembersPage}/>
        <Route exact path="/:team_name/:user_email" component={FetchMembershipsForm}/>
        <Route exact path="/:team_name/:user_email/:f2f_date" component={MembershipsPage} />
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);
