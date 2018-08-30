import { appName } from '../config'
import { Record } from 'immutable'

/**
 * Constants
 * */
export const moduleName = 'users'
const prefix = `${appName}/${moduleName}`

export const ADD_USER = `${prefix}/ADD_USER`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  users: []
})

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action

  switch (type) {
    case ADD_USER:
      debugger

      let users = state.users || []
      users.push(payload.user)

      return state.set('users', users)

    default:
      return state
  }
}

/**
 * Selectors
 * */

/**
 * Action Creators
 * */

export function addUser(firstName, lastName, email) {
  debugger
  return (dispatch) => {
    const user = { firstName, lastName, email }

    dispatch({
      type: ADD_USER,
      payload: { user }
    })
  }
}
