import { combineReducers, configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items'

const rootReducer = combineReducers({
  items: itemsReducer
})

export default function createStore() {
  return configureStore({ reducer: rootReducer })
}
