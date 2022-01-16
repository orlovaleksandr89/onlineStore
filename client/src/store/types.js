import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import adminService from '../services/admin.service'
import typesService from '../services/types.service'
import createError from '../utils/createErrorMessage'
const initialState = {
  entities: null,
  isLoading: true,
  error: null,
  selectedType: null
}

const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    typesRequested(state) {
      state.error = null
      state.isLoading = true
    },
    typesRequestFailed(state, action) {
      state.error = action.payload
      state.isLoading = false
    },
    typesRequestSuccess(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
    typeSelected(state, action) {
      state.selectedType = action.payload
    },
    typeCreatedSuccessfully(state, action) {
      state.entities.push(action.payload)
      state.isLoading = false
    }
  }
})

const { actions, reducer: typesReducer } = typesSlice
const {
  typesRequested,
  typesRequestFailed,
  typesRequestSuccess,
  typeSelected,
  typeCreatedSuccessfully
} = actions
/* Functions to dispatch changes to state */
export const loadTypesList = () => async (dispatch) => {
  dispatch(typesRequested())
  try {
    const types = await typesService.get()

    dispatch(typesRequestSuccess(types))
  } catch (error) {
    const message = createError(error)
    dispatch(typesRequestFailed(message))
  }
}
export const selectType = (type) => (dispatch) => {
  dispatch(typeSelected(type))
}

export const createTypeInDb = (type) => async (dispatch) => {
  dispatch(typesRequested())
  try {
    const { message, doc } = await adminService.createType(type)
    dispatch(typeCreatedSuccessfully(doc))
    toast.success(message)
  } catch (error) {
    const message = createError(error)
    dispatch(typesRequestFailed(message))
  }
}

/* Selectors to get catual state */
export const getTypesList = () => (state) => state.types.entities
export const getTypesLoadingStatus = () => (state) => state.types.isLoading
export const getSelectedType = () => (state) => state.types.selectedType

export default typesReducer
