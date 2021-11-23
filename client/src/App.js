import React from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Layout from './UI/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
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
