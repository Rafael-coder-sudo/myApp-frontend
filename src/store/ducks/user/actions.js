import * as type from './types'

export const newUser = query => ({
  type: type.NEW_USER,
  query,
})

export const auth = data => ({
  type: type.AUTH,
  data
})

export const setUser = user => ({
  type: type.SET_USER,
  user
})

export const exit = () => ({
  type: type.EXIT,
})

export default {
  newUser,
  auth,
  setUser,
  exit
}