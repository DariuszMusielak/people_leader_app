import { LOAD_TEAMS_SUCCESS, TOGGLE_TEAM } from './actionTypes';
import teamApi from '../api/teamApi';

export const loadTeamsSuccess = teams => ({
  type: LOAD_TEAMS_SUCCESS, teams: teams,
})

export const loadTeams = () => (dispatch) => {
  return teamApi.getAllTeams().then(teams => {
    dispatch(loadTeamsSuccess(teams))
  }).catch(error => {
    throw(error);
  });
}

export const toggleTeam = team_name => ({
  type: TOGGLE_TEAM, team_name,
})
