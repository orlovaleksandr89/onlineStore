import { createAction, createSlice } from '@reduxjs/toolkit'
import orderServise from '../services/order.service'

const initialState = { entities: null, isLoading: true, error: null }

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    ordersRequested(state) {
      state.isLoading = true
    },
    ordersRecieved(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
    ordersRequestFailed(state, action) {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { actions, reducer: ordersReducer } = ordersSlice

const { ordersRequested, ordersRecieved, ordersRequestFailed } = actions
const orderCreated = createAction('orders/orderCreated')

export const loadUserOrdersList = (userId) => async (dispatch) => {
  dispatch(ordersRequested())

  try {
    const { data } = await orderServise.get(userId)

    dispatch(ordersRecieved(data.userOrders))
  } catch (error) {
    dispatch(ordersRequestFailed(error.response.data.message))
  }
}
export const createOrder =
  (userId, orderItems, paymentId, totalPrice) => async (dispatch) => {
    dispatch(ordersRequested())
    try {
      await orderServise.create(userId, orderItems, paymentId, totalPrice)
      dispatch(orderCreated())
    } catch (error) {
      dispatch(ordersRequestFailed(error.response.data.message))
    }
  }

/* Selectors */
export const getUserOrdersList = () => (state) => {
  if (state.orders.entities) {
    return state.orders.entities
  }
  return null
}

export const getOrdersLoadingStatus = () => (state) => state.orders.isLoading

export default ordersReducer
