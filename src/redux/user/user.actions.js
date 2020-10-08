import Firebase, { db } from '../../../config/Firebase.js'

import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD } from './user.actions'

// actions

export const updateEmail = email => {
  return {
      type: UPDATE_EMAIL,
      payload: email
  }
}

export const updatePassword = password => {
  return {
      type: UPDATE_PASSWORD,
      payload: password
  }
}

export const login = () => {
  return async (dispatch, getState) => {
      try {
          const { email, password } = getState().user
          const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
          dispatch({ type: LOGIN, payload: response.user })
      } catch (e) {
          console.log(e)
      }
  }
}

export const signup = () => {
  return async (dispatch, getState) => {
      try {
          const { email, password } = getState().user
          const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
          if (response.user.uid) {
            const user = {
              uid: response.user.uid,
              email: email
            }

            db.collection('users')
              .doc(response.user.uid)
              .set(user)

            dispatch({ type: SIGNUP, payload: response.user })
          }
      } catch (e) {
          alert(e)
      }
  }
}