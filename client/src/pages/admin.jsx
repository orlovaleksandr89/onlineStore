import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AdminItemsList from '../components/admin_section/AdminItemsList'
import CreateBar from '../components/admin_section/CreateBar'

const Admin = () => {
  return (
    <Row className='p-2 m-0'>
      <Col md={12} className=' p-0 m-0 my-2'>
        <CreateBar />
      </Col>
      <Col md={12} className=' '>
        <AdminItemsList />
      </Col>
    </Row>
  )
}

export default Admin
