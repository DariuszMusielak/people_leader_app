import * as types from './actionTypes';
import * as membershipsApi from '../api/membershipApi';
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
  return membershipsApi.getAllFor(userEmail, f2fDate).then(response => {
    dispatch(
      loadMembershipsSuccess(
        getUniqMemberships(
          filterMemberships(response.data)
        )
      )
    );
    dispatch(loadProjects(getProjectsFromMemberships(response.data)));
  }).catch(error => {
    return dispatch(loadMembershipsFailure(error));
  });
}
