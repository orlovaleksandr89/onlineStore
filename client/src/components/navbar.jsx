import React, { useContext } from 'react'

import { Navbar, Nav, Button, Container, Image } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import StoreContext from '../store/store'
import logo from '../assets/logo2.png'
import { MAIN_ROUTE } from '../utils/consts'

const NavBar = () => {
  const history = useHistory()
  const storeCtx = useContext(StoreContext)

  return (
    <>
      <Navbar bg='light' variant='light' expand='md'>
        <Container className='p-1 '>
          <div className='d-flex justify-content-center align-items-center'>
            <NavLink
              to={MAIN_ROUTE}
              style={{ color: 'orange', textDecoration: 'none' }}>
              <Image
                src={logo}
                style={{ height: '60px', marginLeft: '10px' }}></Image>
            </NavLink>
          </div>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' className='flex-grow-0 '>
            {storeCtx.isAuth ? (
              <Nav>
                {storeCtx.user.role === 'ADMIN' && storeCtx.isAuth && (
                  <Button
                    className='btn  '
                    variant={'outline-warning'}
                    onClick={() => {
                      history.push('/admin')
                    }}>
                    Admin
                  </Button>
                )}

                {storeCtx.user.role === 'USER' && (
                  <NavLink
                    to='/cart'
                    style={{ color: '#FFC107', textDecoration: 'none' }}>
                    <Button
                      className='position-relative btn mx-2'
                      variant={'outline-warning'}>
                      Cart
                      <i className='bi bi-bag-check ms-2'></i>
                      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                        {storeCtx.cart.length}
                        <span className='visually-hidden'>unread messages</span>
                      </span>{' '}
                    </Button>
                  </NavLink>
                )}
                <NavLink to='/login'>
                  <Button
                    className='btn mx-2'
                    variant={'outline-warning'}
                    onClick={() => {
                      storeCtx.setAuth(false)
                      storeCtx.setUser({})
                      localStorage.clear()
                    }}>
                    Log out
                  </Button>
                </NavLink>
              </Nav>
            ) : (
              <Nav>
                <Link to='/login'>
                  <Button className='btn' variant={'outline-warning'}>
                    Login
                  </Button>
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
