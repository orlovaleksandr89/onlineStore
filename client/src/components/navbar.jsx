import React, { useContext } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import StoreContext from '../store/store'

const NavBar = () => {
  const history = useHistory()
  const storeCtx = useContext(StoreContext)
  console.log(storeCtx.role)
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <div className='d-flex '>
          <NavLink to='/' style={{ color: 'white', textDecoration: 'none' }}>
            Red Fox
          </NavLink>
          <div className='ms-4 '>
            {storeCtx.isAuth && storeCtx.role === 'USER' && (
              <NavLink
                to='/cart'
                style={{ color: '#FFC107', textDecoration: 'none' }}
              >
                Cart
              </NavLink>
            )}
          </div>
        </div>
        {storeCtx.isAuth ? (
          <Nav>
            {storeCtx.role === 'ADMIN' && (
              <Button className='btn me-2' variant={'outline-warning'}>
                Admin
              </Button>
            )}
            <Button
              className='btn '
              variant={'outline-warning'}
              onClick={() => {
                storeCtx.setAuth(false)
              }}
            >
              Sign out
            </Button>
          </Nav>
        ) : (
          <Nav>
            <Button
              className='btn'
              variant={'outline-warning'}
              onClick={() => {
                history.push('/login')
              }}
            >
              Login
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default NavBar
