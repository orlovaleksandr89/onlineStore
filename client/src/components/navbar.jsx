import React, { useCallback, useContext } from 'react'

import { Navbar, Nav, Button, Container, Image } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import StoreContext from '../store/store'
import logo from '../assets/logo.png'
import { ADMIN_ROUTE, MAIN_ROUTE } from '../utils/consts'
// import SearchBar from './SearchBar'
import DropdownList from './common/dropdown/Dropdown'

const NavBar = () => {
  const storeCtx = useContext(StoreContext)

  const loguotHandler = useCallback(() => {
    storeCtx.setAuth(false)
    storeCtx.setUser({})
    localStorage.clear()
  }, [storeCtx])

  return (
    <Navbar bg='dark' variant='dark' expand='md' className='p-0'>
      <Container>
        <div className='d-flex justify-content-center align-items-center my-2'>
          <NavLink
            to={MAIN_ROUTE}
            style={{ color: 'orange', textDecoration: 'none' }}>
            <Image
              src={logo}
              style={{ height: '60px', marginLeft: '10px' }}></Image>
          </NavLink>
          <div className='ms-4 d-none d-md-block' style={{ width: '350px' }}>
            <DropdownList />
          </div>
        </div>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='flex-grow-0'>
          {storeCtx.isAuth ? (
            <Nav>
              {storeCtx.user.role === 'ADMIN' && storeCtx.isAuth && (
                <NavLink
                  to={ADMIN_ROUTE}
                  style={{ color: '#FFC107', textDecoration: 'none' }}>
                  <Button className='btn m-2' variant={'outline-warning'}>
                    Admin
                  </Button>
                </NavLink>
              )}

              {storeCtx.user.role === 'USER' && (
                <>
                  <NavLink
                    to='/cart'
                    style={{ color: '#FFC107', textDecoration: 'none' }}>
                    <Button
                      className='position-relative btn m-2'
                      variant={'outline-warning'}>
                      Cart
                      <i className='bi bi-bag-check ms-2'></i>
                      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                        {storeCtx.cart.length}
                        <span className='visually-hidden'>unread messages</span>
                      </span>{' '}
                    </Button>
                  </NavLink>
                </>
              )}
              <NavLink to='/login'>
                <Button
                  className='btn m-2'
                  variant={'outline-warning'}
                  onClick={loguotHandler}>
                  Log out
                </Button>
              </NavLink>
            </Nav>
          ) : (
            <Nav>
              <Link to='/login'>
                <Button className='btn m-2' variant={'outline-warning'}>
                  Login
                </Button>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default React.memo(NavBar)
