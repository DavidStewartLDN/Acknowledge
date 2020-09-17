import remove from 'lodash.remove'

// Action Types

export const ADD_ACHIEVEMENT = 'ADD_ACHIEVEMENT'
export const DELETE_ACHIEVEMENT = 'DELETE_ACHIEVEMENT'

// Action Creators

let achievementID = 0

export function addachievement(achievement) {
  return {
    type: ADD_ACHIEVEMENT,
    id: achievementID++,
    achievement
  }
}

export function deleteachievement(id) {
  return {
    type: DELETE_ACHIEVEMENT,
    payload: id
  }
}

// reducer

const initialState = []

function achievementsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACHIEVEMENT:
      return [
        ...state,
        {
          id: action.id,
          achievement: action.achievement
        }
      ]
    
    case DELETE_ACHIEVEMENT:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload
      })
      return deletedNewArray
    
    default:
      return state
  }
}

export default achievementsReducer