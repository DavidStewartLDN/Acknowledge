// import { createStore } from 'redux'
// import achievementsReducer from './achievements/achievements.actions'

// const store = createStore(achievementsReducer)

// export default store

import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'

import rootReducer from './root-reducer';

const middlewares = [thunkMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;