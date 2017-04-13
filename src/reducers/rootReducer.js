import { combineReducers } from 'redux';
import memberships from './membershipReducer';
import projects from './projectReducer';
import teams from './teamReducer';
import team_members from './teamMemberReducer';

const rootReducer = combineReducers({
  memberships,
  projects,
  teams,
  team_members
})

export default rootReducer;
