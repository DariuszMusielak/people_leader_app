import { LOAD_TEAM_MEMBERS_SUCCESS, LOAD_TEAM_MEMBERS_FAILURE } from './actionTypes';
import teamMemberApi from '../api/teamMemberApi';

export const loadTeamMembersSuccess = (team_members) => ({
  type: LOAD_TEAM_MEMBERS_SUCCESS, team_members,
})

export const loadTeamMembersFailure = (error) => ({
  type: LOAD_TEAM_MEMBERS_FAILURE, error,
})

export const loadTeamMembers = (teamName) => (dispatch) => {
  return teamMemberApi.getTeamMembers(teamName).then(teamMembers => {
      dispatch(loadTeamMembersSuccess(teamMembers));
    }).catch(error => {
      return dispatch(loadTeamMembersFailure(error));
    }
  );
}
