import { LOAD_MEMBERSHIPS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

export default function membershipReducer(state = initialState.memberships, action) {
  switch(action.type) {
    case LOAD_MEMBERSHIPS_SUCCESS:
      return action.memberships
    default:
      return state;
  }
}
