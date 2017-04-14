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

export const loadMemberships = (user_email, f2f_date) => (dispatch) => {
  return membershipApi.getAllMemberships(user_email, f2f_date).then(memberships => {
    dispatch(
      loadMembershipsSuccess(
        getUniqMemberships(
          filterMemberships(memberships)
        )
      )
    );
    dispatch(loadProjects(getProjectsFromMemberships(memberships)));
  }).catch(error => {
    throw(error);
  });
}
