import { createSlice } from '@reduxjs/toolkit'
import adminService from '../services/admin.service'
import itemsService from '../services/items.service'
import { toast } from 'react-toastify'
import createError from '../utils/createErrorMessage'

const initialState = {
  entities: null,
  isLoading: true,
  adminLoading: false,
  error: null
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemsRequested(state) {
      state.isLoading = true
    },
    itemsRequestFailed(state, action) {
      state.error = action.payload
      state.isLoading = false
    },
    itemsRecievedSuccessfully(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
    newItemActionRequested(state) {
      state.error = null
      state.adminLoading = true
    },
    newItemRequestFailed(state, action) {
      state.error = action.payload
      state.adminLoading = false
    },
    newItemCreatedSuccessfully(state, action) {
      state.entities.push(action.payload)
      state.adminLoading = false
    },
    updateItemRequestedSuccessfully(state, action) {
      state.entities[
        state.entities.indexOf(
          state.entities.find((item) => item._id === action.payload._id)
        )
      ] = action.payload
      state.adminLoading = false
    },
    itemInDbDeleted(state, action) {
      state.entities = state.entities.filter(
        (item) => item._id !== action.payload
      )
      state.adminLoading = false
    }
  }
})

const { actions, reducer: itemsReducer } = itemsSlice

const {
  itemsRequested,
  itemsRequestFailed,
  itemsRecievedSuccessfully,
  newItemActionRequested,
  newItemRequestFailed,
  newItemCreatedSuccessfully,
  updateItemRequestedSuccessfully,
  itemInDbDeleted
} = actions

/* Functions to dispatch state changes */
export const loadItemsList = () => async (dispatch) => {
  dispatch(itemsRequested())
  try {
    const items = await itemsService.get()
    dispatch(itemsRecievedSuccessfully(items))
  } catch (error) {
    dispatch(itemsRequestFailed(error.response.data.message))
  }
}

export const createItemInDB = (payload) => async (dispatch) => {
  dispatch(newItemActionRequested())
  try {
    const { data } = await adminService.createItem(payload)

    dispatch(newItemCreatedSuccessfully(data.itemFromDb))
    toast.success(data.message)
  } catch (error) {
    const message = createError(error)
    dispatch(newItemRequestFailed(message))
  }
}

export const updateItemInDb = (id, payload) => async (dispatch) => {
  dispatch(newItemActionRequested())
  try {
    const { data } = await adminService.update(id, payload)
    dispatch(updateItemRequestedSuccessfully(data.doc))
    toast.success(data.message)
  } catch (error) {
    const message = createError(error)
    dispatch(newItemRequestFailed(message))
  }
}

export const deleteItemInDb = (id) => async (dispatch) => {
  dispatch(newItemActionRequested())
  try {
    const { data } = await adminService.delete(id)
    dispatch(itemInDbDeleted(id))
    toast.success(data.message)
  } catch (error) {
    const message = createError(error)
    dispatch(newItemRequestFailed(message))
  }
}
/* Selectors */

export const getItemsList = () => (state) => state.items.entities
export const getItemById = (itemId) => (state) => {
  if (state.items.entities) {
    return state.items.entities.find((item) => item._id === itemId)
  }
}
export const getItemsLoadingStatus = () => (state) => state.items.isLoading
export const getAdminLoadingStatus = () => (state) => state.items.adminLoading

export default itemsReducer
