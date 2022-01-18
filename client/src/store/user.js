import { createAction, createSlice } from '@reduxjs/toolkit'
import httpServise from '../services/http.service'
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts'
import createError from '../utils/createErrorMessage'
import jwt_decode from 'jwt-decode'
import { localStorageServise } from '../services/localStorage.service'
import history from '../utils/history'
import { toast } from 'react-toastify'

const initialState = localStorageServise.getToken()
  ? {
      auth: { ...JSON.parse(localStorageServise.getUser()) },
      loggedIn: true,
      isLoading: false,
      error: null,
      isAdmin: false
    }
  : {
      auth: null,
      loggedIn: false,
      isLoading: false,
      error: null,
      isAdmin: false
    }
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authRequested(state) {
      state.isLoading = true
    },
    authReceived(state, action) {
      state.auth = action.payload
      state.isAdmin = action.payload.role === 'ADMIN'
      state.loggedIn = true
      state.isLoading = false
    },

    authRequestFailed(state, action) {
      state.loggedIn = false
      state.error = action.payload
      state.isLoading = false
    },
    authLoggedOut(state) {
      state.auth = null
      state.loggedIn = false
      state.error = null
      state.isAdmin = false
      state.isLoading = false
    }
  }
})

const { actions, reducer: userReducer } = userSlice
const authCreationRequested = createAction('user/autCreationRequested')

const { authRequested, authReceived, authRequestFailed, authLoggedOut } =
  actions

/* Functions to dispatch changes to the state*/
export const checkUser = () => async (dispatch) => {
  const token = localStorageServise.getToken()
  if (token) {
    try {
      await httpServise.get()
    } catch (error) {
      dispatch(authRequestFailed('Your session expired. Please login'))
    }
  }
}

export const logIn =
  ({ formData, redirect }) =>
  async (dispatch) => {
    dispatch(authRequested())
    try {
      const { data } = await httpServise.post(LOGIN_ROUTE, { ...formData })
      const { token } = data
      const user = jwt_decode(token)

      localStorageServise.setToken(token)
      localStorageServise.setUser(JSON.stringify(user))
      dispatch(authReceived(user))
      history.push(redirect)
    } catch (error) {
      const message = createError(error) // доработать
      dispatch(authRequestFailed(message))
    }
  }

export const logOut = () => (dispatch) => {
  dispatch(authLoggedOut())
  localStorageServise.removeAuthData()
}

export const registerUser = (payload) => async (dispatch) => {
  dispatch(authCreationRequested())

  try {
    const { data } = await httpServise.post('/register', { ...payload })
    const { token, message } = data
    const user = jwt_decode(token)
    localStorageServise.setToken(token)
    localStorageServise.setUser(user)
    toast.success(message)
    dispatch(authReceived(user))
    history.push(MAIN_ROUTE)
  } catch (error) {
    const message = createError(error) // доработать
    dispatch(authRequestFailed(message))
  }
}

/* Selectors */
export const getIsAdmin = () => (state) => state.user.isAdmin
export const getUserLoadingStatus = () => (state) => state.user.isLoading
export const getUserIsLoggedIn = () => (state) => state.user.loggedIn
export const getUser = () => (state) => {
  if (state.user.auth) {
    return state.user.auth
  }
  return null
}

export default userReducer
