import React, { useEffect } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Layout from './UI/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadItemsList } from './store/items'
import { loadTypesList } from './store/types'

import { loadCart } from './store/cart'
import { checkUser, getIsAdmin, getUser, getUserIsLoggedIn } from './store/user'

function App() {
  const loggedIn = useSelector(getUserIsLoggedIn())
  const user = useSelector(getUser())
  const isAdmin = useSelector(getIsAdmin())
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadItemsList())
    dispatch(loadTypesList())
    if (loggedIn && !isAdmin) {
      dispatch(loadCart(user.id))
    }
  }, [loggedIn, isAdmin])

  useEffect(() => {
    dispatch(checkUser())
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
