import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import Loader from '../common/Loader'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLoadingStatus, logIn, registerUser } from '../../store/user'
import history from '../../utils/history'

function AuthForm() {
  const dispatch = useDispatch()
  const userLoadingStatus = useSelector(getUserLoadingStatus())

  const redirect = history.location.state
    ? history.location.state.from.pathname
    : MAIN_ROUTE

  const isLogin = history.location.pathname === '/login'
  const loginHandle = (formData) => {
    dispatch(logIn({ formData, redirect }))
  }
  const registerHandle = (formData) => {
    dispatch(registerUser(formData))
  }
  const submitHandle = (data) => {
    isLogin ? loginHandle(data) : registerHandle(data)
  }

  if (userLoadingStatus) {
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
                <LoginForm
                  submitHandle={submitHandle}
                  loading={userLoadingStatus}
                />
              ) : (
                <RegisterForm
                  submitHandle={submitHandle}
                  loading={userLoadingStatus}
                />
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
