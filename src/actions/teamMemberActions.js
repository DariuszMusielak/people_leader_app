import { LOAD_TEAM_MEMBERS_SUCCESS, LOAD_TEAM_MEMBERS_FAILURE } from './actionTypes';
import teamMemberApi from '../api/teamMemberApi';

export const loadTeamMembersSuccess = (team_members) => ({
  type: LOAD_TEAM_MEMBERS_SUCCESS, team_members,
})

export const loadTeamMembersFailure = (error) => ({
  type: LOAD_TEAM_MEMBERS_FAILURE, error,
})

export const loadTeamMembers = (team_name) => (dispatch) => {
  return teamMemberApi.getTeamMembers(team_name).then(team_members => {
      dispatch(loadTeamMembersSuccess(team_members));
    }).catch(error => {
      return dispatch(loadTeamMembersFailure(error));
    }
  );
}
