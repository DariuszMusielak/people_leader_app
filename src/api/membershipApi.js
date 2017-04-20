import { peopleApi } from './apis'

export const getAllFor = (user_email, f2f_date) =>
  peopleApi.get("/memberships", {
    params: {
      user_email,
      f2f_date,
    },
  })
