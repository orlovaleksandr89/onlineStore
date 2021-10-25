import React, { useEffect, useContext } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Layout from './UI/Layout'
import { useHttp } from './hooks/httpHook'
import StoreContext from './store/store'
import jwt_decode from 'jwt-decode'

function App() {
  const storeCtx = useContext(StoreContext)

  const { request, error } = useHttp()
  const check = async () => {
    try {
      const token = localStorage.getItem('token')

      const data = await request('/auth', 'GET', null, {
        authorization: `Bearer ${token}`
      })
      const user = jwt_decode(data.token)
      console.log(user)
      storeCtx.setUser(user)
      storeCtx.setAuth(true)
      localStorage.setItem('token', data.token)
    } catch (e) {
      storeCtx.setAuth(false)
      storeCtx.setError(e)
      console.log(e)
    }
  }
  useEffect(() => {
    check()
  }, [])

  return (
    <Layout>
      <AppRouter error={error} />
    </Layout>
  )
}

export default App
