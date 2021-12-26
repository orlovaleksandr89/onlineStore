import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

function CartNavBtn() {
  const { cartItems } = useCart()
  return (
    <NavLink to='/cart' style={{ color: '#FFC107', textDecoration: 'none' }}>
      <Button className='position-relative btn m-2' variant={'outline-warning'}>
        Cart
        <i className='bi bi-bag-check ms-2'></i>
        <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
          {cartItems.length}
          <span className='visually-hidden'>unread messages</span>
        </span>
      </Button>
    </NavLink>
  )
}

export default React.memo(CartNavBtn)
