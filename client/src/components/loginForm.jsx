import React, { useContext } from 'react'
import { Form, Card, Button, Row } from 'react-bootstrap'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import StoreContext from '../store/store'

const LoginForm = () => {
  const storeCtx = useContext(StoreContext)
  const history = useHistory()
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  return (
    <Card style={{ width: '600px' }} className='p-5'>
      <h2 className='m-auto'>{isLogin ? 'Please login' : 'Please Sign up'}</h2>
      <Form className='d-flex flex-column'>
        <Form.Control
          placeholder='Enter your email'
          className='mt-3'
          type='email'
        />
        <Form.Control
          placeholder='Enter your password'
          className='mt-3'
          type='password'
        />
        <Row>
          <div className='d-flex justify-content-between mt-3'>
            {isLogin ? (
              <div>
                Don't have an account?
                <NavLink
                  to='/registration'
                  style={{ textDecoration: 'none' }}
                  className='ms-1'
                >
                  Sign in
                </NavLink>
              </div>
            ) : (
              <div>
                Already registered?
                <NavLink
                  to='/login'
                  style={{ textDecoration: 'none' }}
                  className='ms-1'
                >
                  Log in
                </NavLink>
              </div>
            )}

            <Button
              variant={'outline-warning'}
              onClick={() => {
                storeCtx.setAuth(true)
                history.replace('/')
              }}
            >
              {isLogin ? 'Log in' : 'Sign up'}
            </Button>
          </div>
        </Row>
      </Form>
    </Card>
  )
}

export default LoginForm
