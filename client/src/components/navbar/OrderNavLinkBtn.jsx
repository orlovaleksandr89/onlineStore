import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { USER_ORDER_ROUTE } from '../../utils/consts'

function OrderNavLink() {
  return (
    <Link to={USER_ORDER_ROUTE}>
      <Button className='btn m-2' variant={'outline-warning'}>
        Orders
      </Button>
    </Link>
  )
}

export default OrderNavLink
