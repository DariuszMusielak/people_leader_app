import { LOAD_TEAMS_SUCCESS, TOGGLE_TEAM } from './actionTypes';
import teamApi from '../api/teamApi';

export function loadTeams() {
  return function(dispatch) {
    return teamApi.getAllTeams().then(teams => {
      const teamsArray = teams.map(team => ({
        ...team, visible: true
      }));
      dispatch(loadTeamsSuccess(teamsArray));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTeamsSuccess(teams) {
  return { type: LOAD_TEAMS_SUCCESS, teams: teams };
}

export const toggleTeam = team_name => ({
  type: TOGGLE_TEAM,
  team_name,
})
