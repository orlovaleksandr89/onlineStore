import React from 'react'

import { useLocation } from 'react-router-dom'
import RegistrationForm from './forms/RegistrationForm'
import LoginFormAuth from '../components/forms/LoginFormAuth'

const LoginForm = () => {
  const location = useLocation()
  const isLogin = location.pathname === '/login'

  return (
    <div>
      {isLogin ? <LoginFormAuth isLogin={isLogin} /> : <RegistrationForm />}
    </div>
  )
}

export default LoginForm
