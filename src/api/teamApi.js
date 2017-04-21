import { peopleApi } from './apis'

export const getAll = () =>
  peopleApi.get("/teams")
