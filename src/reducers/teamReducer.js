import { LOAD_TEAMS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

export default function teamReducer(state = initialState.teams, action) {
  switch(action.type) {
    case LOAD_TEAMS_SUCCESS:
      return action.teams
    default:
      return state;
  }
}
