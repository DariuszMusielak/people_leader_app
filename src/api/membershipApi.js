import axios from 'axios'

class MembershipApi {
  static getAllMemberships(user_email, f2f_date) {
    let url = new URL('https://people.devguru.co/api/v3/memberships')
    let params = { token: process.env.REACT_APP_PEOPLE_API_TOKEN, user_email, f2f_date }
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

export default MembershipApi;
