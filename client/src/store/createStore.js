import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import itemsReducer from './items'
import ordersReducer from './orders'
import typesReducer from './types'

const rootReducer = combineReducers({
  items: itemsReducer,
  types: typesReducer,
  cart: cartReducer,
  orders: ordersReducer
})

export default function createStore() {
  return configureStore({ reducer: rootReducer })
}
