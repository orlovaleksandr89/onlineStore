import React, { useContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import httpServise from '../services/http.service'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts'
import cartService from '../services/cart.service'

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

  // cart services
  async function getCart(userId) {
    try {
      setLoading(true)

      const response = await cartService.get(userId)
      setCartItem(response.data.products)
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  async function addItemToCart(userId, data) {
    try {
      setLoading(true)

      const response = await cartService.addItem(userId, {
        _id: data._id,
        quantity: 1,
        title: data.title,
        price: data.price,
        imgURL: data.imgURL
      })
      if (response.status === 200) {
        await getCart(user.id)
      }
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  async function deleteItemFromCartDB(userId, id) {
    try {
      setLoading(true)

      const response = await cartService.deleteItemFromCart(userId, id)

      if (response.status === 200) {
        cartItems.filter((item) => item._id !== id)
        getCart(user.id)
      }

      setLoading(false)
      return response
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  async function incrementCartItemQuantity(userId, itemId, quantity) {
    try {
      setLoading(true)
      const response = await cartService.updateCartItemQuantity(
        userId,
        itemId,
        quantity
      )
      if (response.status === 200) {
        setCartItem(
          cartItems.map((item) => {
            if (item._id === itemId) {
              return { ...item, quantity: item.quantity + 1 }
            }
            return item
          })
        )
        await getCart(userId)
      }
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  async function decrementCartItemQuantity(userId, itemId, quantity) {
    try {
      setLoading(true)
      const response = await cartService.updateCartItemQuantity(
        userId,
        itemId,
        quantity
      )
      if (response.status === 200) {
        setCartItem(
          cartItems.map((item) => {
            if (item._id === itemId) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return item
          })
        )
        await getCart(userId)
      }
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  async function clearCart(userId) {
    try {
      setLoading(true)
      const response = await cartService.clearCart(userId)
      if (response.status === 200) {
        setCartItem([])
      }

      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
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

        addItemToCart,
        cartItems,
        deleteItemFromCartDB,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        clearCart,
        getCart,
        setCartItem
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
