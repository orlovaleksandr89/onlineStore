import React from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from '../components/loginForm'

const Auth = () => {
  return (
    <Container style={{ height: window.innerHeight - 76 }} className='pt-5'>
      <LoginForm />
    </Container>
  )
}

export default Auth
