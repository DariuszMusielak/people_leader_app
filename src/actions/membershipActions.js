import * as types from './actionTypes';
import membershipApi from '../api/membershipApi';
import { loadProjects } from './projectActions';
// TODO: Fix API to return only uniq memberships
import { uniqBy } from 'lodash';

// TODO: Fix API to return only uniq memberships
const getUniqMemberships = memberships => uniqBy(memberships, membership => membership.user_email);

const getProjectsFromMemberships = memberships =>
  [...new Set(memberships.map(membership => membership.project_name))]

export function loadMemberships(user_email, f2f_date) {
  return function(dispatch) {
    return membershipApi.getAllMemberships(user_email, f2f_date).then(memberships => {
      // TODO: Fix API to return only uniq memberships
      dispatch(loadMembershipsSuccess(getUniqMemberships(memberships)));
      dispatch(loadProjects(getProjectsFromMemberships(memberships)));
    }).catch(error => {
      throw(error);
    });
  };
}

// export const loadMemberships = (user_email, f2f_date) => (dispatch) =>
//   membershipApi.getAllMemberships(user_email, f2f_date)
//     .then(memberships => {
//       dispatch(loadMembershipsSuccess(memberships));
//     }).catch(error => {
//       throw(error);
//     });

export function loadMembershipsSuccess(memberships) {
  return { type: types.LOAD_MEMBERSHIPS_SUCCESS, memberships };
}

// export const loadMembershipsSuccess = (memberships) => ({
//   type: types.LOAD_MEMBERSHIPS_SUCCESS,
//   memberships,
// })
