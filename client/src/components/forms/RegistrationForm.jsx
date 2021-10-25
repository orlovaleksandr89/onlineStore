import React, { useState } from 'react'
import { useHttp } from '../../hooks/httpHook'
import { validatorConfig } from '../../utils/validatorConfig'
import { validator } from '../../utils/validator'
import { Card, Form, Row, Button } from 'react-bootstrap'
import TextField from '../common/form/TextField'
import { NavLink } from 'react-router-dom'

function RegistrationForm() {
  const { request } = useHttp()
  const [formData, setData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
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
    if (!isValid) {
      return
    }
    console.log(formData)
    registerHandler()

    setData({ email: '', password: '' })
    setErrors({})
  }

  const registerHandler = async () => {
    try {
      const data = await request('/auth/register', 'POST', { ...formData })
      console.log('data', data)
    } catch (error) {}
  }

  const isValid = Object.keys(errors).length === 0
  return (
    <Card style={{ width: '600px' }} className='p-5'>
      <h2 className='m-auto'> Please Sign up</h2>
      <Form className='d-flex flex-column' onSubmit={submitHandle}>
        <TextField
          label='Your email'
          name='email'
          onChangeHandle={onChangeHandle}
          value={formData.email}
          error={errors.email}
        />
        <TextField
          label='Your password'
          name='password'
          onChangeHandle={onChangeHandle}
          value={formData.password}
          type='password'
          error={errors.password}
        />

        <Row>
          <div className='d-flex justify-content-between mt-3'>
            <div>
              Already registered?
              <NavLink
                to='/login'
                style={{ textDecoration: 'none' }}
                className='ms-1'>
                Log in
              </NavLink>
            </div>

            <Button
              variant={'outline-warning'}
              type={'submit'}
              disabled={!isValid}>
              Sign up
            </Button>
          </div>
        </Row>
      </Form>
    </Card>
  )
}

export default RegistrationForm
