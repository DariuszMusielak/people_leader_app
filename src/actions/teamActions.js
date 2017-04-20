import {
  LOAD_TEAMS_SUCCESS, LOAD_TEAMS_FAILURE, TOGGLE_TEAM
} from './actionTypes';
import * as teamApi from '../api/teamApi';

export const loadTeamsSuccess = teams => ({
  type: LOAD_TEAMS_SUCCESS, teams,
})

export const loadTeamsFailure = error => ({
  type: LOAD_TEAMS_FAILURE, error,
})

export const loadTeams = () => (dispatch) => {
  return teamApi.getAll().then(response => {
    dispatch(loadTeamsSuccess(response.data));
  }).catch(error => {
    return dispatch(loadTeamsFailure(error));
  });
}

export const toggleTeam = team_name => ({
  type: TOGGLE_TEAM, team_name,
})
