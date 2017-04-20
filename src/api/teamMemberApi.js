import { peopleApi } from './apis'

export const getAllFor = (team_name) =>
  peopleApi.get("/team_members", {
    params: {
      team_name,
    },
  })
