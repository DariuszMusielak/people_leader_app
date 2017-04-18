import { LOAD_TEAMS_SUCCESS, TOGGLE_TEAM } from '../actions/actionTypes';
import initialState from './initialState';
import { filterTeam } from '../helpers/teamsHelper'

const parseTeams = teams => teams.map(team => ({ ...team, visible: true }))

export default function teamReducer(state = initialState.teams, action) {
  switch(action.type) {
    case LOAD_TEAMS_SUCCESS:
      return parseTeams(action.teams)
    case TOGGLE_TEAM:
      return state.map(team => filterTeam(team, action.team_name))
    default:
      return state;
  }
}
