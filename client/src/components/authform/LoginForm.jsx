import React from 'react'
import FormComponent, { TextField } from '../common/form'

function LoginForm({ submitHandle, loading }) {
  return (
    <FormComponent onSubmit={submitHandle}>
      {/* {!isLogin && <TextField label='Your Name' name='name' />} */}
      <TextField label='Your Email' name='email' />
      <TextField label='Your Password' type='password' name='password' />
      <div className='d-flex justify-content-center justify-content-sm-end py-2 mt-3'>
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
  )
}

export default LoginForm
