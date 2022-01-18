import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartItems } from '../../store/cart'

function NavLinkList({ links, role }) {
  let linkToMap = []

  const cartItems = useSelector(getCartItems())

  for (let key in links) {
    if (key.toUpperCase() === role) {
      linkToMap = links[key]
    }
  }

  return (
    <>
      {linkToMap.map((link) => (
        <li
          key={link.title}
          className='my-4 '
          style={{ listStyle: 'none' }}
          data-bs-toggle='offcanvas'
          onClick={() => {
            link.handler && link.handler()
          }}>
          <Link
            to={link.route}
            className='text-decoration-none navlist-link text-dark'>
            <div className='w-50'>
              <h5 className='navlist-link'>
                <i className={link.badge}></i>
                <span className='ms-3 position-relative '>
                  {link.title}
                  {link.title === 'Cart' && cartItems.length > 0 && (
                    <span className='position-absolute top-50 start-100 ms-4 translate-middle badge rounded-pill bg-danger'>
                      {cartItems.length}
                      <span className='visually-hidden'></span>
                    </span>
                  )}
                </span>
              </h5>
            </div>
          </Link>
        </li>
      ))}
    </>
  )
}

export default NavLinkList
