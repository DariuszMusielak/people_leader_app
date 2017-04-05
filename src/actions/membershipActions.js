import * as types from './actionTypes';
import membershipApi from '../api/membershipApi';

export function loadMemberships(user_email, f2f_date) {
  return function(dispatch) {
    return membershipApi.getAllMemberships(user_email, f2f_date).then(memberships => {
      dispatch(loadMembershipsSuccess(memberships));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadMembershipsSuccess(memberships) {
  return { type: types.LOAD_MEMBERSHIPS_SUCCESS, memberships };
}
