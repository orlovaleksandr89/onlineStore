import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import { CART_ROUTE, USER_ORDER_ROUTE } from '../../utils/consts'

function UserNavBtn() {
  const { cartItems } = useUser()
  return (
    <div className=''>
      <div className='dropdown'>
        <button
          className='btn btn-warning dropdown-toggle w-100'
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Account
        </button>
        {cartItems.length > 0 && (
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {cartItems.length}
            <span className='visually-hidden'>unread messages</span>
          </span>
        )}
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li>
            <Link
              className='w-100 dropdown-item d-flex align-items-center '
              to={CART_ROUTE}>
              Cart{' '}
              <span className='badge rounded-pill bg-danger ms-2'>
                {cartItems.length > 0 ? cartItems.length : ''}
              </span>
            </Link>
          </li>
          <li>
            <Link className='w-100 dropdown-item' to={USER_ORDER_ROUTE}>
              Orders
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default React.memo(UserNavBtn)
