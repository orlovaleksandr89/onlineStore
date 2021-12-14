import React, { useContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import httpServise from '../services/http.service'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts'
import cartService from '../services/cart.service'
import Loader from '../components/common/Loader'

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
        await getCart()
      }

      setLoading(false)
    } catch (error) {
      errorCatcher(error)
      setIsAuth(false)
    }
  }

  // cart services
  async function getCart() {
    try {
      setLoading(true)

      const response = await cartService.get()
      setCartItem(response.data.products)
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  async function addItemToCart(data) {
    if (cartItems.find((item) => item._id === data._id)) {
      return
    }
    try {
      setLoading(true)

      const response = await cartService.addItem({
        _id: data._id,
        quantity: 1,
        title: data.title,
        price: data.price,
        imgURL: data.imgURL
      })
      if (response.status === 200) {
        await getCart()
      }
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  async function deleteItemFromCartDB(id) {
    try {
      setLoading(true)

      const response = await cartService.deleteItemFromCart(id)

      if (response.status === 200) {
        cartItems.filter((item) => item._id !== id)
        await getCart()
      }

      setLoading(false)
      return response
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  function incrementQty(id) {
    const newCart = [...cartItems]
    const item = newCart.find((item) => item._id === id)

    item.qty += 1

    setCartItem(newCart)
  }

  function decrementQty(id) {
    const newCart = [...cartItems]
    const item = newCart.find((item) => item._id === id)

    if (item.qty > 0) {
      item.qty -= 1
    }

    setCartItem(newCart)
  }

  function clearCart() {
    setCartItem([])
  }

  async function loginUser(formData) {
    try {
      setLoading(true)

      const response = await httpServise.post(LOGIN_ROUTE, { ...formData })
      setUserInStore(response)

      history.push(MAIN_ROUTE)

      setLoading(false)
    } catch (error) {
      console.log(error)
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
      console.log(error)
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

    return localStorage.setItem('token', token)
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
    setCartItem([])
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

        addItemToCart,
        cartItems,
        deleteItemFromCartDB,
        incrementQty,
        decrementQty,
        clearCart,
        getCart,
        setCartItem
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
