import React from 'react'

import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { MAIN_ROUTE } from '../../utils/consts'
import DropdownList from '../common/dropdown'
import { useUser } from '../../hooks/useUser'
import { AdminNavBtn, CartNavBtn, LogOutNavBtn, LoginNavBtn } from '../navbar'

const AppNavBar = () => {
  const { user, isAuth, loguotUser } = useUser()

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
          {isAuth ? (
            <Nav>
              {user.role === 'ADMIN' && isAuth && <AdminNavBtn />}

              {user.role === 'USER' && <CartNavBtn />}

              <LogOutNavBtn loguotUser={loguotUser} />
            </Nav>
          ) : (
            <Nav>
              <LoginNavBtn />
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default React.memo(AppNavBar)
