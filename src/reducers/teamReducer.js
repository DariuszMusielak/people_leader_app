import { LOAD_TEAMS_SUCCESS, TOGGLE_TEAM } from '../actions/actionTypes';
import initialState from './initialState';

const team = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_TEAM:
      debugger
      const regex = new RegExp(`(${action.team_name})`, "i");
      return {
        ...state,
        visible: regex.test(state.name),
      };
    default:
      return state;
  }
}

export default function teamReducer(state = initialState.teams, action) {
  switch(action.type) {
    case LOAD_TEAMS_SUCCESS:
      return action.teams
    case TOGGLE_TEAM:
      return state.map(i => team(i, action))
    default:
      return state;
  }
}
