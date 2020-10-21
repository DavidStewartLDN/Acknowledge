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

export const updateAchievementTitle = achievementTitle => {
  return {
      type: UserActionTypes.UPDATE_ACHIEVEMENT_TITLE,
      payload: achievementTitle
  }
}

export const updateSelectedA = selectedA => {
  return {
      type: UserActionTypes.UPDATE_SELECTED_A,
      payload: selectedA
  }
}

export const updateSelectedB = selectedB => {
  return {
      type: UserActionTypes.UPDATE_SELECTED_B,
      payload: selectedB
  }
}

export const addAchievementFirebase = () => {
  return async (dispatch, getState) => {
    try {
      db.collection("users").doc(user.uid).collection('achievements')
        .add(achievement)
    } catch (e) {
        alert(e)
    }
  }
}