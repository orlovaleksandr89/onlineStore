import React from 'react'

import { Navbar, Nav, Container, Image, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { MAIN_ROUTE } from '../../utils/consts'
import DropdownList from '../common/dropdown'
import { useUser } from '../../hooks/useUser'
import {
  AdminNavBtn,
  CartNavBtn,
  LogOutNavBtn,
  LoginNavBtn,
  UserNavBtn
} from '../navbar'

const AppNavBar = () => {
  const { user, isAuth, loguotUser } = useUser()

  return (
    <Navbar bg='dark' variant='dark' expand='md' className='p-0'>
      <Container>
        <Row className='d-flex justify-content-center align-items-center my-2 w-50'>
          <Col md={2}>
            <NavLink
              to={MAIN_ROUTE}
              style={{ color: 'orange', textDecoration: 'none' }}>
              <Image src={logo} style={{ height: '60px' }}></Image>
            </NavLink>
          </Col>
          <Col md={10} className=' d-none d-md-block  '>
            <DropdownList />
          </Col>
        </Row>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='flex-grow-0'>
          {isAuth ? (
            <Nav>
              {user.role === 'ADMIN' && isAuth && <AdminNavBtn />}

              <div className='d-none d-md-flex justify-content-center align-items-center position-relative me-2'>
                {user.role === 'USER' && <UserNavBtn />}
              </div>
              <div className='d-flex d-md-none '>
                {user.role === 'USER' && <CartNavBtn />}
              </div>

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
