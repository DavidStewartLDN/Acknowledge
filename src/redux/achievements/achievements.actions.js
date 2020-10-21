import { AchievementActionTypes } from './achievements.types'

import { db } from '../../../config/Firebase.js'


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

// export const updateAchievementTitle = achievementTitle => {
//   return {
//       type: UserActionTypes.UPDATE_ACHIEVEMENT_TITLE,
//       payload: achievementTitle
//   }
// }

// export const updateSelectedA = selectedA => {
//   return {
//       type: UserActionTypes.UPDATE_SELECTED_A,
//       payload: selectedA
//   }
// }

// export const updateSelectedB = selectedB => {
//   return {
//       type: UserActionTypes.UPDATE_SELECTED_B,
//       payload: selectedB
//   }
// }

// export const addAchievementFirebase = () => {
//   return async (dispatch, getState) => {
//     try {
//       db.collection("users").doc(user.uid).collection('achievements')
//         .add(achievement)
//     } catch (e) {
//         alert(e)
//     }
//   }
// }

export const getachievementsfirebase = () => {
  return async (dispatch, getState) => {
    try {
      const { email, uid } = getState().user
      db.collection("users").doc(uid).collection('achievements')
      .orderBy('createdAt', 'asc')
      .onSnapshot(
        querySnapshot => {
          const newAchievements = []
          querySnapshot.forEach(doc => {
            const achievement = doc.data()
            achievement.id = doc.id
            newAchievements.push(achievement)
          });
          dispatch({ type: AchievementActionTypes.GET_ACHIEVEMENTS, payload: newAchievements })
          },
        error => {
          console.log(error)
        }
      )
    } catch (e) {
      alert(e)
    }
  }
}
