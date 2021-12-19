import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LoginNavBtn() {
  return (
    <Link to='/login'>
      <Button className='btn m-2' variant={'outline-warning'}>
        Login
      </Button>
    </Link>
  )
}

export default React.memo(LoginNavBtn)
