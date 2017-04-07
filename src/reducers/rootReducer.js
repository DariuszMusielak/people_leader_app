import { combineReducers } from 'redux';
// import { routerReducer } from "react-router-redux";
import memberships from './membershipReducer';
import projects from './projectReducer';

const rootReducer = combineReducers({
  memberships,
  projects,
  // routing: routerReducer
})

export default rootReducer;
