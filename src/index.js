import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FetchMembershipsForm from './components/memberships/FetchMembershipsForm';
import MembershipsPage from './components/memberships/MembershipsPage';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/leader_app.css';
import { Container } from 'reactstrap';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container>
        <h1> Leader App </h1>
        <Route exact path="/" component={FetchMembershipsForm}/>
        <Route path="/memberships/:user_email/:f2f_date" component={MembershipsPage} />
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);
