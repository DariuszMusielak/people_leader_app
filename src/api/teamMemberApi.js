import axios from 'axios'

class TeamMemberApi {
  static getTeamMembers(team_name) {
    let url = new URL('https://people.devguru.co/api/v3/team_members')
    let params = {
      token: process.env.REACT_APP_PEOPLE_API_TOKEN,
      team_name: team_name
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return axios.get(
      url,
      { withCredentials: true }
    ).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}

export default TeamMemberApi;
