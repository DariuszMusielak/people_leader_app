import { combineReducers } from 'redux';
import memberships from './membershipReducer';
import projects from './projectReducer';
import teams from './teamReducer';
import team_members from './teamMemberReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  memberships,
  projects,
  teams,
  team_members,
  auth,
})

export default rootReducer;
