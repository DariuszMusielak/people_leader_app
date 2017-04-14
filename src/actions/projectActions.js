import { LOAD_PROJECTS_SUCCESS, TOGGLE_PROJECT } from './actionTypes';

export const loadProjects = (projects) => ({
  type: LOAD_PROJECTS_SUCCESS, projects: projects,
})

export const toggleProject = project => ({
  type: TOGGLE_PROJECT, project,
})
