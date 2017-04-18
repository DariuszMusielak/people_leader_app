export const extractEmailsFromMemberships = (memberships) => {
  return memberships.map(membership => membership.user_email).join(', ');
}

export const getFilteredMemberships = (memberships, projects) => {
  const activeProjects = projects.filter(project => project.visible).map(
    project => project.name
  );
  return memberships.filter(
    membership => activeProjects.includes(membership.project_name)
  );
}
