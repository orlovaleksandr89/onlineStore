import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import FormComponent, { TextField } from '../common/form'

function AuthForm() {
  const location = useLocation()

  const { loginUser, registerUser, loading } = useUser()
  const isLogin = location.pathname === '/login'
  const submitHandle = (data) => {
    isLogin ? loginUser(data) : registerUser(data)
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
              <FormComponent onSubmit={submitHandle}>
                <TextField label='Your Email' name='email' />
                <TextField
                  label='Your Password'
                  type='password'
                  name='password'
                />
                <div className='d-flex justify-content-center justify-content-sm-end py-2 mt-3'>
                  <div className='col-12 col-sm-3 ms-auto'>
                    <button
                      type='submit'
                      className='btn btn btn-warning w-100'
                      disabled={loading}>
                      {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                  </div>
                </div>
              </FormComponent>
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
