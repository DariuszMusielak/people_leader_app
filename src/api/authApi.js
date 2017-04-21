import { peopleApi } from './apis';

export const signIn = (email, apiToken) =>
  peopleApi.get("/users/sign_in", {
    params: {
      email,
      api_token: apiToken,
    }
  })
