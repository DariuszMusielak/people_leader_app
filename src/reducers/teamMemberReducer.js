import { LOAD_TEAM_MEMBERS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

export default function teamMemberReducer(state = initialState.team_members, action) {
  switch(action.type) {
    case LOAD_TEAM_MEMBERS_SUCCESS:
      return action.team_members
    default:
      return state;
  }
}
