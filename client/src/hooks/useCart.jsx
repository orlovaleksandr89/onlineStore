import React, { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import cartService from '../services/cart.service'
import orderServise from '../services/order.service'
import { useUser } from './useUser'

const CartContext = React.createContext()

export const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
  const { user } = useUser()
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [, setIsAuth] = useState(false)
  const [userOrders, setUserOrder] = useState([])

  useEffect(() => {
    if (user.id && user.role === 'USER') {
      getCart(user.id)
      getUserOrder(user.id)
    }
    return () => {
      setLoading(false)
    }
  }, [user])

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

  async function getCart(userId) {
    try {
      setLoading(true)

      const response = await cartService.get(userId)
      setCartItems(response.data.products)
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

  async function clearCart(userId) {
    try {
      setLoading(true)
      const response = await cartService.clearCart(userId)
      if (response.status === 200) {
        setCartItems([])
      }

      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
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
        setCartItems(
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

  async function incrementCartItemQuantity(userId, itemId, quantity) {
    try {
      setLoading(true)
      const response = await cartService.updateCartItemQuantity(
        userId,
        itemId,
        quantity
      )
      if (response.status === 200) {
        setCartItems(
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

  function errorCatcher(message) {
    if (message) {
      setError(message)
      setLoading(false)
      setIsAuth(false)
    }
    setError(null)
  }

  async function getUserOrder() {
    try {
      setLoading(true)
      const { data } = await orderServise.get(user.id)
      setUserOrder(data.userOrders)
      // setSelected(data.userOrders[0]._id)
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  async function createOrder(orderItems, paymentId, totalPrice) {
    try {
      setLoading(true)
      await orderServise.create(user.id, orderItems, paymentId, totalPrice)
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
    }
  }

  return (
    <CartContext.Provider
      value={{
        loading,
        addItemToCart,
        cartItems,
        deleteItemFromCartDB,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        clearCart,
        getCart,
        getUserOrder,
        userOrders,
        createOrder
      }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
