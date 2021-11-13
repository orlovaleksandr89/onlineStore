import React, { useEffect, useContext, useState, useCallback } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Layout from './UI/Layout'
import { useHttp } from './hooks/httpHook'
import StoreContext from './store/store'
import jwt_decode from 'jwt-decode'
import Loader from './components/common/Loader'

function App() {
  const storeCtx = useContext(StoreContext)
  const { request, error } = useHttp()
  const [isLoading, setIsLoading] = useState(true)
  const check = useCallback(async () => {
    try {
      setIsLoading(true)
      const token = localStorage.getItem('token')

      const data = await request('/auth', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      const user = jwt_decode(data.token)

      storeCtx.setUser(user)
      storeCtx.setAuth(true)
      localStorage.setItem('token', data.token)
      setIsLoading(false)
    } catch (e) {
      storeCtx.setAuth(false)
      storeCtx.setError(e)
      console.log(e)
    }
  }, [request, storeCtx])

  const getTypesAndItemsFromDB = useCallback(async () => {
    try {
      const items = await request('/items')
      const types = await request('/types')
      storeCtx.setTypes(types)
      storeCtx.setItems(items)
    } catch (error) {}
  }, [request, storeCtx])

  useEffect(() => {
    isLoading && check()
    return () => setIsLoading(false)
  }, [])
  useEffect(() => {
    getTypesAndItemsFromDB()
  }, [])
  if (isLoading) {
    return <Loader />
  }
  return (
    <Layout>
      <AppRouter error={error} />
    </Layout>
  )
}

export default App
