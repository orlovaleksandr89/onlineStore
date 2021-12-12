import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FormComponent, { TextField } from '../components/common/form'

function UserSettings() {
  const formData = {
    name: 'user',
    email: 'user@example.com',
    password: 'password'
  }

  const submitHandle = (data) => {
    console.log(data)
  }
  return (
    <Container className=' justify-content-center align-items-center p-3 text-center'>
      <h2>Your credentials</h2>
      <Row>
        <FormComponent onSumbit={submitHandle} formData={formData}>
          <TextField label='Your Name' name='name' />
          <TextField label='Your Email' name='email' />
          <TextField label='Your Password' type='password' name='password' />
          <div className='d-flex justify-content-center justify-content-sm-end py-2 mt-3'>
            <div className='col-12 col-sm-3 ms-auto'>
              <button
                type='submit'
                className='btn btn btn-warning w-100'
                // disabled={loading}
              >
                Submit
              </button>
            </div>
          </div>
        </FormComponent>
      </Row>
    </Container>
  )
}

export default UserSettings
