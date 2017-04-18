import * as types from './actionTypes';
import membershipApi from '../api/membershipApi';
import { loadProjects } from './projectActions';
import { uniqBy, filter } from 'lodash';

const filterMemberships = memberships =>
  filter(memberships, membership =>
    membership.project_name !== 'Internals'
  );

const getUniqMemberships = memberships =>
  uniqBy(memberships, membership => membership.user_email);

const getProjectsFromMemberships = memberships =>
  [...new Set(memberships.map(membership => membership.project_name))]

export const loadMembershipsSuccess = (memberships) => ({
  type: types.LOAD_MEMBERSHIPS_SUCCESS, memberships,
})

export const loadMembershipsFailure = (error) => ({
  type: types.LOAD_MEMBERSHIPS_FAILURE, error,
})

export const loadMemberships = (userEmail, f2fDate) => (dispatch) => {
  return membershipApi.getAllMemberships(userEmail, f2fDate).then(memberships => {
    dispatch(
      loadMembershipsSuccess(
        getUniqMemberships(
          filterMemberships(memberships)
        )
      )
    );
    dispatch(loadProjects(getProjectsFromMemberships(memberships)));
  }).catch(error => {
    return dispatch(loadMembershipsFailure(error));
  });
}
