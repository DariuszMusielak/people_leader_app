import { LOAD_TEAMS_SUCCESS } from './actionTypes';
import teamApi from '../api/teamApi';

export function loadTeams() {
  return function(dispatch) {
    return teamApi.getAllTeams().then(teams => {
      dispatch(loadTeamsSuccess(teams));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTeamsSuccess(teams) {
  return { type: LOAD_TEAMS_SUCCESS, teams: teams };
}
