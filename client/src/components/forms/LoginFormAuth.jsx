import React, { useState, useContext } from 'react'
import { Card, Form, Row, Button } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { validator } from '../../utils/validator'
import { validatorConfig } from '../../utils/validatorConfig'
import { useHttp } from '../../hooks/httpHook'
import TextField from '../common/form/TextField'
import jwt_decode from 'jwt-decode'
import StoreContext from '../../store/store'

function LoginForm({ isLogin }) {
  const history = useHistory()
  const storeCtx = useContext(StoreContext)
  const { loading, error, request } = useHttp()
  const [formData, setData] = useState({
    email: '',
    password: ''
  })

  const [, setErrors] = useState({})
  const onChangeHandle = (target) => {
    validate()
    setData((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const validate = () => {
    const errors = validator(formData, validatorConfig)
    setErrors(errors)

    return Object.keys(errors).length === 0
  }
  const submitHandle = (e) => {
    e.preventDefault()

    loginHandler()

    setData({ email: '', password: '' })
    if (error) {
      alert(`${error}`)
    }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/auth/login', 'POST', { ...formData })

      const user = jwt_decode(data.token)
      storeCtx.setUser(user)
      storeCtx.setAuth(true)
      storeCtx.setRole(user.role)
      localStorage.setItem('token', data.token)

      history.push('/')
      console.log(user)
    } catch (error) {
      if (error) {
        alert(`${error}`)
      }
    }
  }

  return (
    <Card style={{ width: '600px' }} className='p-5'>
      <h2 className='m-auto'>{isLogin ? 'Please login' : 'Please Sign up'}</h2>
      <Form className='d-flex flex-column' onSubmit={submitHandle}>
        <TextField
          label='Your email'
          name='email'
          onChangeHandle={onChangeHandle}
          value={formData.email}
        />
        <TextField
          label='Your password'
          name='password'
          onChangeHandle={onChangeHandle}
          value={formData.password}
          type='password'
        />

        <Row>
          <div className='d-flex justify-content-between mt-3'>
            <div>
              Don't have an account?
              <NavLink
                to='/registration'
                style={{ textDecoration: 'none' }}
                className='ms-1'>
                Sign up
              </NavLink>
            </div>

            <Button
              variant={'outline-warning'}
              type={'submit'}
              disabled={loading}>
              Log In
            </Button>
          </div>
        </Row>
      </Form>
    </Card>
  )
}

export default LoginForm
