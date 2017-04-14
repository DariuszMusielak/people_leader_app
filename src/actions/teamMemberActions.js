import { LOAD_TEAM_MEMBERS_SUCCESS } from './actionTypes';
import teamMemberApi from '../api/teamMemberApi';

export const loadTeamMembersSuccess = (team_members) => ({
  type: LOAD_TEAM_MEMBERS_SUCCESS, team_members: team_members,
})

export const loadTeamMembers = (team_name) => (dispatch) => {
  return teamMemberApi.getTeamMembers(team_name).then(team_members => {
      dispatch(loadTeamMembersSuccess(team_members));
    }).catch(error => {
      throw(error);
    }
  );
}
