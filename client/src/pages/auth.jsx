import React from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from '../components/loginForm'

const Auth = () => {
  return (
    <Container style={{ height: window.innerHeight - 54 }} className='mt-5'>
      <LoginForm />
    </Container>
  )
}

export default Auth
