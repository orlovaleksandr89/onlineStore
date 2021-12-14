import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import { CART_ROUTE, USER_SETTINGS_ROUTE } from '../../utils/consts'

function UserNavBtn() {
  const { user, cartItems } = useUser()
  return (
    <div className=''>
      <div className='dropdown'>
        <button
          className='btn btn-warning dropdown-toggle w-100'
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Welcome {user?.name ? user.name : 'Guest '}
        </button>
        {cartItems.length > 0 && (
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {cartItems.length}
            <span className='visually-hidden'>unread messages</span>
          </span>
        )}
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li>
            <Link className='w-100 dropdown-item' to={CART_ROUTE}>
              Cart
            </Link>
          </li>
          <li>
            <Link className='w-100 dropdown-item' to={USER_SETTINGS_ROUTE}>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserNavBtn
