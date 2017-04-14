import { TOGGLE_PROJECT, LOAD_PROJECTS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

const project = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_PROJECT:
      if (state.name !== action.project.name) { return state }
      return { ...state, visible: !state.visible, }
    default:
      return state;
  }
}

const parseProjects = projects => projects.map(project => ({
  name: project, visible: true,
}))

export default function projectReducer(state = initialState.projects, action) {
  switch(action.type) {
    case LOAD_PROJECTS_SUCCESS:
      return parseProjects(action.projects)
    case TOGGLE_PROJECT:
      return state.map(i => project(i, action))
    default:
      return state;
  }
}
