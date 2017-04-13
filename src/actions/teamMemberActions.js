import { LOAD_TEAM_MEMBERS_SUCCESS } from './actionTypes';
import teamMemberApi from '../api/teamMemberApi';

export function loadTeamMembers(team_name) {
  return function(dispatch) {
    return teamMemberApi.getTeamMembers(team_name).then(team_members => {
        dispatch(loadTeamMembersSuccess(team_members));
      }).catch(error => {
        throw(error);
      }
    );
  };
}

export function loadTeamMembersSuccess(team_members) {
  return { type: LOAD_TEAM_MEMBERS_SUCCESS, team_members: team_members };
}
