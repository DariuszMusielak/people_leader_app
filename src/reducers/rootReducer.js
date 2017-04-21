import { combineReducers } from 'redux';
import memberships from './membershipReducer';
import projects from './projectReducer';
import teams from './teamReducer';
import team_members from './teamMemberReducer';
import auth from './authReducer';
import loginForm from './loginFormReducer';

const rootReducer = combineReducers({
  memberships,
  projects,
  teams,
  team_members,
  auth,
  loginForm,
})

export default rootReducer;
