import React, { useEffect } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Layout from './UI/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { loadItemsList } from './store/items'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadItemsList())
  }, [])

  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
      <ToastContainer />
    </>
  )
}

export default App
