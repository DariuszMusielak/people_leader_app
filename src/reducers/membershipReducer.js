import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function membershipReducer(state = initialState.memberships, action) {
  switch(action.type) {
    case types.LOAD_MEMBERSHIPS_SUCCESS:
      return action.memberships
    default:
      return state;
  }
}
