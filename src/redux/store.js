import { createStore } from 'redux'
import achievementsReducer from './accessApp'

const store = createStore(achievementsReducer)

export default store