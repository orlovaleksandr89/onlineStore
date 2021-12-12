import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
// import httpServise from '../services/http.service'
import itemsService from '../services/items.service'
import adminService from '../services/admin.service'
import cartService from '../services/cart.service'

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
    getCart()
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

  async function addItemToCart(data) {
    try {
      await cartService.addItem({
        _id: data._id,
        quantity: 1,
        name: data.title,
        price: data.price
      })

      await getCart()
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
    }
  }

  function deleteItemFromCart(id) {
    setCartItem([...cartItems.filter((item) => item._id !== id)])
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
        deleteItemFromCart,
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
