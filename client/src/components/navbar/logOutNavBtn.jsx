import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function LogOutNavBtn({ loguotUser, clearCart }) {
  return (
    <NavLink to='/login'>
      <Button
        className='btn m-2'
        variant={'outline-warning'}
        onClick={() => {
          loguotUser()
          clearCart()
        }}>
        Log out
      </Button>
    </NavLink>
  )
}

export default LogOutNavBtn
