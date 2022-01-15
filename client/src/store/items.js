import { createSlice } from '@reduxjs/toolkit'
import adminService from '../services/admin.service'
import itemsService from '../services/items.service'
import { toast } from 'react-toastify'

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
    newItemRequested(state) {
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
    }
  }
})

const { actions, reducer: itemsReducer } = itemsSlice

const {
  itemsRequested,
  itemsRequestFailed,
  itemsRecievedSuccessfully,
  newItemRequested,
  newItemRequestFailed,
  newItemCreatedSuccessfully
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
  dispatch(newItemRequested())
  try {
    const { data } = await adminService.create(payload)
    toast.success(data.message)

    dispatch(newItemCreatedSuccessfully(data.itemFromDb))
  } catch (error) {
    console.log(error)
    dispatch(newItemRequestFailed(error.message))
    toast.error(error.response.data.message)
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
