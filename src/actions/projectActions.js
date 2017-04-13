import { LOAD_PROJECTS_SUCCESS, TOGGLE_PROJECT } from './actionTypes';

export function loadProjects(projects) {
  const projectsArray = projects.map(project => ({
    name: project,
    visible: true,
  }));
  return { type: LOAD_PROJECTS_SUCCESS, projects: projectsArray };
}

export const toggleProject = project => ({
  type: TOGGLE_PROJECT,
  project,
})
