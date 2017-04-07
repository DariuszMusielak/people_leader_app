import * as types from './actionTypes';

export function loadProjects(projects) {
  const projectsArray = projects.map(project => ({
    name: project,
    visible: true,
  }));
  return { type: types.LOAD_PROJECTS_SUCCESS, projects: projectsArray };
}

export const toggleProject = project => ({
  type: types.TOGGLE_PROJECT,
  project,
})
