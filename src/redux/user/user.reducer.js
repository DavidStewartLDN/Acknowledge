import { combineReducers } from 'redux'
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD } from './user.actions'

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state
    }
}

export default userReducer