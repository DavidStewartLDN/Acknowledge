import { AchievementActionTypes } from './achievements.types'
import remove from 'lodash.remove'

const initialState = []

function achievementsReducer(state = initialState, action) {
  switch (action.type) {
    case AchievementActionTypes.ADD_ACHIEVEMENT:
      return [
        ...state,
        {
          id: action.id,
          achievement: action.achievement
        }
      ]
    
    case AchievementActionTypes.DELETE_ACHIEVEMENT:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload
      })
      return deletedNewArray

    case AchievementActionTypes.GET_ACHIEVEMENTS:
      return action.payload
    
    default:
      return state
  }
}

export default achievementsReducer