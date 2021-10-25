import React, { useContext } from 'react'

import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import StoreContext from '../store/store'

const NavBar = () => {
  const history = useHistory()
  const storeCtx = useContext(StoreContext)

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md'>
        <Container className='p-1 '>
          <NavLink to='/' style={{ color: 'orange', textDecoration: 'none' }}>
            <h3>Red Fox Market</h3>
          </NavLink>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' className='flex-grow-0 '>
            {storeCtx.isAuth ? (
              <Nav className=''>
                {storeCtx.user.role[0] === 'ADMIN' && storeCtx.isAuth && (
                  <Button
                    className='btn  '
                    variant={'outline-warning'}
                    onClick={() => {
                      history.push('/admin')
                    }}>
                    Admin
                  </Button>
                )}

                {storeCtx.user.role[0] === 'USER' && (
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
