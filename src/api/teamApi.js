import axios from 'axios'

class TeamApi {
  static getAllTeams() {
    let url = new URL('https://people.devguru.co/api/v3/teams')
    let params = { token: process.env.REACT_APP_PEOPLE_API_TOKEN }
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

export default TeamApi;
