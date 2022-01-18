import { createSlice } from '@reduxjs/toolkit'
import cartService from '../services/cart.service'
import { LOGIN_ROUTE } from '../utils/consts'
import createError from '../utils/createErrorMessage'
import history from '../utils/history'
import { logOut } from './user'
const initialState = {
  entities: null,
  itemInCart: null,
  isLoading: false,
  error: null
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartRequested(state) {
      state.isLoading = true
    },
    cartReceived(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
    cartRequestFailed(state, action) {
      state.error = action.payload
      state.isLoading = false
    },
    itemAddedToCart(state, action) {
      state.entities.push(action.payload)
      state.isLoading = false
    },
    itemRemovedFromCart(state, action) {
      state.entities = state.entities.filter(
        (item) => item._id !== action.payload
      )
      state.isLoading = false
    },
    cartCleared(state) {
      state.entities.length = 0
      state.isLoading = false
    },
    itemQuantityDecremented(state, action) {
      state.entities[
        state.entities.indexOf(
          state.entities.find((item) => item._id === action.payload)
        )
      ].quantity -= 1
      state.isLoading = false
    },
    itemQuantityIncremented(state, action) {
      state.entities[
        state.entities.indexOf(
          state.entities.find((item) => item._id === action.payload)
        )
      ].quantity += 1
      state.isLoading = false
    }
  }
})

const { actions, reducer: cartReducer } = cartSlice
const {
  cartRequested,
  cartReceived,
  cartRequestFailed,
  itemAddedToCart,
  itemRemovedFromCart,
  cartCleared,
  itemQuantityDecremented,
  itemQuantityIncremented
} = actions
/* functions to dispatch changes to the state */
export const loadCart = (userId) => async (dispatch) => {
  dispatch(cartRequested())
  try {
    const { data } = await cartService.get(userId)
    dispatch(cartReceived(data.products))
  } catch (error) {
    const message = createError(error)
    dispatch(cartRequestFailed(message))
    dispatch(logOut())
    history.push(LOGIN_ROUTE)
  }
}

export const addItemToCart = (userId, product) => async (dispatch) => {
  dispatch(cartRequested())
  try {
    const cartItem = {
      _id: product._id,
      quantity: 1,
      title: product.title,
      price: product.price,
      imgURL: product.imgURL
    }
    await cartService.addItem(userId, cartItem)
    dispatch(itemAddedToCart(cartItem))
  } catch (error) {
    const message = createError(error)
    dispatch(cartRequestFailed(message))
    dispatch(logOut())
    history.push(LOGIN_ROUTE)
  }
}
export const deleteItemFromCart = (userId, productId) => async (dispatch) => {
  dispatch(cartRequested())
  try {
    await cartService.deleteItemFromCart(userId, productId)

    dispatch(itemRemovedFromCart(productId))
  } catch (error) {
    const message = createError(error)
    dispatch(cartRequestFailed(message))
    dispatch(logOut())
    history.push(LOGIN_ROUTE)
  }
}

export const clearCart = (userId) => async (dispatch) => {
  dispatch(cartRequested())
  try {
    await cartService.clearCart(userId)
    dispatch(cartCleared())
  } catch (error) {
    const message = createError(error)
    dispatch(cartRequestFailed(message))
    dispatch(logOut())
    history.push(LOGIN_ROUTE)
  }
}

export const decrementCartItemQuantity =
  (userId, itemId) => async (dispatch, getState) => {
    const { quantity } = getState().cart.entities.find(
      (entity) => entity._id === itemId
    )
    dispatch(cartRequested())
    try {
      await cartService.updateCartItemQuantity(userId, itemId, quantity - 1)

      dispatch(itemQuantityDecremented(itemId))
    } catch (error) {
      const message = createError(error)
      dispatch(cartRequestFailed(message))
      dispatch(logOut())
      history.push(LOGIN_ROUTE)
    }
  }
export const incrementCartItemQuantity =
  (userId, itemId) => async (dispatch, getState) => {
    const { quantity } = getState().cart.entities.find(
      (entity) => entity._id === itemId
    )

    dispatch(cartRequested())
    try {
      await cartService.updateCartItemQuantity(userId, itemId, quantity + 1)
      dispatch(itemQuantityIncremented(itemId))
    } catch (error) {
      const message = createError(error)
      dispatch(cartRequestFailed(message))
      dispatch(logOut())
      history.push(LOGIN_ROUTE)
    }
  }

/* Selectors */

export const getCartItems = () => (state) => {
  if (state.cart.entities) {
    return state.cart.entities
  }
  return []
}
export const getCartLoadingStatus = () => (state) => state.cart.isLoading

export default cartReducer
