import React from 'react'
import { Container } from 'react-bootstrap'

import AuthForm from '../components/authform'
const Auth = () => {
  return (
    <Container style={{ height: window.innerHeight - 76 }} className='pt-5'>
      <AuthForm />
    </Container>
  )
}

export default Auth
