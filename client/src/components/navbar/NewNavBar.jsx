import React from 'react'
import { Col, Container, Image, Navbar, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  USER_ORDER_ROUTE
} from '../../utils/consts'
import logo from '../../assets/logo.png'
import NavLinkList from './NavLinkList'
import { TypeBar } from '../shopPage_section/'
import DropdownList from '../common/dropdown/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, getUserIsLoggedIn, logOut } from '../../store/user'

function NewNavBar() {
  const dispatch = useDispatch()
  const user = useSelector(getUser())
  const isLoggedIn = useSelector(getUserIsLoggedIn())
  const logOutHandler = () => {
    dispatch(logOut())
  }

  const links = {
    user: [
      { title: 'Main page', route: MAIN_ROUTE, badge: 'bi bi-house' },
      { title: 'Cart', route: CART_ROUTE, badge: 'bi bi-cart' },
      {
        title: 'Your Orders',
        route: USER_ORDER_ROUTE,
        badge: 'bi bi-calendar-event'
      },
      {
        title: 'Log Out',
        route: LOGIN_ROUTE,
        badge: 'bi bi bi-box-arrow-right',
        handler: logOutHandler
      }
    ],
    admin: [
      { title: 'Admin', route: ADMIN_ROUTE, badge: 'bi bi-person-circle' },
      {
        title: 'Log Out',
        route: LOGIN_ROUTE,
        badge: 'bi bi bi-box-arrow-right',
        handler: logOutHandler
      }
    ]
  }

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md' className='p-0 '>
        <Container className='justify-content-between '>
          <Row className='d-flex justify-content-center align-items-center my-2 w-50'>
            <Col
              md={2}
              className='d-flex align-items-center justify-content-start'>
              <NavLink
                to={MAIN_ROUTE}
                style={{ color: 'orange', textDecoration: 'none' }}>
                <Image src={logo} style={{ height: '60px' }}></Image>
              </NavLink>
            </Col>
            <Col md={10} className=' d-none d-md-block '>
              <DropdownList />
            </Col>
          </Row>
          <div className='d-flex justify-content-center align-items-center text-light'>
            <button
              className='btn btn-warning'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
              aria-controls='offcanvasExample'>
              <i className='bi bi-list fs-5' role='button'></i>
            </button>
          </div>
        </Container>
      </Navbar>

      <div
        className='offcanvas offcanvas-end bg-light'
        tabIndex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'>
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
            Welcome to RedFox Online
          </h5>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'></button>
        </div>
        <div className='offcanvas-body text-dark'>
          <div>
            {isLoggedIn ? (
              <ul>
                <NavLinkList links={links} role={user.role} />
              </ul>
            ) : (
              <ul>
                <li
                  className='my-4 '
                  style={{ listStyle: 'none' }}
                  data-bs-toggle='offcanvas'>
                  <Link
                    to={LOGIN_ROUTE}
                    className='text-decoration-none navlist-link text-dark'>
                    <h5 className='navlist-link'>
                      <i className='bi bi-person-circle'></i>{' '}
                      <span className='ms-3 '>Log In</span>
                    </h5>
                  </Link>
                </li>
              </ul>
            )}

            <TypeBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewNavBar
