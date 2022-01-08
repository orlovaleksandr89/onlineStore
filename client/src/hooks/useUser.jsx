import React, { useContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import httpServise from '../services/http.service'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts'

const UserContext = React.createContext()

export const useUser = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAuth, setIsAuth] = useState(false)
  const [cartItems, setCartItem] = useState([])

  const history = useHistory()

  useEffect(() => {
    if (error !== null) {
      toast.error(error, {
        position: 'top-center',
        autoClose: 4000,
        closeOnClick: true,
        draggable: true,
        progress: undefined
      })
      setError(null)
    }
  }, [error])

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      setLoading(true)

      if (localStorage.getItem('token')) {
        const response = await httpServise.get()

        setUserInStore(response)
        setCartItem(response.data.userCart.products)
      }

      setLoading(false)
    } catch (error) {
      errorCatcher(error)
      setIsAuth(false)
    }
  }

  async function loginUser(formData) {
    try {
      setLoading(true)

      const response = await httpServise.post(LOGIN_ROUTE, { ...formData })
      const isAdmin = setUserInStore(response)
      if (isAdmin === 'USER') {
        const { products } = response.data.userCart
        setCartItem(products)
      }

      history.push(MAIN_ROUTE)

      setLoading(false)
    } catch (error) {
      if (error) {
        errorCatcher(error.response.data.message)
        setLoading(false)
      }
    }
  }

  async function registerUser(formData) {
    try {
      setLoading(true)
      const response = await httpServise.post('/register', { ...formData })
      setLoading(false)
      toast.success(response.data.message)

      loginUser(formData)
      setLoading(false)
    } catch (error) {
      if (error) {
        errorCatcher(error.response.data.message)
        setLoading(false)
      }
    }
  }

  function setUserInStore(response) {
    const { token } = response.data
    const user = jwt_decode(token)
    setUser(user)
    setIsAuth(true)
    setLoading(false)

    localStorage.setItem('token', token)
    return user.role
  }

  function errorCatcher(message) {
    if (message) {
      setError(message)
      setLoading(false)
      setIsAuth(false)
    }
    setError(null)
  }

  function loguotUser() {
    setIsAuth(false)
    setLoading(false)
    setUser({})
    localStorage.clear()
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        isAuth,
        loguotUser,
        loginUser,
        error,
        checkUser,
        registerUser,
        setCartItem,
        cartItems
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
