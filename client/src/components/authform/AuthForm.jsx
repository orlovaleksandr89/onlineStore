import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import Loader from '../common/Loader'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function AuthForm() {
  const location = useLocation()

  const { loginUser, registerUser, loading } = useUser()
  const isLogin = location.pathname === '/login'
  const submitHandle = (data) => {
    isLogin ? loginUser(data) : registerUser(data)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col md={8}>
            <Card className='p-3'>
              <h2 className='m-auto'>{`Please ${
                isLogin ? 'Login' : 'Sign up'
              }`}</h2>

              {isLogin ? (
                <LoginForm submitHandle={submitHandle} loading={loading} />
              ) : (
                <RegisterForm submitHandle={submitHandle} loading={loading} />
              )}
              <Row>
                <div className='d-flex justify-content-center '>
                  <div>
                    {isLogin ? 'Dont have an account?' : 'Already registered?'}
                    <NavLink
                      to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
                      style={{ textDecoration: 'none' }}
                      className='ms-2 fw-bold'>
                      {isLogin ? 'Sign up' : 'Login'}
                    </NavLink>
                  </div>
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AuthForm
