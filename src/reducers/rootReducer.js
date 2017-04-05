import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import memberships from './membershipReducer';

const rootReducer = combineReducers({
  memberships,
  routing: routerReducer
})

export default rootReducer;
