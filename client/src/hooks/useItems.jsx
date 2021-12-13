import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
// import httpServise from '../services/http.service'
import itemsService from '../services/items.service'
import adminService from '../services/admin.service'
import cartService from '../services/cart.service'
import { useUser } from './useUser'

const ItemsContext = React.createContext()

export const useItems = () => {
  return useContext(ItemsContext)
}

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [itemFromDb, setItemFromDb] = useState({})
  const [cartItems, setCartItem] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { user } = useUser()

  useEffect(() => {
    if (error !== null) {
      toast.error(error, {
        position: 'top-center',
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
        progress: undefined
      })
      setError(null)
    }
  }, [error])

  useEffect(() => {
    getItems()

    if (user.role !== 'ADMIN') {
      getCart()
    }
    return () => {
      setLoading(false)
    }
  }, [])

  async function getItems() {
    try {
      setLoading(true)
      const items = await itemsService.get()
      setItems(items)
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
    }
  }

  function getItemById(id) {
    return items.find((item) => item._id === id)
  }

  async function getItemFromDB(id) {
    try {
      setLoading(true)
      const item = await itemsService.getItemById(id)
      setItemFromDb(item)
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
    }
  }
  async function createItemInDB(data) {
    try {
      setLoading(true)
      const response = await adminService.post('/createitem', { ...data })
      toast.success(response.data.message)
      if (response.status === 201) {
        getItems()
      }

      return response
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
    }
  }

  async function updateItemInDB(id, data) {
    try {
      setLoading(true)
      const response = await adminService.post('/updateitem', {
        id,
        data
      })
      toast.success(response.data.message)

      if (response.status === 200) {
        getItems()
      }
      return response
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
    }
  }

  async function deleteItemFromDB(id) {
    try {
      setLoading(true)
      const response = await adminService.post('/deleteitem', { id: id })
      toast.success(response.data.message)
      getItems()
      setLoading(false)
      return response
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
    }
  }

  //cart services
  async function getCart() {
    try {
      setLoading(true)
      const { products } = await cartService.get()
      setCartItem(products)
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
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
      setLoading(false)
    }
  }

  async function deleteItemFromCartDB(id) {
    try {
      setLoading(true)
      const response = await cartService.deleteItemFromCart(id)

      if (response.status === 200) {
        cartItems.filter((item) => item._id !== id)
      }

      await getCart()
      setLoading(false)
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
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

  function errorCatcher(message) {
    if (message) {
      setError(message)
      setLoading(false)
    }
    setError(null)
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        addItemToCart,
        cartItems,
        deleteItemFromCartDB,
        incrementQty,
        decrementQty,
        clearCart,
        getItemById,
        loading,
        getItemFromDB,
        itemFromDb,
        deleteItemFromDB,
        createItemInDB,
        updateItemInDB
      }}>
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsProvider
