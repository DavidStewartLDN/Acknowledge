import { createStore } from 'redux'
import achievementsReducer from './achievements/achievements.actions'

const store = createStore(achievementsReducer)

export default store