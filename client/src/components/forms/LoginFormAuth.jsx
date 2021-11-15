import React, { useState, useContext } from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { useHttp } from '../../hooks/httpHook'

import jwt_decode from 'jwt-decode'
import StoreContext from '../../store/store'
import { MAIN_ROUTE } from '../../utils/consts'
import FormComponent, { TextField } from '../common/form'

function LoginForm() {
  const history = useHistory()
  const storeCtx = useContext(StoreContext)
  const { loading, error, request } = useHttp()
  const [, setData] = useState({})
  const [httperror, setHttperror] = useState({})

  const submitHandle = (data) => {
    setHttperror({})
    loginHandler(data)

    setData({ email: '', password: '' })
    if (error) {
      setHttperror(error)
    }
  }

  const loginHandler = async (formData) => {
    try {
      const data = await request('/auth/login', 'POST', { ...formData })
      const user = jwt_decode(data.token)
      storeCtx.setUser(user)
      storeCtx.setAuth(true)

      localStorage.setItem('token', data.token)

      history.push(MAIN_ROUTE)
    } catch (error) {
      if (error) {
        setHttperror(error)
      }
    }
  }

  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col md={8}>
          <Card className='p-3'>
            <h2 className='m-auto'>Please Login</h2>
            <FormComponent onSubmit={submitHandle} setHttperror={setHttperror}>
              <TextField
                label='Your Email'
                name='email'
                httperror={httperror.message}
              />
              <TextField
                label='Your Password'
                type='password'
                name='password'
              />
              <div className='d-flex justify-content-end py-2 mt-3'>
                <div className='col-12 col-sm-3 ms-auto'>
                  <button
                    type='submit'
                    className='btn btn btn-warning w-100'
                    disabled={loading}>
                    Login
                  </button>
                </div>
              </div>
            </FormComponent>
            <Row>
              <div className='d-flex justify-content-center'>
                <div>
                  Don't have an account?
                  <NavLink
                    to='/registration'
                    style={{ textDecoration: 'none' }}
                    className='ms-2 fw-bold'>
                    Sign up
                  </NavLink>
                </div>
              </div>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm
