export const getSortedTeams = (teams) => {
  const activeTeams = teams.filter(team => team.visible);
  return (
    activeTeams.sort((a,b) =>
      (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : (
        (b.name.toUpperCase() > a.name.toUpperCase()
      ) ? -1 : 0
    )
  ));
}

export const filterTeam = (team, team_name) => {
  const regex = new RegExp(`(${team_name})`, "i");
  return {
    ...team,
    visible: regex.test(team.name),
  };
}
