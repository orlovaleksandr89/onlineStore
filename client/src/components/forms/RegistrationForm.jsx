import React, { useContext, useState } from 'react'
import { useHttp } from '../../hooks/httpHook'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router'
import StoreContext from '../../store/store'
import { NavLink } from 'react-router-dom'
import { Card, Col, Container, Row } from 'react-bootstrap'
import FormComponent, { TextField } from '../common/form'
import { MAIN_ROUTE } from '../../utils/consts'

function RegistrationForm() {
  const history = useHistory()
  const storeCtx = useContext(StoreContext)
  const { request, loading } = useHttp()
  const [successMessage, setSuccessMessage] = useState({})
  const [httperror, setHttperror] = useState({})

  const submitHandle = (data) => {
    setHttperror({})
    setSuccessMessage({})
    registrationHandle(data)
  }

  const registrationHandle = async (formData) => {
    try {
      const data = await request('/auth/register', 'POST', { ...formData })
      setSuccessMessage(data)
      loginHandler(formData)
    } catch (error) {
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
    <div>
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col md={8}>
            <Card className='p-3'>
              <h2 className='m-auto'>Please Sign up</h2>
              <FormComponent
                onSubmit={submitHandle}
                setHttperror={setHttperror}>
                <TextField
                  label='Your Email'
                  name='email'
                  httperror={httperror.message}
                  success={successMessage.message}
                />
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
                      Sign Up
                    </button>
                  </div>
                </div>
              </FormComponent>
              <Row>
                <div className='d-flex justify-content-center '>
                  <div>
                    Already registered?
                    <NavLink
                      to='/login'
                      style={{ textDecoration: 'none' }}
                      className='ms-2 fw-bold'>
                      Log In
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

export default RegistrationForm
