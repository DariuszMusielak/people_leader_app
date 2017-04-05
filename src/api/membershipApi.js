class MembershipApi {
  static getAllMemberships(user_email, f2f_date) {
    let url = new URL('https://people.devguru.co/api/v3/memberships')
    let params = { token: process.envREACT_APP_PEOPLE_API_TOKEN, user_email: user_email, f2f_date: f2f_date }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default MembershipApi;
