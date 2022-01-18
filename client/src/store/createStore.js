import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import itemsReducer from './items'
import ordersReducer from './orders'
import typesReducer from './types'
import userReducer from './user'

const rootReducer = combineReducers({
  items: itemsReducer,
  types: typesReducer,
  cart: cartReducer,
  orders: ordersReducer,
  user: userReducer
})

export default function createStore() {
  return configureStore({ reducer: rootReducer })
}
