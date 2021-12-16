import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import itemsService from '../services/items.service'
import adminService from '../services/admin.service'

const ItemsContext = React.createContext()

export const useItems = () => {
  return useContext(ItemsContext)
}

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [itemFromDb, setItemFromDb] = useState({})
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
      const response = await adminService.delete(id)
      toast.success(response.data.message)
      if (response.status === 200) {
        getItems()
      }
      setLoading(false)
      console.log(response)
      return response
    } catch (error) {
      errorCatcher(error.response.data.message)
      setLoading(false)
    }
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
