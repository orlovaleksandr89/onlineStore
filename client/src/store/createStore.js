import { combineReducers, configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items'
import typesReducer from './types'

const rootReducer = combineReducers({
  items: itemsReducer,
  types: typesReducer
})

export default function createStore() {
  return configureStore({ reducer: rootReducer })
}
