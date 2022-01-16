import { createSlice } from '@reduxjs/toolkit'
import cartService from '../services/cart.service'

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
    cartRequestSuccess(state, action) {
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
  cartRequestSuccess,
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
    dispatch(cartRequestSuccess(data.products))
  } catch (error) {
    dispatch(cartRequestFailed(error.response.data.message))
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
    dispatch(cartRequestFailed(error.response.data.message))
  }
}
export const deleteItemFromCart = (userId, productId) => async (dispatch) => {
  dispatch(cartRequested())
  try {
    await cartService.deleteItemFromCart(userId, productId)

    dispatch(itemRemovedFromCart(productId))
  } catch (error) {
    dispatch(cartRequestFailed(error.response.data.message))
  }
}

export const clearCart = (userId) => async (dispatch) => {
  dispatch(cartRequested())
  try {
    await cartService.clearCart(userId)
    dispatch(cartCleared())
  } catch (error) {
    dispatch(cartRequestFailed(error.response.data.message))
  }
}

export const decrementCartItemQuantity =
  (userId, itemId, quantity) => async (dispatch) => {
    dispatch(cartRequested())
    try {
      await cartService.updateCartItemQuantity(userId, itemId, quantity)

      dispatch(itemQuantityDecremented(itemId))
    } catch (error) {
      dispatch(cartRequestFailed(error.response.data.message))
    }
  }
export const incrementCartItemQuantity =
  (userId, itemId, quantity) => async (dispatch) => {
    dispatch(cartRequested())
    try {
      await cartService.updateCartItemQuantity(userId, itemId, quantity)

      dispatch(itemQuantityIncremented(itemId))
    } catch (error) {
      dispatch(cartRequestFailed(error.response.data.message))
    }
  }

/* Selectors */

export const getCartItems = () => (state) => state.cart.entities
export const getCartLoadingStatus = () => (state) => state.cart.isLoading

export default cartReducer
