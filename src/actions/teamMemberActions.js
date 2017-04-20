import { LOAD_TEAM_MEMBERS_SUCCESS, LOAD_TEAM_MEMBERS_FAILURE } from './actionTypes';
import * as teamMembersApi from '../api/teamMemberApi';

export const loadTeamMembersSuccess = (team_members) => ({
  type: LOAD_TEAM_MEMBERS_SUCCESS, team_members,
})

export const loadTeamMembersFailure = (error) => ({
  type: LOAD_TEAM_MEMBERS_FAILURE, error,
})

export const loadTeamMembers = (teamName) => (dispatch) => {
  return teamMembersApi.getAllFor(teamName).then(response => {
      dispatch(loadTeamMembersSuccess(response.data));
    }).catch(error => {
      return dispatch(loadTeamMembersFailure(error));
    }
  );
}
