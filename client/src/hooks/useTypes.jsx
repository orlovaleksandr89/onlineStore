import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import httpServise from '../services/http.service'
import typesService from '../services/types.service'

const TypesContext = React.createContext()

export const useTypes = () => {
  return useContext(TypesContext)
}

const TypesProvider = ({ children }) => {
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTypes()
    return () => setLoading(false)
  }, [])

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

  async function getTypes() {
    try {
      setLoading(true)
      const types = await typesService.get()
      setTypes(types)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      errorCatcher(error.response.data.message)
    }
  }

  async function createTypeInDB(text) {
    try {
      setLoading(true)
      const response = await httpServise.post('/createtype', {
        type: text.trim()
      })
      toast.success(response.data.message)
      setLoading(false)
      if (response.status === 201) {
        getTypes()
      }
      return response
    } catch (error) {
      if (error) {
        setLoading(false)
        errorCatcher(error.response.data.message)
        console.log(error.response)
      }
    }
  }

  function errorCatcher(message) {
    if (message) {
      setError(message)
      setLoading(false)
    }
  }

  return (
    <TypesContext.Provider value={{ types, loading, createTypeInDB, getTypes }}>
      {children}
    </TypesContext.Provider>
  )
}

export default TypesProvider
