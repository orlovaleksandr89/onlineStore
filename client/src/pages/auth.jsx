import React from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from '../components/loginForm'

const Auth = () => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <LoginForm />
    </Container>
  )
}

export default Auth
