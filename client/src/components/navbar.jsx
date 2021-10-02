import React, { useContext } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import StoreContext from '../store/store'

const NavBar = () => {
  const history = useHistory()
  const storeCtx = useContext(StoreContext)
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Container className='mt-2'>
        <div className='d-flex justify-content-center align-items-center'>
          <NavLink to='/' style={{ color: 'orange', textDecoration: 'none' }}>
            <h3>Red Fox Market</h3>
          </NavLink>
        </div>

        {storeCtx.isAuth ? (
          <Nav className='d-flex justify-content-center align-items-center '>
            {storeCtx.user.role === 'ADMIN' && (
              <Button
                className='btn me-2'
                variant={'outline-warning'}
                onClick={() => {
                  history.push('/admin')
                }}
              >
                Admin
              </Button>
            )}
            <div className='me-3 '>
              {storeCtx.isAuth && storeCtx.user.role === 'USER' && (
                <NavLink
                  to='/cart'
                  style={{ color: '#FFC107', textDecoration: 'none' }}
                >
                  <Button
                    className='position-relative btn '
                    variant={'outline-warning'}
                  >
                    <i className='bi bi-bag-check'></i>
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                      {storeCtx.cart.length}
                      <span className='visually-hidden'>unread messages</span>
                    </span>{' '}
                  </Button>
                </NavLink>
              )}
            </div>
            <Button
              className='btn  mx-5`'
              variant={'outline-warning'}
              onClick={() => {
                storeCtx.setAuth(false)
                storeCtx.setUser({})
              }}
            >
              Log out
            </Button>
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
      </Container>
    </Navbar>
  )
}

export default NavBar
