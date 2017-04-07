import * as types from '../actions/actionTypes';
import initialState from './initialState';

const project = (state = {}, action) => {
  switch(action.type) {
    case types.TOGGLE_PROJECT:
      if (state.name !== action.project.name) { return state }

      return {
        ...state,
        visible: !state.visible,
      }
    default:
      return state;
  }
}

export default function projectReducer(state = initialState.projects, action) {
  switch(action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return action.projects
    case types.TOGGLE_PROJECT:
      return state.map(i => project(i, action))
    default:
      return state;
  }
}
