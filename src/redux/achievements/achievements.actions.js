import { AchievementActionTypes } from './achievements.types'

// Action Creators

let achievementID = 0

export function addachievement(achievement) {
  return {
    type: AchievementActionTypes.ADD_ACHIEVEMENT,
    id: achievementID++,
    achievement
  }
}

export function deleteachievement(id) {
  return {
    type: AchievementActionTypes.DELETE_ACHIEVEMENT,
    payload: id
  }
}